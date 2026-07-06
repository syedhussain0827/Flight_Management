export default function AdminStats({
  flights,
}) {

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <div className="bg-white shadow rounded-2xl p-6">
        <h3>Total Flights</h3>

        <p className="text-4xl font-bold mt-3">
          {flights.length}
        </p>
      </div>

      <div className="bg-white shadow rounded-2xl p-6">
        <h3>Scheduled Flights</h3>

        <p className="text-4xl font-bold mt-3 text-green-600">
          {
            flights.filter(
              f => f.status === "scheduled"
            ).length
          }
        </p>
      </div>

      <div className="bg-white shadow rounded-2xl p-6">
        <h3>Available Seats</h3>

        <p className="text-4xl font-bold mt-3 text-blue-600">
          {
            flights.reduce(
              (acc, flight) =>
                acc + flight.availableSeats,
              0
            )
          }
        </p>
      </div>

    </div>
  );
}