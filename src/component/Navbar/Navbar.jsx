import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';
const Navbar = ({logout, isAuthenticated}) => {
  return (
    <div className="flex justify-between p-6 bg-gray-50">
      <div>
        <div>Mic</div>
      </div>
      <div className="flex justify-between gap-6 items-center">
        <NavLink to='/' className="font-semibold">Counseling</NavLink>
        <NavLink to='/groupChat' className="font-semibold">Chat</NavLink>
        <NavLink to="/complaint" className="font-semibold">Complaint</NavLink>
        <NavLink to="/login"className="rounded-3xl bg-gray-300 px-5 p-2 font-bold">
          Login
        </NavLink>
        <NavLink to="/signup" className="rounded-3xl bg-gray-950 px-5 p-2 text-gray-50 font-bold">
          Sign up
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {logout})(Navbar);
