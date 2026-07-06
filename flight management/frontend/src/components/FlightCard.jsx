import { useState } from "react";
import API from "../api/axios";

export default function FlightCard({ flight }) {
  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "Male",
    seats: 1,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const bookFlight = async () => {
    try {
      await API.post("/bookings", {
        flightId: flight._id,
        seats: Number(form.seats),

        passengers: [
          {
            name: form.name,
            age: Number(form.age),
            gender: form.gender,
          },
        ],
      });

      alert("Flight Booked Successfully");

      setShowModal(false);

      setForm({
        name: "",
        age: "",
        gender: "Male",
        seats: 1,
      });
    } catch (err) {
      alert(
        err.response?.data?.message ||
          "Booking Failed"
      );
    }
  };

  return (
    <>
      <div
        className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition
        duration-300
      "
      >
        <img
          src={`https://picsum.photos/600/400?random=${flight._id}`}
          alt=""
          className="
          w-full
          h-56
          object-cover
        "
        />

        <div className="p-6">
          <h2
            className="
            text-2xl
            font-bold
            mb-3
          "
          >
            {flight.airline}
          </h2>

          <div className="space-y-2">
            <p>
              ✈️ Flight:
              <b> {flight.flightNumber}</b>
            </p>

            <p>
              📍 {flight.source} → {flight.destination}
            </p>

            <p>
              💺 Available:
              {flight.availableSeats}
            </p>

            <p>
              💰 ₹{flight.price}
            </p>
          </div>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="
            mt-5
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-xl
            font-semibold
            hover:bg-blue-700
          "
          >
            Book Flight
          </button>
        </div>
      </div>

      {showModal && (
        <div
          className="
          fixed
          inset-0
          bg-black/50
          flex
          justify-center
          items-center
          z-50
        "
        >
          <div
            className="
            bg-white
            rounded-2xl
            p-8
            w-[450px]
            shadow-2xl
          "
          >
            <h2
              className="
              text-2xl
              font-bold
              mb-6
              text-center
            "
            >
              Flight Booking
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Passenger Name"
              value={form.name}
              onChange={handleChange}
              className="
              w-full
              border
              p-3
              rounded-xl
              mb-4
            "
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              value={form.age}
              onChange={handleChange}
              className="
              w-full
              border
              p-3
              rounded-xl
              mb-4
            "
            />

            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className="
              w-full
              border
              p-3
              rounded-xl
              mb-4
            "
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="number"
              min="1"
              max={flight.availableSeats}
              name="seats"
              value={form.seats}
              onChange={handleChange}
              className="
              w-full
              border
              p-3
              rounded-xl
              mb-4
            "
            />

            <div
              className="
              bg-slate-100
              p-4
              rounded-xl
              mb-5
            "
            >
              <p>
                Flight:
                <b>
                  {" "}
                  {flight.flightNumber}
                </b>
              </p>

              <p>
                Route:
                <b>
                  {" "}
                  {flight.source} →
                  {flight.destination}
                </b>
              </p>

              <p>
                Seats:
                <b> {form.seats}</b>
              </p>

              <p>
                Total:
                <b className="text-green-600">
                  ₹
                  {flight.price *
                    Number(form.seats)}
                </b>
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  setShowModal(false)
                }
                className="
                flex-1
                bg-gray-300
                py-3
                rounded-xl
              "
              >
                Cancel
              </button>

              <button
                onClick={bookFlight}
                className="
                flex-1
                bg-blue-600
                text-white
                py-3
                rounded-xl
              "
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}