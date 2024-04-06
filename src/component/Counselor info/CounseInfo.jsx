import React from 'react'


const CounseInfo = () => {
  return (
        <div className="m-8 ">
        <div className="flex flex- items-center">
        <div className="flex justify-center items-center h-64 w-64 bg-gray-300 rounded-full mb-6"></div>
        
          <div className="flex flex-col items-center"> <button type="submit" className="w-64 rounded-full bg-white text-black hover:bg-gray-300 py-2 transition-colors duration-200 border border-slate-600 mb-4">Schedule an Appointment</button>
          <button type="submit" className="w-64 rounded-full bg-white text-black hover:bg-gray-300 py-2 transition-colors duration-200 border border-slate-600">Chat</button> 
          
        </div>
        
        </div>
        
        <p> Name</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, earum provident nesciunt labore repellat odio reprehenderit temporibus quo corporis saepe ullam, facere dolorem officiis, aspernatur vel ut distinctio inventore maxime.</p>
    
    </div>
  )
}

export default CounseInfo