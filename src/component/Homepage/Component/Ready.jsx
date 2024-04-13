import { Button } from '@/components/ui/button'
import React from 'react'
// import logo from '../assets/Images/logo.png'
function Ready() {
  return (
    <div>
        <div className="self-stretch px-px mt-56 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch px-12 pt-11 pb-16 my-auto w-full text-xl font-normal text-black rounded-none bg-neutral-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-2xl font-semibold text-center max-md:max-w-full">
              About, Mental health 
            </div>
            <div className="mt-9 text-neutral-700 max-md:max-w-full">
            Mental health is a level of psychological well-being or an absence of mental illness. 
            It's the psychological state of someone who is functioning at a satisfactory level of emotional 
            and behavioural adjustment.
            It includes subjective well-being, perceived self-efficacy, 
            autonomy, competence, inter-generational dependence, and
            self-actualization of one's intellectual and emotional potential, among others.
            </div>
            <Button className="w-fit">
              Get Resources
            </Button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
          <img
            src='{logo}'
            loading="lazy"
            srcSet="..."
            className="grow w-full aspect-[1.19] max-md:max-w-full"
          />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Ready