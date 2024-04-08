import React from 'react'
// import logo from '../assets/Images/logo.png'
function Ready() {
  return (
    <div>
        <div className="self-stretch px-px mt-56 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
          <div className="flex z-10 flex-col self-stretch px-12 pt-11 pb-16 my-auto w-full text-xl font-light text-black rounded-none bg-neutral-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-2xl font-semibold text-center max-md:max-w-full">
              Are you struggling? We can help
            </div>
            <div className="mt-9 text-neutral-700 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet urna sit amet massa efficitur pellentesque nec id nisl.
              Duis blandit vel ligula eu consectetur. Proin quis velit
              convallis, rutrum justo aliquet, condimentum tellus. Duis varius
              magna sed rutrum elementum. Nullam facilisis justo eget leo
              porttitor, quis lacinia urna mollis. Maecenas aliquam molestie
              ligula a sollicitudin. Nulla ornare nunc eu ipsum maximus, sit
              amet euismod erat bibendum. Etiam nec sagittis metus. Nunc
              fringilla nisl elit, ut interdum ante fringilla et.
            </div>
            <div className="justify-center self-start px-5 py-5 mt-11 ml-3 bg-white border border-solid border-neutral-700 rounded-[31px] max-md:px-5 max-md:mt-10 max-md:ml-2.5">
              Find out more about us
            </div>
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