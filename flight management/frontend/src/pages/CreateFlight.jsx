import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";
import AdminSidebar from "../components/AdminSidebar";

export default function CreateFlight() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    flightNumber: "",
    airline: "",
    source: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
    price: "",
    totalSeats: "",
  });

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post(
        "/flights",
        {
          ...form,
          price: Number(form.price),
          totalSeats: Number(form.totalSeats),
        }
      );

      alert(
        "Flight Created Successfully"
      );

      navigate("/admin");

    } catch (err) {

      alert(
        err.response?.data?.message ||
        "Failed to create flight"
      );

    }

  };

  return (

<div className="flex">

<AdminSidebar />

<div className="flex-1 bg-slate-50 min-h-screen p-8">

<div className="bg-white rounded-2xl shadow p-8 max-w-4xl">

<h1 className="text-3xl font-bold mb-8">
Create Flight
</h1>

<form
onSubmit={handleSubmit}
className="grid md:grid-cols-2 gap-5"
>

<input
name="flightNumber"
placeholder="Flight Number"
value={form.flightNumber}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="airline"
placeholder="Airline"
value={form.airline}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="source"
placeholder="Source"
value={form.source}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="destination"
placeholder="Destination"
value={form.destination}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
type="datetime-local"
name="departureTime"
value={form.departureTime}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
type="datetime-local"
name="arrivalTime"
value={form.arrivalTime}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
type="number"
name="price"
placeholder="Price"
value={form.price}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
type="number"
name="totalSeats"
placeholder="Total Seats"
value={form.totalSeats}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<button
className="
col-span-2
bg-blue-600
text-white
py-3
rounded-xl
font-semibold
"
>
Create Flight
</button>

</form>

</div>

</div>

</div>

  );
}