import { Button } from '@/components/ui/button'
import React from 'react'
import { NavLink } from 'react-router-dom';

function GetCons() {
  return (
    <div className='flex flex-col items-center justify-center'> 
    <div className="mt-64 text-3xl font-medium text-center text-black max-md:mt-10">
      Our team is ready to help!
    </div>
    <NavLink to="/counseling">
    <Button>
      Get Counseling
    </Button>

    </NavLink>
    </div>
  )
}

export default GetCons