import {
 useEffect,
 useState
}
from "react";

import {
 useSearchParams
}
from "react-router-dom";

import API from "../api/axios";

import Navbar
from "../components/Navbar";

import Loader
from "../components/Loader";

import FlightCard
from "../components/FlightCard";

export default function Flights(){

 const [loading,setLoading]
 = useState(true);

 const [flights,setFlights]
 = useState([]);

 const [searchParams] =
 useSearchParams();

 const [source,setSource]
 = useState(
 searchParams.get("source")
 || ""
 );

 const [destination,
 setDestination]
 = useState(
 searchParams.get("destination")
 || ""
 );

 const [date,setDate]
 = useState(
 searchParams.get("date")
 || ""
 );

 useEffect(()=>{

  fetchFlights();

 },[]);

 const fetchFlights =
 async()=>{

 try{

 const {data} =
 await API.get(
 "/flights"
 );

 setFlights(data);

 }catch(err){

 console.log(err);

 }finally{

 setLoading(false);

 }

 };

 const searchFlights =
 async()=>{

 try{

 setLoading(true);

 const {data} =
 await API.get(
 `/flights/search?source=${source}&destination=${destination}&date=${date}`
 );

 setFlights(data);

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
pt-28
"
>

<div
className="
max-w-7xl
mx-auto
px-6
"
>

<div
className="
bg-white
shadow-xl
rounded-3xl
p-6
mb-10
"
>

<h2
className="
text-3xl
font-bold
mb-6
"
>
Search Flights
</h2>

<div
className="
grid
md:grid-cols-4
gap-4
"
>

<input
placeholder="Source"
value={source}
onChange={(e)=>
setSource(
e.target.value
)
}
className="
border
p-4
rounded-xl
"
/>

<input
placeholder="Destination"
value={destination}
onChange={(e)=>
setDestination(
e.target.value
)
}
className="
border
p-4
rounded-xl
"
/>

<input
type="date"
value={date}
onChange={(e)=>
setDate(
e.target.value
)
}
className="
border
p-4
rounded-xl
"
/>

<button
onClick={searchFlights}
className="
bg-blue-600
text-white
rounded-xl
font-semibold
"
>
Search
</button>

</div>

</div>

{
loading ?

<Loader />

:

flights.length === 0 ?

<div
className="
text-center
py-20
"
>

<h2
className="
text-3xl
font-bold
"
>
No Flights Found
</h2>

</div>

:

<div
className="
grid
md:grid-cols-3
gap-8
pb-20
"
>

{
flights.map(
(flight)=>(
<FlightCard
key={flight._id}
flight={flight}
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