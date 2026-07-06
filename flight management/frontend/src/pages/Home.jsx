import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SearchBox from "../components/SearchBox";

export default function Home(){

return(
<>

<HeroSection />
<SearchBox />

<section className="max-w-7xl mx-auto py-20 px-6">

<h2
className="
text-4xl
font-bold
text-center
mb-12
"
>
Why Choose Us?
</h2>

<div
className="
grid
md:grid-cols-3
gap-8
"
>

<div className="p-8 shadow rounded-2xl">
✈️ Best Airlines
</div>

<div className="p-8 shadow rounded-2xl">
💰 Best Prices
</div>

<div className="p-8 shadow rounded-2xl">
🛡️ Secure Booking
</div>

</div>

</section>
</>
);
}