export default function BookingTable({
 bookings
}) {

 return (

<div className="bg-white rounded-2xl shadow overflow-hidden">

<table className="w-full">

<thead className="bg-slate-100">

<tr>

<th className="p-4">
Customer
</th>

<th>
Email
</th>

<th>
Flight
</th>

<th>
Seats
</th>

<th>
Amount
</th>

<th>
Status
</th>

</tr>

</thead>

<tbody>

{
bookings.map(
booking => (

<tr
key={booking._id}
className="border-t"
>

<td className="p-4">
{
booking.user?.name
}
</td>

<td>
{
booking.user?.email
}
</td>

<td>
{
booking.flight?.flightNumber
}
</td>

<td>
{
booking.seats
}
</td>

<td>
₹
{
booking.totalPrice
}
</td>

<td>

<span
className={`
px-3
py-1
rounded-full
text-white
text-sm
${
booking.status ===
"confirmed"
?
"bg-green-500"
:
"bg-red-500"
}
`}
>

{
booking.status
}

</span>

</td>

</tr>

)
)
}

</tbody>

</table>

</div>

 );

}