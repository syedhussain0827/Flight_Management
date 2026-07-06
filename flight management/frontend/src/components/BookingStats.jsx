export default function BookingStats({
  bookings
}) {

  const total =
  bookings.length;

  const confirmed =
  bookings.filter(
    b => b.status === "confirmed"
  ).length;

  const cancelled =
  bookings.filter(
    b => b.status === "cancelled"
  ).length;

  const revenue =
  bookings
  .filter(
    b => b.status === "confirmed"
  )
  .reduce(
    (acc,b) =>
      acc + b.totalPrice,
    0
  );

  return (

<div className="grid md:grid-cols-4 gap-6 mb-8">

<div className="bg-white p-6 rounded-2xl shadow">
<h3>Total Bookings</h3>
<p className="text-4xl font-bold mt-3">
{total}
</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow">
<h3>Confirmed</h3>
<p className="text-4xl font-bold text-green-600 mt-3">
{confirmed}
</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow">
<h3>Cancelled</h3>
<p className="text-4xl font-bold text-red-600 mt-3">
{cancelled}
</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow">
<h3>Revenue</h3>
<p className="text-4xl font-bold text-blue-600 mt-3">
₹{revenue}
</p>
</div>

</div>

  );
}