import React from 'react'

function Benefit() {
  return (
    <div>
        <div className="self-end mt-60 max-w-full rounded-2xl border border-solid border-neutral-400 w-[940px] max-md:pr-5 max-md:mt-10 max-md:mr-1.5">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="..."
                className="grow w-full aspect-[0.74] max-md:mt-4 max-md:max-w-full"
              />
            </div>
            <div className="flex flex-col py-12 ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col  text-black max-md:mt-10">
                <b>What are the benefits?</b>
                <div className="p-4 max-md:mt-10">
                <p className=' font-light'>Online counseling offers several benefits, including:
                  </p>
<ol type='1' className='list-decimal'>
<li>
<b>Accessibility:
  </b> It enables individuals to access counseling services from anywhere with an internet connection, overcoming geographical barriers.
</li>

<li>
  <b>
    Convenience:
  </b>
  Clients can schedule sessions at times that are convenient for them, eliminating the need for travel and reducing time constraints.
</li>
<li>
  <b>
    Anonymity and Privacy:
  </b>
  Some individuals may feel more comfortable discussing sensitive issues online, as it provides a level of anonymity and privacy that may be lacking in face-to-face counseling.
</li>
<li>
<b>
  Cost-Effectiveness:
</b>
  Online counseling may be more affordable than traditional in-person counseling, as it eliminates travel expenses and may offer lower session fees.
</li>
<li>
  <b>
    Flexibility:
  </b>
  Online counseling platforms often offer a variety of communication options, allowing clients to choose the format that best suits their preferences and needs.
</li>
</ol>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Benefit