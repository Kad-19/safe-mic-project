import React from 'react'




function Apoo() {
  return (
    <div className="flex flex-col bg-white">
    <div className="flex flex-col items-start pl-12 mt-1.5 w-full max-md:pl-5 max-md:max-w-full">
      <div className="mt-28 ml-20 text-4xl font-semibold text-black max-md:mt-10 max-md:ml-2.5">
        Your appointments
      </div>
      <div className="flex gap-5 mt-24 ml-20 max-w-full font-semibold leading-[130%] w-[378px] max-md:mt-10 max-md:ml-2.5">
        <div className="my-auto text-2xl text-black">Week</div>
        <div className="flex flex-auto gap-4 items-start px-3.5 py-2.5 text-xl rounded-xl bg-stone-50 text-neutral-700">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a82ce2fa242c6ba126a6e2143bb41d25a6960af1c375943506290e3593b2072f?"
            className="shrink-0 w-8 aspect-square"
          />
          <div className="flex-auto self-stretch my-auto">
            Apr 8 -- Apr 12
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/524f14bb63b5f283534201d61cd8b500ec072e19d1ed9237e25f7e8273ba1a57?"
            className="shrink-0 w-8 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center mt-5 ml-16 max-w-full text-xs leading-4 text-black bg-neutral-700 w-[126px] max-md:ml-2.5">
        <div className="flex flex-col bg-white rounded border border-solid border-zinc-400">
          <div className="flex flex-col justify-center font-semibold whitespace-nowrap bg-white bg-opacity-0">
            <div className="justify-center px-3 py-2.5 border-t border-l border-solid bg-black bg-opacity-10 border-zinc-400">
              Time
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white bg-opacity-0">
            <div className="justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              2:30 : 3:30
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white bg-opacity-0">
            <div className="justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              3:30 : 4:30
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white bg-opacity-0">
            <div className="justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              4:30 : 5:30
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white bg-opacity-0">
            <div className="justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              5:30 : 6:30
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white bg-opacity-0">
            <div className="justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              8:00 : 9:00
            </div>
          </div>
          <div className="flex flex-col justify-center bg-white bg-opacity-0">
            <div className="justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              9:00 : 10:00
            </div>
          </div>
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