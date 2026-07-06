export default function HeroSection(){

return(

<div
className="
h-screen
bg-cover
bg-center
relative
"
style={{
backgroundImage:
"url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2000')"
}}
>

<div className="absolute inset-0 bg-black/50"/>

<div className="relative z-10 h-full flex flex-col justify-center items-center text-center">

<h1
className="
text-7xl
font-bold
text-white
mb-6
"
>
Explore The World
</h1>

<p
className="
text-xl
text-gray-200
max-w-2xl
"
>
Find the best flights at the best prices.
Travel smarter with SkyBook.
</p>

</div>

</div>

);
}