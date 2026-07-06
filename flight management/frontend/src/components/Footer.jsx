export default function Footer() {

  return (

<footer className="bg-slate-900 text-white mt-20">

<div className="max-w-7xl mx-auto px-6 py-10">

<div className="grid md:grid-cols-3 gap-10">

<div>

<h2 className="text-2xl font-bold mb-4">
SkyBook
</h2>

<p>
Book flights quickly and securely.
</p>

</div>

<div>

<h3 className="font-semibold mb-3">
Quick Links
</h3>

<ul className="space-y-2">
<li>Home</li>
<li>Flights</li>
<li>Bookings</li>
</ul>

</div>

<div>

<h3 className="font-semibold mb-3">
Support
</h3>

<ul className="space-y-2">
<li>Email Support</li>
<li>Customer Care</li>
<li>Privacy Policy</li>
</ul>

</div>

</div>

<hr className="my-6 border-slate-700"/>

<p className="text-center text-slate-400">
© 2026 SkyBook. All Rights Reserved.
</p>

</div>

</footer>

  );
}