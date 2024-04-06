import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex justify-between p-6 bg-gray-50">
      <div>
        <div>Mic</div>
      </div>
      <div className="flex justify-between gap-6">
        <button className="font-semibold">Counseling</button>
        <button className="font-semibold">Chat</button>
        <NavLink to="/complaint" className="font-semibold">Complaint</NavLink>
        <NavLink to="/"className="rounded-3xl bg-gray-300 px-5 p-2 font-bold">
          Login
        </NavLink>
        <NavLink to="/signup"
        className="rounded-3xl bg-gray-950 px-5 p-2 text-gray-50 font-bold">
          Sign up
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
