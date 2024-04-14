import { Button } from '@/components/ui/button'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect,useState } from 'react'
import { Link } from 'react-scroll'
import { all } from 'axios'
function Direct() {
  return (
    <div className="mt-16 mx-8">
      <span id='section1' className='flex flex-col h-[60vh]  items-center'>
          <motion.div className="self-stretch text-8xl font-bold max-md:mr-1.5 max-md:max-w-full max-md:text-4xl"
          initial={{
            y:100,
            opacity:0.3
          }}
          animate={{
            y:0,
            opacity:1
          }}
          transition={{
            duration:0.7,
            ease:'easeInOut'
          }}
          >
          Get Online Counseling Service
        </motion.div>
        <Button className="self-start my-12 rounded-3xl p-6 text-lg font-semibold">
        <NavLink to="/chooseCounselor">
          Chat with a counselor
        </NavLink>
        </Button>
      </span>
        <div className="self-stretch text-2xl font-bold max-md:mt-40 max-md:mr-1.5 max-md:max-w-full">
          What is Online Counseling?
        </div>
        <div id='section3' className="text-lg max-md:mt-10 max-md:max-w-full">
              Online counseling, also known as e-counseling, 
              cyber-counseling, or teletherapy, 
              refers to the provision of professional counseling services 
              via the internet. It involves therapists or counselors 
              delivering mental health support and guidance to clients remotely, 
              typically through video calls, phone calls, messaging, or email.
        </div>
        
        <Button className="self-start my-8 p-6 rounded-3xl ">
          Book Appointment
        </Button>
      </div>
  )
}

export default Direct