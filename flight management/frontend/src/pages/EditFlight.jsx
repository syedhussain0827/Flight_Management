import {
 useEffect,
 useState
} from "react";

import {
 useParams,
 useNavigate
} from "react-router-dom";

import API from "../api/axios";
import AdminSidebar from "../components/AdminSidebar";

export default function EditFlight() {

 const { id } = useParams();
 const navigate = useNavigate();

 const [form,setForm] =
 useState(null);

 useEffect(() => {

  fetchFlight();

 }, []);

 const fetchFlight =
 async () => {

 try {

 const { data } =
 await API.get(
 "/flights/admin/all"
 );

 const flight =
 data.find(
 f => f._id === id
 );

 setForm(flight);

 } catch(err){

 console.log(err);

 }

 };

 const handleChange =
 (e) => {

 setForm({
 ...form,
 [e.target.name]:
 e.target.value
 });

 };

 const updateFlight =
 async(e)=>{

 e.preventDefault();

 try{

 await API.put(
 `/flights/${id}`,
 form
 );

 alert(
 "Flight Updated"
 );

 navigate("/admin");

 }catch(err){

 alert(
 err.response?.data?.message
 );

 }

 };

 if(!form)
 return <h1>Loading...</h1>;

 return(

<div className="flex">

<AdminSidebar />

<div className="flex-1 bg-slate-50 min-h-screen p-8">

<div className="bg-white rounded-2xl shadow p-8 max-w-4xl">

<h1 className="text-3xl font-bold mb-8">
Edit Flight
</h1>

<form
onSubmit={updateFlight}
className="grid md:grid-cols-2 gap-5"
>

<input
name="flightNumber"
value={form.flightNumber}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="airline"
value={form.airline}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="source"
value={form.source}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="destination"
value={form.destination}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="price"
value={form.price}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<input
name="availableSeats"
value={form.availableSeats}
onChange={handleChange}
className="border p-3 rounded-xl"
/>

<select
name="status"
value={form.status}
onChange={handleChange}
className="border p-3 rounded-xl"
>

<option value="scheduled">
Scheduled
</option>

<option value="cancelled">
Cancelled
</option>

<option value="completed">
Completed
</option>

</select>

<button
className="
bg-green-600
text-white
py-3
rounded-xl
col-span-2
"
>
Update Flight
</button>

</form>

</div>

</div>

</div>

 );

}