import { Button } from '@/components/ui/button'
import React from 'react'

function Direct() {
  return (
    <div className="flex flex-col items-center px-20 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="self-stretch text-8xl font-bold bg-clip-text max-md:mr-1.5 max-md:max-w-full max-md:text-4xl">
          Get Online Counseling Service
        </div>
        <Button className="justify-center self-start px-8 py-6 mt-16 ml-7 text-2xl font-medium bg-white border border-stone-700 border-solid rounded-[36px] text-stone-700 max-md:px-5 max-md:mt-10 max-md:ml-2.5 hover:text-neutral-200 transition-all duration-300 ease-in-out">
          Chat with a counselor
        </Button>
        <div className="self-stretch mt-72 text-2xl font-bold text-black max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          What is Online Counseling?
        </div>
        <div className="mt-12 text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>
        <div className="mt-5 text-xl font-bold text-neutral-600 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <Button className="justify-center self-start px-8 py-5 mt-14 text-xl font-bold border border-neutral-700 border-solid bg-neutral-700 rounded-[36px] text-stone-50 max-md:px-5 max-md:mt-10 max-md:ml-1.5 hover:text-neutral-700 hover:bg-neutral-50 transition-all duration-300 ease-in-out">
          Book Appointment
        </Button>
        </div>
  )
}

export default Direct