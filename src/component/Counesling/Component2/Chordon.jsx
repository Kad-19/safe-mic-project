import { Button } from '@/components/ui/button'
import React from 'react'

function Chordon() {
  return (
    <div><div className="mt-96 text-2xl font-bold text-center text-neutral-700 max-md:mt-10 max-md:max-w-full">
    “Nothing ever goes away until it has taught us what we need to know.”
  </div>
  <div className="shrink-0 mt-8 w-px border border-solid bg-neutral-600 border-neutral-600 h-[66px] mx-auto"></div>
  <div className="mt-7 text-2xl font-bold text-center text-neutral-600">
    Chödrön
  </div>
  <div className="mt-64 text-3xl font-bold text-center text-neutral-700 max-md:mt-10 max-md:max-w-full">
    Take the first step toward a healthier you
  </div>
  <div className="flex gap-5 items-start mt-14 text-2xl font-bold max-md:flex-wrap max-md:mt-10">
    <Button className="grow justify-center px-5 py-7 text-xl font-medium bg-white border border-neutral-700 border-solid rounded-[36px] text-stone-700 w-fit max-md:px-5 hover:text-neutral-200 transition-all duration-300 ease-in-out">
      Chat with a counselor
    </Button>
    <Button className="grow justify-center px-5 py-7 font-medium border text-xl border-neutral-700 border-solid bg-neutral-700 rounded-[36px] text-stone-200 w-fit max-md:px-5  hover:text-neutral-200 transition-all duration-300 ease-in-out">
      Book Appointment
    </Button>
    
  </div>
  
</div>

  )
}

export default Chordon