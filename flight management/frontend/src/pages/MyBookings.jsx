import {
 useEffect,
 useState
}
from "react";

import API from "../api/axios";

import Navbar
from "../components/Navbar";

import Loader
from "../components/Loader";

import BookingCard
from "../components/BookingCard";

export default function MyBookings(){

 const [loading,setLoading]
 = useState(true);

 const [bookings,
 setBookings]
 = useState([]);

 useEffect(()=>{

 fetchBookings();

 },[]);

 const fetchBookings =
 async()=>{

 try{

 const {data} =
 await API.get(
 "/bookings/my"
 );

 setBookings(data);

 }catch(err){

 console.log(err);

 }finally{

 setLoading(false);

 }

 };

 return(

<>


<div
className="
bg-slate-50
min-h-screen
"
>

<div
className="
max-w-7xl
mx-auto
px-6
py-10
"
>

<h1
className="
text-5xl
font-bold
mb-8
"
>
My Bookings
</h1>

{
loading ?

<Loader />

:

bookings.length === 0 ?

<div
className="
bg-white
rounded-3xl
shadow-lg
p-10
text-center
"
>

<h2
className="
text-3xl
font-bold
"
>
No Bookings Yet
</h2>

<p
className="
text-gray-500
mt-4
"
>
Book your first flight.
</p>

</div>

:

<div
className="
grid
md:grid-cols-3
gap-8
"
>

{
bookings.map(
(booking)=>(
<BookingCard
key={booking._id}
booking={booking}
refreshBookings={
fetchBookings
}
/>
)
)
}

</div>

}

</div>

</div>

</>

 );
}