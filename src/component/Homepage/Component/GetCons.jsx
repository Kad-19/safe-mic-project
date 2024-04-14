import { Button } from '@/components/ui/button'
import React from 'react'
import { NavLink } from 'react-router-dom';

function GetCons() {
  return (
    <div className='flex flex-col items-center justify-center py-24'> 
      <p className="text-3xl m-8 font-medium text-center max-md:mt-10">
        Our team is ready to help!
      </p>
      <NavLink to="/counseling">
      <Button>
        Get Counseling
      </Button>
      </NavLink>
    </div>
  )
}

export default GetCons