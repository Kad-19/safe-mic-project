import React from 'react';
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";


const LoginPage = () => {
  return (
  <div className="flex justify-center items-center rounded md p8 m-20">
    <div className="flex bg-slate-300 border-slate-500 rounded pt-10 pl-10 pr-40 pb-32 shadow-lg bg-opacity-50 text-sm/[40px] ">
      <form action="">
        <h1 className="text-[32px] pb-10 ">Your Account</h1>
        <div className="relative my-10 flex space-x-8 text-[18px]">
         <label htmlFor="">Email</label>
          <input type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      " required />
      <MdOutlineMail className='absolute top-4 right-4'/>
        </div>
        <div className="relative my-7 flex space-x-2 text-[18px]">
        <lable htmlFor=""> Password</lable>
          <input type="password" className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
         focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" required />
      <RiLockPasswordLine className='absolute top-4 right-4'/>
        </div>

        <div className="flex space-x-10 space-y-8 text-[18px] ">
          <button type="submit" className='w-32 mb-8  mt-6 rounded-full bg-purple-600 text-white hover:bg-purple-800 py-2 transition-colors duration-200'>Login</button>

          <div className="self-auto w-60 text-blue-500">
            <a href="#" >Forgot Password?</a>
          </div>
        </div>
        <div className="register text-[18px]">
          <p> New to Safe Mic? <a href="#" className='text-blue-500' >Create Account</a></p>
        </div>
      </form>
    </div>
  </div>
  );
}

export default LoginPage;
