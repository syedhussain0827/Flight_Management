import API from "../api/axios";

export default function BookingCard({
 booking,
 refreshBookings
}) {

 const cancelBooking =
 async()=>{

 try{

 await API.put(
 `/bookings/cancel/${booking._id}`
 );

 alert(
 "Booking Cancelled"
 );

 refreshBookings();

 }catch(err){

 alert(
 err.response?.data?.message
 );

 }

 };

 return (

<div
className="
bg-white
shadow-lg
rounded-3xl
overflow-hidden
"
>

<img
src={`https://picsum.photos/600/400?random=${booking._id}`}
alt=""
className="
w-full
h-52
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
{
booking.flight?.flightNumber
}
</h2>

<p>
📍
{
booking.flight?.source
}
 →
 {
booking.flight?.destination
}
</p>

<p className="mt-2">
💺 Seats:
 {booking.seats}
</p>

<p className="mt-2">
💰 ₹
 {booking.totalPrice}
</p>

<p
className={`
mt-4
font-semibold
${
booking.status ===
"confirmed"
?
"text-green-600"
:
"text-red-600"
}
`}
>

{
booking.status
}

</p>

{
booking.status ===
"confirmed"
&& (

<button
onClick={cancelBooking}
className="
mt-5
bg-red-500
text-white
w-full
py-3
rounded-xl
"
>
Cancel Booking
</button>

)
}

</div>

</div>

 );
}