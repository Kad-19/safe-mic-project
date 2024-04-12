import React from 'react'
{/*import Aptime from './Aptime'*/}
function Apoo() {
  return (
    <div className="flex flex-col bg-white">
    <div className="flex flex-col items-start pl-12 mt-1.5 w-full max-md:pl-5 max-md:max-w-full">
      <div className="mt-28 ml-20 text-4xl font-semibold text-black max-md:mt-10 max-md:ml-2.5">
      Your Appointment In This Week
      </div>
      <div className="flex flex-col justify-center mt-5 ml-16 max-w-full text-xs leading-4 text-black bg-neutral-700 w-[126px] max-md:ml-2.5">
        <div className="flex flex-col bg-white rounded border border-solid border-zinc-400">
          This Was the place we import our Table

      </div>
      </div>
    </div>
    <div className="justify-center items-center px-16 pt-28 pb-28 mt-64 w-full text-xl font-light text-center text-black whitespace-nowrap bg-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
      Footer
    </div>
  </div>
  )
}

export default Apoo