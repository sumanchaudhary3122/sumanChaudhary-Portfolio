import {  useNavigate} from "react-router-dom";
import  { useState } from "react";
import { toast } from "react-toastify";


export const Createadmin = () => {
    const navigate = useNavigate()
const [username, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState('')

const CreateAdmin= async(e)=>{
    e.preventDefault();
    const userData={
        username,
        email,
        password,
    }
    console.log("Sending:",userData)
    try{
        const url=("http://localhost:8000/register")
        const response= await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(userData)
        })
        const data= await response.json()
        console.log("Status:", response.status);
console.log("Response:", data);

      if (!response.ok) {
    throw new Error(data.message || data.detail || "Failed to register");
}


        toast.success("Account Created Successfully")
        setName("")
        setEmail("")
        setPassword("")
        navigate('/login')
    }
    catch(error){
    console.log("Error:",error.message)
    }
}
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign up to get started
          </p>
        </div>
        <form  onSubmit={CreateAdmin} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
            onChange={(e)=>setName(e.target.value)}
            value={username}
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input onChange={(e)=>setPassword(e.target.value)}
            value={password}
              type="password"
              id="password"
              name="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>
          <div className="flex items-start">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the
              <a href="#" className="font-medium text-blue-600 hover:underline">
                Terms & Conditions
              </a>
            </label>
          </div>
          <button 
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>
    
      </div>
    </div>
  );
};