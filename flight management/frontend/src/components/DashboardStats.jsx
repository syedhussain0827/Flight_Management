export default function DashboardStats({
  flights
}) {

  const totalFlights =
  flights.length;

  const scheduledFlights =
  flights.filter(
    f => f.status === "scheduled"
  ).length;

  const totalSeats =
  flights.reduce(
    (acc, flight) =>
      acc + flight.availableSeats,
    0
  );

  return (

    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <div className="bg-white rounded-2xl shadow p-6">

        <h3 className="text-gray-500">
          Total Flights
        </h3>

        <p className="text-4xl font-bold mt-2">
          {totalFlights}
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <h3 className="text-gray-500">
          Scheduled Flights
        </h3>

        <p className="text-4xl font-bold mt-2 text-green-600">
          {scheduledFlights}
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">

        <h3 className="text-gray-500">
          Available Seats
        </h3>

        <p className="text-4xl font-bold mt-2 text-blue-600">
          {totalSeats}
        </p>

      </div>

    </div>

  );
}