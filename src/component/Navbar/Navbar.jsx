import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import Selector from "../ThemeSelector/Selector";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import DrawerComp from "../Customization/DrawerComp";
import { useContext } from "react";
import { themeContext } from "@/App";
const Navbar = ({ logout, isAuthenticated }) => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

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
    <div className="z-0">
    <header className={` flex justify-end bg-background w-full px-8 py-4 fixed top-0 z-10 border-2 ${isScrolledDown ? '-translate-y-full' : 'translate-y-0'} `}>
        <NavLink to="/" className="font-semibold px-4">
          Home
        </NavLink>
        <NavLink to="/counseling" className="font-semibold px-4">
          Counseling
        </NavLink>
        <NavLink to="/complaint" className="font-semibold px-4">
          Complaint
        </NavLink>
        <DrawerComp/>
        <NavLink
          to="/login"
          className="rounded-3xl border-2 px-5 p-2 font-bold"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
        >
        <Button className={cn('rounded-3xl')}>
          Sign up
        </Button> 
        </NavLink>
        
      
    </header>
    </div>
  );
  const authLinks = () => (
    <div className="z-0">
    <header className={` flex justify-end bg-background w-full px-8 py-4 fixed top-0 z-10 ${isScrolledDown ? '-translate-y-full' : 'translate-y-0'} `}>
    <NavLink to="/" className="font-semibold px-4">
          Home
        </NavLink>
        <Selector/>
        <NavLink to="/counseling" className="font-semibold px-4">
          Counseling
        </NavLink>
        <NavLink to="/oneToOneChat" className="font-semibold">
          Chat
        </NavLink>
        <NavLink to="/complaint" className="font-semibold px-4">
          Complaint
        </NavLink>
        <NavLink
          to="/account"
          className="font-semibold px-4"
        >
          My Account
        </NavLink>
      
    </header>
    </div>
  );
  
  return (
    // <div className={`flex justify-between p-6 bg-gray-50 fixed w-full`}>
    //   <div>
    //     <div>Mic</div>
    //   </div>
    <>
    {isAuthenticated? authLinks() : guestLinks()}
    <main>
      <Outlet/>
    </main>
    </>
    // </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
