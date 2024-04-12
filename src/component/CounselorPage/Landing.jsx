import * as React from "react";

function Landing() {
  return (
    <div className="flex flex-col pr-1.5 bg-white">
            <div className="flex flex-col items-start mt-56 ml-32 max-w-full font-semibold w-[600px] max-md:mt-10">
        <div className="self-stretch text-5xl font-bold bg-clip-text max-md:max-w-full max-md:text-4xl">
          Welcome Back
        </div>
        <div className="mt-64 ml-2.5 text-4xl text-black max-md:mt-10">
          Today’s appointments
        </div>
        <div className="flex flex-col mt-16 ml-2.5 max-w-full text-xs leading-4 text-black bg-white rounded border border-solid border-zinc-400 w-[496px] max-md:mt-10">
          <div className="flex gap-0 font-semibold whitespace-nowrap bg-white bg-opacity-0 max-md:flex-wrap">
            <div className="flex-1 justify-center px-3 py-2.5 border-t border-l border-solid bg-black bg-opacity-10 border-zinc-400">
              Time
            </div>
            <div className="flex-1 justify-center px-3 py-2.5 border-t border-l border-solid bg-black bg-opacity-10 border-zinc-400">
              Appointments
            </div>
          </div>
          <div className="flex gap-0 bg-white bg-opacity-0 max-md:flex-wrap">
            <div className="flex-1 justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              2:30 : 3:30
            </div>
            <div className="flex-1 justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              Kalkidan Amare
            </div>
          </div>
          <div className="flex gap-0 bg-white bg-opacity-0 max-md:flex-wrap">
            <div className="flex-1 justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              5:30 : 6:30
            </div>
            <div className="flex-1 justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              Somebody else
            </div>
          </div>
          <div className="flex gap-0 bg-white bg-opacity-0 max-md:flex-wrap">
            <div className="flex-1 justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              8:00 : 9:00
            </div>
            <div className="flex-1 justify-center px-3 py-2.5 border-t border-l border-solid bg-white bg-opacity-0 border-zinc-400">
              Somebody else
            </div>
          </div>
        </div>
        <div className="justify-center px-7 py-5 mt-14 ml-16 text-2xl bg-zinc-300 rounded-[40px] text-neutral-700 max-md:px-5 max-md:mt-10 max-md:ml-2.5">
          All appointments
        </div>
        <div className="mt-40 ml-2.5 text-3xl font-medium leading-10 text-black max-md:mt-10">
          Who have messaged you
        </div>
        <div className="flex gap-5 mt-14 ml-2.5 text-2xl max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="grow justify-center px-8 py-6 text-white bg-neutral-600 rounded-[40px] w-fit max-md:px-5">
            Go to Discussion
          </div>
          <div className="grow justify-center px-8 py-6 bg-zinc-300 rounded-[40px] text-neutral-700 w-fit max-md:pl-5">
            Chat with a student
          </div>
        </div>
      </div>
      <div className="justify-center items-center px-16 pt-28 pb-28 mt-36 text-xl font-light text-center text-black whitespace-nowrap bg-zinc-300 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        Footer
      </div>
    </div>
  );
}


export default Landing