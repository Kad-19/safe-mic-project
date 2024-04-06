import React, { useState } from 'react';

// UserProfile component for handling profile picture and other user info
const UserProfile = () => {
  const [profilePicture, setProfilePicture] = useState(null);

  // Function to handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center">
      {/* Circular avatar */}
      <div className="h-32 w-32 my-8 rounded-full overflow-hidden border-2 border-gray-300">
        {profilePicture ? (
          <img src={profilePicture} alt="Profile Picture" className="h-full w-full object-cover" />
        ) : (
          <div className="h-full w-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Input for file selection */}
      <div className="ml-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          id="profilePictureInput"
        />
        <label htmlFor="profilePictureInput" className="cursor-pointer bg-purple-500 text-white px-4 py-2 rounded-md">
          Choose Image
        </label>
      </div>
    </div>
  );
}

// CounseInfo component
const CounseInfo = () => {
  return (
    <div className="m-24">
      {/* UserProfile component */}
      <UserProfile />

      {/* Other content */}
      <div className="flex flex-col items-center ">
        <button type="submit" className="w-64 rounded-full bg-white text-black hover:bg-gray-300 py-2 transition-colors duration-200 border border-slate-600 mb-4">Schedule an Appointment</button>
        <button type="submit" className="w-64 rounded-full bg-white text-black hover:bg-gray-300 py-2 transition-colors duration-200 border border-slate-600 mb-12">Chat</button>
      </div>

      <p> Name</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, earum provident nesciunt labore repellat odio reprehenderit temporibus quo corporis saepe ullam, facere dolorem officiis, aspernatur vel ut distinctio inventore maxime.</p>
    </div>
  );
}




export default CounseInfo