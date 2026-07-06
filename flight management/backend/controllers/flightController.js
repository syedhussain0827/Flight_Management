const Flight = require('../models/Flight');

exports.getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find({ status: 'scheduled' });
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.searchFlights = async (req, res) => {
  try {
    const { source, destination, date } = req.query;
    const query = { status: 'scheduled' };
    if (source)      query.source      = new RegExp(source, 'i');
    if (destination) query.destination = new RegExp(destination, 'i');
    if (date) {
      const start = new Date(date);
      const end   = new Date(date);
      end.setDate(end.getDate() + 1);
      query.departureTime = { $gte: start, $lt: end };
    }
    const flights = await Flight.find(query);
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAdminFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFlight = async (req, res) => {
  try {
    const flight = await Flight.create({
      ...req.body,
      availableSeats: req.body.totalSeats,
    });
    res.status(201).json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateFlight = async (req, res) => {
  try {
    const flight = await Flight.findByIdAndUpdate(
      req.params.id, req.body, { new: true }
    );
    if (!flight) return res.status(404).json({ message: 'Flight not found' });
    res.json(flight);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteFlight = async (req, res) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.json({ message: 'Flight deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};