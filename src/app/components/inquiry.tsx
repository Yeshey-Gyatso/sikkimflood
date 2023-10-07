"use client";
import React from 'react'
import { useState,useEffect } from 'react';
import fs from 'fs';

const Inquiry = () => {

    const [name,setName]=useState<string>("");
    const [location,setLocation]=useState<string>("");
    const [phone,setPhone]=useState<string>("");
    const [email,setEmail]=useState<string>("");
    const [message,setMessage]=useState<string>("");

    const Submit = (e) => {
        e.preventDefault();
    
        const formData = {
          name,
          location,
          phone,
          email,
          message,
        };

          // Convert the form data to JSON
    const jsonData = JSON.stringify(formData, null, 2);

    // Write the JSON data to the text.json file
    fs.writeFileSync('text.json', jsonData, 'utf8');

    // Reset the form fields after submission
    setName('');
    setLocation('');
    setPhone('');
    setEmail('');
    setMessage('');
  };

     
      

  return (
    <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">

  <div className="text-3xl mb-6 text-center ">
    Please fill the form below 
  </div>

  <form
  onSubmit={Submit}
  className="grid grid-cols-2 gap-4 max-w-xl m-auto">

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
      onChange={(e)=>{setPhone(e.target.value)}}
      required 
      className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="phone"/>
    </div>

    <div className="col-span-2 lg:col-span-1">
      <input type="email" 
      onChange={(e)=>{setEmail(e.target.value)}}
      required 
      className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Email Address"/>
    </div>

    <div className="col-span-2">
      <textarea cols={30} rows={8}
      onChange={(e)=>{setMessage(e.target.value)}}
      className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full" placeholder="Message"></textarea>
    </div>

    <div className="col-span-2 text-right">
      <button 
      type="submit"
      className="py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32">
        Submit
      </button>
    </div>


  </form>
 
</div>
  )
}

export default Inquiry