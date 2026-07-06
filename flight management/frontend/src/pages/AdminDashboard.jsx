import {
 useEffect,
 useState
}
from "react";

import API from "../api/axios";

import AdminSidebar
from "../components/AdminSidebar";

import DashboardStats
from "../components/DashboardStats";

import FlightsTable
from "../components/FlightsTable";

export default function AdminDashboard(){

 const [flights,setFlights]
 = useState([]);

 useEffect(()=>{

  fetchFlights();

 },[]);

 const fetchFlights =
 async()=>{

 try{

 const {data} =
 await API.get(
 "/flights/admin/all"
 );

 setFlights(data);

 }catch(err){

 console.log(err);

 }

 };

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
Admin Dashboard
</h1>

<DashboardStats
flights={flights}
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

<h2
className="
text-2xl
font-bold
mb-4
"
>
Quick Actions
</h2>

<a
href="/admin/create"
className="
bg-blue-600
text-white
px-5
py-3
rounded-xl
"
>
Create New Flight
</a>

</div>

<FlightsTable
flights={flights}
refreshFlights={
fetchFlights
}
/>

</div>

</div>

 );

}