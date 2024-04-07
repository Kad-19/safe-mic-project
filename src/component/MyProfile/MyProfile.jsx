import React from 'react'

const MyProfile = () => {
  return (
    <div className="flex justify-center items-center rounded md p8 m-20">
    <div className="flex bg-slate-300 border-slate-500 rounded pt-10 pl-20 pr-40 pb-32 shadow-lg bg-opacity-50 text-sm/[40px] ">
      <form action="">
        <h1 className="text-[32px] pb-10 pt-12  text-center">My Profile</h1>
        <div className="text-[18px] pb-12">
        <p>User Name: kdds123</p>
        <p>Email: example@gmail.com</p>
        </div>
        <div className="border-t border-black my-4"></div>
        
        <div className="flex space-x-10 space-y- text-[18px] my-12">
          <button type="submit" className='h-12 w-60 object-cover rounded-full bg-black text-white hover:bg-gray-600 py- transition-colors duration-200'>Reset Password</button>

          <button type="submit" className='h-12 w-60 object-cover rounded-full bg-white text-red-600 hover:bg-red-300 py-0 transition-colors duration-200'>Delete Account</button>
        </div>       
      </form>
    </div>
  </div>
  )
}

export default MyProfile