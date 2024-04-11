import React from 'react'

function Service() {
  return (
    <div>
        <div className="self-stretch mt-44 w-full border border-solid bg-neutral-700 border-neutral-700 min-h-[1px] max-md:mt-10 max-md:max-w-full" />
    <div className="mt-36 text-4xl font-medium text-center text-black max-md:mt-10">
      Our services
    </div>
    <div className="px-5 mt-16 w-full max-w-[1076px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
          <div className="shrink-0 mx-auto rounded-full aspect-square bg-zinc-300 h-[300px] w-[300px] max-md:mt-5" />
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="shrink-0 mx-auto rounded-full aspect-square bg-zinc-300 h-[300px] w-[300px] max-md:mt-5" />
        </div>
        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="shrink-0 mx-auto rounded-full aspect-square bg-zinc-300 h-[300px] w-[300px] max-md:mt-5" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Service