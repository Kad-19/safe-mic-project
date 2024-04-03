import React, { useState } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const Reg = () => {
  const [action,SetAction]= useState("sign up")
  return (
    <div className="flex bg-slate-300 border-slate-500 rounded pt-10 pl-10 pr-40 pb-32 shadow-lg    backdrop-blur-sm bg-opacity-50 text-sm/[40px] ">
    <form action="">
      
      <h1 className="text-[32px] pb-10 ">Your Account</h1>
      <div className="relative my-10 flex space-x-8 text-[18px]">
       <label htmlFor="">Email</label>
        <input type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    " placeholder="email" required />
    <MdOutlineMail className='absolute top-4 right-4'/>
      </div>
      <div className="relative my-7 flex space-x-2 text-[18px]">
      <label htmlFor=""> Password</label>
        <input type="password" className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" placeholder="password" required />
    <RiLockPasswordLine className='absolute top-4 right-4'/>
      </div>

    <div className="relative my-7 flex space-x-2 text-[18px] ">
      <label htmlFor="" className='w-60'>Confirm Password</label>
        <input type="password" className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" placeholder="password" required />
    <RiLockPasswordLine className='absolute top-4 right-4'/>
    </div>
      
      <div className="flex space-x-10 space-y-8 text-[18px] ">
        <button type="submit" className='w-32 mb-8  mt-6 rounded-full bg-purple-600 text-white hover:bg-purple-800 py-2 transition-colors duration-200' onClick={()=>{SetAction("Sign Up")}} >Sign Up</button>

        <div className="self-auto w-60 text-blue-500 cursor-pointer" >
          <span> Forgot Password? </span>
        </div>
      </div>
      <div className="register text-[18px]">
        <p> Already have Account? <span  className='text-blue-500 cursor-pointer'  >Login</span></p>
      </div>
    </form>
  </div>
  )
}

export default Reg