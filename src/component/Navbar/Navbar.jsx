import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-6 bg-gray-50">
      <div>
        <div>Mic</div>
      </div>
      <div className="flex justify-between gap-6">
        <button className="font-semibold">Counseling</button>
        <button className="font-semibold">Chat</button>
        <button className="font-semibold">Complaint</button>
        <button className="rounded-3xl bg-gray-300 px-5 p-2 font-bold">
          Login
        </button>
        <button className="rounded-3xl bg-gray-950 px-5 p-2 text-gray-50 font-bold">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
