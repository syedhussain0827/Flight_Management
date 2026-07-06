import {
 useContext,
 useState
}
from "react";

import {
 useNavigate
}
from "react-router-dom";

import API from "../api/axios";

import {
 AuthContext
}
from "../context/AuthContext";

export default function Login(){

 const navigate =
 useNavigate();

 const { login } =
 useContext(AuthContext);

 const [form,setForm] =
 useState({
 email:"",
 password:""
 });

 const submit =
 async(e)=>{

 e.preventDefault();

 try{

 const {data} =
 await API.post(
 "/auth/login",
 form
 );

 login(data);

 alert(
 "Login Successful"
 );

 navigate("/flights");

 }catch(err){

 alert(
 err.response?.data?.message
 ||
 "Login Failed"
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
Login
</h2>

<input
type="email"
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
Login
</button>

</form>

</div>

 );
}