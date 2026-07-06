import {
 useState
}
from "react";

import {
 useNavigate
}
from "react-router-dom";

import API from "../api/axios";

export default function Register(){

 const navigate =
 useNavigate();

 const [form,setForm] =
 useState({
 name:"",
 email:"",
 password:""
 });

 const submit =
 async(e)=>{

 e.preventDefault();

 try{

 await API.post(
 "/auth/register",
 form
 );

 alert(
 "Registration Successful"
 );

 navigate("/login");

 }catch(err){

 alert(
 err.response?.data?.message
 ||
 "Registration Failed"
 );

 }

 };

 return(

<div
className="
min-h-screen
bg-slate-100
flex
justify-center
items-center
"
>

<form
onSubmit={submit}
className="
bg-white
shadow-xl
rounded-3xl
p-10
w-[450px]
"
>

<h2
className="
text-4xl
font-bold
mb-8
text-center
"
>
Register
</h2>

<input
placeholder="Name"
className="
w-full
border
p-4
rounded-xl
mb-4
"
onChange={(e)=>
setForm({
...form,
name:e.target.value
})
}
/>

<input
placeholder="Email"
className="
w-full
border
p-4
rounded-xl
mb-4
"
onChange={(e)=>
setForm({
...form,
email:e.target.value
})
}
/>

<input
type="password"
placeholder="Password"
className="
w-full
border
p-4
rounded-xl
mb-6
"
onChange={(e)=>
setForm({
...form,
password:e.target.value
})
}
/>

<button
className="
w-full
bg-blue-600
text-white
p-4
rounded-xl
"
>
Register
</button>

</form>

</div>

 );
}