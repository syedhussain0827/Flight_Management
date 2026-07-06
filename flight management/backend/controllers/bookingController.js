const Booking = require('../models/Booking');
const Flight = require('../models/Flight');
const {
  sendBookingConfirmation,
  sendCancellationEmail,
} = require('../utils/sendEmail');

exports.bookFlight = async (req, res) => {
  try {
    const { flightId, seats } = req.body;

    const flight = await Flight.findById(flightId);

    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }

    if (flight.availableSeats < seats) {
      return res.status(400).json({
        message: 'Not enough seats available',
      });
    }

    const totalPrice = flight.price * seats;

    const booking = await Booking.create({
      user: req.user._id,
      flight: flightId,
      seats,
      totalPrice,
    });

    flight.availableSeats -= seats;
    await flight.save();

    // Email should not break booking
    try {
      await sendBookingConfirmation(
        req.user.email,
        req.user.name,
        flight,
        booking
      );
    } catch (emailError) {
      console.log(
        'Booking email failed:',
        emailError.message
      );
    }

    res.status(201).json({
      success: true,
      booking,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({
      user: req.user._id,
    })
      .populate('flight')
      .sort({ createdAt: -1 });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(
      req.params.id
    ).populate('flight');

    if (!booking) {
      return res.status(404).json({
        message: 'Booking not found',
      });
    }

    if (
      booking.user.toString() !==
      req.user._id.toString()
    ) {
      return res.status(403).json({
        message: 'Not authorized',
      });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({
        message: 'Already cancelled',
      });
    }

    booking.status = 'cancelled';
    await booking.save();

    const flight = await Flight.findById(
      booking.flight._id
    );

    flight.availableSeats += booking.seats;
    await flight.save();

    try {
      await sendCancellationEmail(
        req.user.email,
        req.user.name,
        booking.flight,
        booking
      );
    } catch (emailError) {
      console.log(
        'Cancellation email failed:',
        emailError.message
      );
    }

    res.json({
      message: 'Booking cancelled successfully',
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate('user', 'name email')
      .populate('flight');

    res.json(bookings);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};