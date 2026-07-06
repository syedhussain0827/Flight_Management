const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

const sendBookingConfirmation = async (to, userName, flight, booking)=>{
    await transporter.sendMail({
        from: `"FlightBooking" <${process.env.EMAIL_USER}>`,
        to,
        subject: `✈️ Booking Confirmed — ${flight.flightNumber}`,
        html: ` <div style="font-family:sans-serif;max-width:500px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
        <div style="background:#1e3a8a;padding:24px;text-align:center;">
          <h1 style="color:white;margin:0;">✈️ Booking Confirmed!</h1>
        </div>
        <div style="padding:24px;">
          <p>Hi <strong>${userName}</strong>, your flight has been booked successfully!</p>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr style="background:#f1f5f9;"><td style="padding:8px 12px;font-weight:bold;">Flight</td><td style="padding:8px 12px;">${flight.flightNumber} (${flight.airline})</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;">From</td><td style="padding:8px 12px;">${flight.source}</td></tr>
            <tr style="background:#f1f5f9;"><td style="padding:8px 12px;font-weight:bold;">To</td><td style="padding:8px 12px;">${flight.destination}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;">Departure</td><td style="padding:8px 12px;">${new Date(flight.departureTime).toLocaleString()}</td></tr>
            <tr style="background:#f1f5f9;"><td style="padding:8px 12px;font-weight:bold;">Arrival</td><td style="padding:8px 12px;">${new Date(flight.arrivalTime).toLocaleString()}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;">Seats</td><td style="padding:8px 12px;">${booking.seats}</td></tr>
            <tr style="background:#f1f5f9;"><td style="padding:8px 12px;font-weight:bold;">Total Paid</td><td style="padding:8px 12px;color:#16a34a;font-weight:bold;">₹${booking.totalPrice}</td></tr>
          </table>
          <p style="margin-top:24px;color:#6b7280;">Thank you for booking with FlightBook! Have a safe journey. 🙏</p>
        </div>
      </div>` 
    })
}

const sendCancellationEmail = async (to, userName, flight, booking) => {
  await transporter.sendMail({
    from: `"FlightBook" <${process.env.EMAIL_USER}>`,
    to,
    subject: `❌ Booking Cancelled — ${flight.flightNumber}`,
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:auto;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;">
        <div style="background:#dc2626;padding:24px;text-align:center;">
          <h1 style="color:white;margin:0;">❌ Booking Cancelled</h1>
        </div>
        <div style="padding:24px;">
          <p>Hi <strong>${userName}</strong>, your booking has been cancelled.</p>
          <table style="width:100%;border-collapse:collapse;margin-top:16px;">
            <tr style="background:#f1f5f9;"><td style="padding:8px 12px;font-weight:bold;">Flight</td><td style="padding:8px 12px;">${flight.flightNumber} (${flight.airline})</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;">From → To</td><td style="padding:8px 12px;">${flight.source} → ${flight.destination}</td></tr>
            <tr style="background:#f1f5f9;"><td style="padding:8px 12px;font-weight:bold;">Departure</td><td style="padding:8px 12px;">${new Date(flight.departureTime).toLocaleString()}</td></tr>
            <tr><td style="padding:8px 12px;font-weight:bold;">Seats</td><td style="padding:8px 12px;">${booking.seats}</td></tr>
            <tr style="background:#f1f5f9;"><td style="padding:8px 12px;font-weight:bold;">Refund Amount</td><td style="padding:8px 12px;color:#dc2626;font-weight:bold;">₹${booking.totalPrice}</td></tr>
          </table>
          <p style="margin-top:24px;color:#6b7280;">We hope to see you again soon! ✈️</p>
        </div>
      </div>
    `,
  });
};

module.exports = {sendBookingConfirmation, sendCancellationEmail}