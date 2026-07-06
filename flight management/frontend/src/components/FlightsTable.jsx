import { Link } from "react-router-dom";
import API from "../api/axios";

export default function FlightsTable({
  flights,
  refreshFlights,
}) {
  const deleteFlight = async (id) => {
    const confirmDelete =
      window.confirm(
        "Delete this flight?"
      );

    if (!confirmDelete) return;

    try {
      await API.delete(
        `/flights/${id}`
      );

      refreshFlights();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-100">

          <tr>
            <th className="p-4">
              Flight No
            </th>

            <th>Airline</th>

            <th>Route</th>

            <th>Price</th>

            <th>Seats</th>

            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {flights.map(
            (flight) => (
              <tr
                key={flight._id}
                className="border-t"
              >
                <td className="p-4">
                  {
                    flight.flightNumber
                  }
                </td>

                <td>
                  {flight.airline}
                </td>

                <td>
                  {flight.source}
                  →
                  {
                    flight.destination
                  }
                </td>

                <td>
                  ₹{flight.price}
                </td>

                <td>
                  {
                    flight.availableSeats
                  }
                </td>

                <td className="space-x-2">

                  <Link
                    to={`/admin/edit/${flight._id}`}
                    className="bg-blue-500 text-white px-3 py-2 rounded"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteFlight(
                        flight._id
                      )
                    }
                    className="bg-red-500 text-white px-3 py-2 rounded"
                  >
                    Delete
                  </button>

                </td>
              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}