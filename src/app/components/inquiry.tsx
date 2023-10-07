"use client";
import React from 'react'
import { useState,useEffect } from 'react';

const Inquiry = () => {

    const [name,setName]=useState<string>("");
    const [location,setLocation]=useState<string>("");
    const [phone,setPhone]=useState<number>();
    const [email,setEmail]=useState<string>("");
    const [message,setMessage]=useState<string>("");

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      

  return (
    <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">

  <div className="text-3xl mb-6 text-center ">
    Please fill the form below 
  </div>

  <div className="grid grid-cols-2 gap-4 max-w-xl m-auto">

    <div className="col-span-2 lg:col-span-1">
      <input type="text" 
      onChange={(e)=>{setName(e.target.value)}}
      required 
      className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Full Name"/>
    </div>

    <div className="col-span-2 lg:col-span-1">
      <input type="text" 
      onChange={(e)=>{setLocation(e.target.value)}}
      required 
      className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Last known location"/>
    </div>
    
    <div className="col-span-2 lg:col-span-1">
      <input type="number" 
      required 
      className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="phone"/>
    </div>

    <div className="col-span-2 lg:col-span-1">
      <input type="text" 
      required 
      className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Email Address"/>
    </div>

    <div className="col-span-2">
      <textarea cols={30} rows={8} className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Message"></textarea>
    </div>

    <div className="col-span-2 text-right">
      <button className="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32">
        Submit
      </button>
    </div>

  </div>
</div>
  )
}

export default Inquiry