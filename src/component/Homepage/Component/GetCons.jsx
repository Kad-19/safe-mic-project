import { Button } from '@/components/ui/button'
import React from 'react'
import { NavLink } from 'react-router-dom';

function GetCons() {
  return (
    <div className='flex flex-col items-center justify-center'> 
    <div className="mt-64 text-3xl font-medium text-center text-black max-md:mt-10">
      Our team is ready to help
    </div>
    <NavLink to="/counseling">
    <Button className="justify-center px-7 py-5 mt-16 text-lg font-medium text-center border border-solid bg-neutral-700 border-neutral-700 rounded-[31px] text-neutral-50 max-md:px-5 max-md:mt-10 hover:text-neutral-700 hover:bg-neutral-50 transition-all duration-300 ease-in-out">
      Get Counseling
    </Button>

    </NavLink>
    </div>
  )
}

export default GetCons