import { Button } from '@/components/ui/button'
import React from 'react'

function Direct() {
  return (
    <div className="flex flex-col bg-background items-center px-20 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="self-stretch text-8xl font-bold bg-clip-text max-md:mr-1.5 max-md:max-w-full max-md:text-4xl">
          Get Online Counseling Service
        </div>
        <Button className="justify-center self-start px-8 py-6 mt-16 ml-7 text-2xl font-medium border-solid rounded-[36px] max-md:px-5 max-md:mt-10 max-md:ml-2.5 transition-all duration-300 ease-in-out">
          Chat with a counselor
        </Button>
        <div className="self-stretch mt-72 text-2xl font-bold max-md:mt-40 max-md:mr-1.5 max-md:max-w-full">
          What is Online Counseling?
        </div>
        <div className="text-lg max-md:mt-10 max-md:max-w-full">
              Online counseling, also known as e-counseling, 
              cyber-counseling, or teletherapy, 
              refers to the provision of professional counseling services 
              via the internet. It involves therapists or counselors 
              delivering mental health support and guidance to clients remotely, 
              typically through video calls, phone calls, messaging, or email.
        </div>
        
        <Button className="justify-center self-start px-8 py-6 mt-14 text-lg font-medium border border-neutral-700 border-solid bg-neutral-700 rounded-[36px] text-stone-50 max-md:px-5 max-md:mt-10 max-md:ml-1.5 hover:text-neutral-700 hover:bg-neutral-50 transition-all duration-300 ease-in-out">
          Book Appointment
        </Button>
        </div>
  )
}

export default Direct