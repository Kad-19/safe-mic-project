import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import Selector from "../ThemeSelector/Selector";
import { useContext } from "react";
import { themeContext } from "@/App";
const Navbar = ({ logout, isAuthenticated }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrolledDown, setIsScrolledDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      setIsScrolledDown(scrollTop > lastScrollTop);
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  const guestLinks = () => (
    <Fragment>
      <div className="flex justify-between gap-6 items-center">
        <NavLink to="/" className="font-semibold">
          Home
        </NavLink>
        <Selector/>
        <NavLink to="/counseling" className="font-semibold">
          Counseling
        </NavLink>
        <NavLink to="/complaint" className="font-semibold">
          Complaint
        </NavLink>
        <NavLink
          to="/login"
          className="rounded-3xl bg-gray-300 px-5 p-2 font-bold"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="rounded-3xl bg-gray-950 px-5 p-2 text-gray-50 font-bold"
        >
          Sign up
        </NavLink>
      </div>
    </Fragment>
  );
  const authLinks = () => (
    <Fragment>
      <div className="flex justify-between gap-6 items-center h-[5vh]">
        <NavLink to="/" className="font-semibold">
          Home
        </NavLink>
        <Selector/>
        <NavLink to="/counseling" className="font-semibold">
          Counseling
        </NavLink>
        <NavLink to="/oneToOneChat" className="font-semibold">
          Chat
        </NavLink>
        <NavLink to="/complaint" className="font-semibold">
          Complaint
        </NavLink>
        <NavLink
          to="/account"
          className="font-semibold"
        >
          My Account
        </NavLink>
      </div>
    </Fragment>
  );
  return (
    <div className={`z-50 flex justify-between px-6 py-4 bg-gray-50 fixed w-full ${isScrolledDown ? '-translate-y-full' : 'translate-y-0'}`}>
      <div>
        <div>Mic</div>
      </div>
      {isAuthenticated? authLinks() : guestLinks()}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
