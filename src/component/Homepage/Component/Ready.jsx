import { Button } from '@/components/ui/button'
import React from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
// import logo from '../assets/Images/logo.png'
function Ready() {
  return (
    <div className='grid grid-cols-2 max-md:grid-cols-1 w-fit
      m-8 max-w-screen-lg max-sm:mx-0'>       
        <Card className="">
          <img
            alt='a picture'
            src='{logo}'
            loading="lazy"
            srcSet="..."
            className=""
          />
        </Card>
        <Card className={cn('mx-4 my-2 px-8 py-12 shadow-lg border max-sm:mx-0')}>
              <b>About, Mental health </b>
            Mental health is a level of psychological well-being or an absence of mental illness. 
            It's the psychological state of someone who is functioning at a satisfactory level of emotional 
            and behavioural adjustment.
            It includes subjective well-being, perceived self-efficacy, 
            autonomy, competence, inter-generational dependence, and
            self-actualization of one's intellectual and emotional potential, among others.
            <br />
            <Button className="w-fit">
              Get Resources
            </Button>
            </Card>
      </div>
  )
}

export default Ready