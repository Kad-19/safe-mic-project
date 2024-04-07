import React, { useState } from 'react';

const ComplaintForm = () => {
  const [selection, setSelection] = useState('both'); // Default selection is 'both'

  const handleRadioChange = (event) => {
    setSelection(event.target.value);
  };

  return (
    <div className="flex justify-center items-center rounded md p-8 m-20">
      <div className="flex bg-slate-100 border-slate-500 rounded pt-10 pl-10 pr-40 pb-12 shadow-lg backdrop-blur-sm bg-opacity-50 text-sm/[40px] ">
        <form action="">
          <h1 className="text-[32px] pt-24 pb-20 text-center">Complaint Filling Form</h1>
          <p className="text-[18px] mb-4">What is Your Complaint on?</p>
          <div className="flex text-[18px]">
            <div className="mr-4">
              <input
                type="radio"
                id="person"
                name="selection"
                value="person"
                checked={selection === 'person'}
                onChange={handleRadioChange}
              />
              <label htmlFor="person"> Person</label>
            </div>
            <div className="mr-4">
              <input
                type="radio"
                id="service"
                name="selection"
                value="service"
                checked={selection === 'service'}
                onChange={handleRadioChange}
              />
              <label htmlFor="service"> Service</label>
            </div>
            <div>
              <input
                type="radio"
                id="both"
                name="selection"
                value="both"
                checked={selection === 'both'}
                onChange={handleRadioChange}
              />
              <label htmlFor="both"> Both</label>
            </div>
          </div>
          <div className="flex my-8">
            <div className="relative mr-6 my-10 flex space-x-4 text-[18px]">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                required
              />
            </div>

            <div className="relative my-10 flex space-x-4 text-[18px]">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                id="id"
                className="mt-1 block w-64 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                required
              />
            </div>
          </div>

          <div className="relative mt-20 mb-8 space-x-4 text-[18px]">
            <label htmlFor="complaint">Complaint</label>
            <textarea
              id="complaint"
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none "
              required
              rows="12"
              cols="20"
            />
          </div>

          <div className="flex flex-row-reverse space-x-10 space-y-8 text-[18px]">
            <button
              type="submit"
              className="w-32 mb-8 mt-6 rounded-full bg-purple-600 text-white hover:bg-purple-800 py-2 transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ComplaintForm;
