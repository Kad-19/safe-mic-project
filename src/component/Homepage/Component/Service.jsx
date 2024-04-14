import React from 'react'
import Circles from '@/component/Complaint/Circular units/Circles'
function Service() {
  const complaint='Effortlessly lodge your grievances online,With our user-friendly complaint filing web form design.'
  const  appointment='Book your path to clarity and peace of mind, With our counselor appointment scheduler, solutions you\'ll find.'
  const chat='Engage in insightful conversations anytime, anywhere, Whether with AI or counselor, support is always there.'
  return <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {/* <div className='aspect-square w-8 bg-foreground'>

    </div>
    <div className='aspect-square w-8 bg-secondary'>

    </div>
    <div className='aspect-square w-8 bg-primary-foreground'>

    </div>
    <div className='aspect-square w-8 bg-secondary-foreground'>

    </div>
    <div className='aspect-square w-8 bg-muted-foreground'>

    </div>
    <div className='aspect-square w-8 bg-accent-foreground'>

    </div> */}
  <Circles title={'Filing a Complaint'} detail={complaint}/>
  <Circles title={'Schedule your appointment'} detail={appointment}/>
  <span className='md:hidden lg:flex'><Circles title={'Chat'} detail={chat}/>
    </span>
  </div>
}

export default Service