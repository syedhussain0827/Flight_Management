import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SearchBox(){

const navigate = useNavigate();

const [source,setSource] =
useState("");

const [destination,
setDestination] =
useState("");

const [date,setDate] =
useState("");

const search=()=>{

navigate(
`/flights?source=${source}&destination=${destination}&date=${date}`
);

};

return(

<div
className="
max-w-6xl
mx-auto
bg-white
rounded-3xl
shadow-2xl
p-8
-translate-y-24
relative
z-20
"
>

<div className="grid md:grid-cols-4 gap-4">

<input
placeholder="From"
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
outline-none
"
/>

<input
placeholder="To"
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
outline-none
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
outline-none
"
/>

<button
onClick={search}
className="
bg-blue-600
text-white
rounded-xl
font-semibold
"
>
Search Flights
</button>

</div>

</div>

);
}