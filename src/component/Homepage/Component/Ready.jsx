import { Button } from '@/components/ui/button'
import React from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import pic from '/Images/pexels-buro-millennial-1438084.jpg'
// import logo from '../assets/pexels-buro-millennial-1438084.jpg'
function Ready() {
  return (
    <div className='grid grid-cols-2 max-md:grid-cols-1
      m-8 max-w-screen-lg max-sm:mx-0 place-items-center py-24'>       
          <img
            alt='a picture'
            src='/Images/pexels-buro-millennial-1438084.jpg'
            loading="lazy"
            className=" rounded-l-[50px] block "
          />
        <Card className={cn('mx-4 my-2 px-8 py-12 font-san shadow-lg border max-sm:mx-0')}>
              <div className='my-4'> <b>About, Mental health</b> </div> 
          <motion.p
          className=' font-sans'
          initial={{
            opacity:0,
            y:100
          }}
          whileInView={
            {
          opacity:1,
          y:0
            }}
          transition={{duration:1,
          delay:0.5}}
          >

            Mental health is a level of psychological well-being or an absence of mental illness. 
            It's the psychological state of someone who is functioning at a satisfactory level of emotional 
            and behavioural adjustment.
            It includes subjective well-being, perceived self-efficacy, 
            autonomy, competence, inter-generational dependence, and
            self-actualization of one's intellectual and emotional potential, among others.
            <br />
          </motion.p
          >
            <Button className="w-fit my-12">
              <a href='https://dreamingechoes.github.io/awesome-mental-health/#/' target='blank'>

                Get Resources
              </a>
            </Button>
            </Card>
      </div>
  )
}

export default Ready