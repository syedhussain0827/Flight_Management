import {
 useEffect,
 useState
}
from "react";

import API from "../api/axios";

import AdminSidebar
from "../components/AdminSidebar";

import BookingStats
from "../components/BookingStats";

import BookingTable
from "../components/BookingTable";

export default function AdminBookings(){

 const [bookings,
 setBookings]
 = useState([]);

 const [filtered,
 setFiltered]
 = useState([]);

 const [search,
 setSearch]
 = useState("");

 useEffect(()=>{

 fetchBookings();

 },[]);

 const fetchBookings =
 async()=>{

 try{

 const {data} =
 await API.get(
 "/bookings/admin/all"
 );

 setBookings(data);
 setFiltered(data);

 }catch(err){

 console.log(err);

 }

 };

 useEffect(()=>{

 const result =
 bookings.filter(
 booking =>

 booking.user?.name
 ?.toLowerCase()
 .includes(
 search.toLowerCase()
 )

 ||

 booking.flight
 ?.flightNumber
 ?.toLowerCase()
 .includes(
 search.toLowerCase()
 )

 );

 setFiltered(result);

 },[
 search,
 bookings
 ]);

 return(

<div className="flex">

<AdminSidebar />

<div
className="
flex-1
bg-slate-50
min-h-screen
p-8
"
>

<h1
className="
text-4xl
font-bold
mb-8
"
>
Booking Management
</h1>

<BookingStats
bookings={bookings}
/>

<div
className="
bg-white
rounded-2xl
shadow
p-6
mb-8
"
>

<input
placeholder="
Search customer
or flight number
"
value={search}
onChange={(e)=>
setSearch(
e.target.value
)
}
className="
border
p-3
rounded-xl
w-full
"
/>

</div>

<BookingTable
bookings={filtered}
/>

</div>

</div>

 );

}