import React from 'react'
import { motion } from 'framer-motion'
function Hero() {
  return (
    <div className='my-12'>
    <p className="mt-32 text-3xl font-medium text-center  max-md:mt-10">
      Welcome to safe mic we are <br />
      here for you
    </p>
    <motion.div className="justify-center bg-primary px-14 py-5 mt-11 text-2xl font-bold text-center text-secondary whitespace-nowrap rounded-[44px] max-md:px-5 max-md:mt-10"
    initial={{
      x:-100,
      opacity:0.4
    }}
    animate={{
      x:0,
      opacity:1
    }}
    transition={{
      duration:0.6
    }}
    >
      Welcome
    </motion.div>
    </div>
  )
}

export default Hero