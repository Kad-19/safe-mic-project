import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import axios from "axios";

const Reg = ({ signup, isAuthenticated }) => {
  const [action, SetAction] = useState("sign up");
  const navigate = useNavigate();
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "default",
    email: "",
    password: "",
    re_password: "",
  });

  const { name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      signup(name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    navigate("/");
  }
  if (accountCreated) {
    navigate("/login");
  }

  return (
    <div className="flex justify-center items-center rounded md p8 m-20">
      <div className="flex bg-slate-300 border-slate-500 rounded pt-10 pl-10 pr-40 pb-32 shadow-lg    backdrop-blur-sm bg-opacity-50 text-sm/[40px] ">
        <form onSubmit={(e) => onSubmit(e)}>
          <h1 className="text-[32px] pb-10 ">Your Account</h1>
          <div className="relative my-10 flex space-x-8 text-[18px]">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    "
              placeholder="email"
              required
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <MdOutlineMail className="absolute top-4 right-4" />
          </div>
          <div className="relative my-7 flex space-x-2 text-[18px]">
            <label htmlFor=""> Password</label>
            <input
              type="password"
              className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              placeholder="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
            <RiLockPasswordLine className="absolute top-4 right-4" />
          </div>

          <div className="relative my-7 flex space-x-2 text-[18px] ">
            <label htmlFor="" className="w-60">
              Confirm Password
            </label>
            <input
              type="password"
              className=" mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
              placeholder="password"
              name="re_password"
              value={re_password}
              onChange={(e) => onChange(e)}
              required
            />
            <RiLockPasswordLine className="absolute top-4 right-4" />
          </div>

          <div className="flex space-x-10 space-y-8 text-[18px] ">
            <button
              type="submit"
              className="w-32 mb-8  mt-6 rounded-full bg-purple-600 text-white hover:bg-purple-800 py-2 transition-colors duration-200"
            >
              Sign Up
            </button>

            <div className="self-auto w-60 text-blue-500 cursor-pointer">
              <NavLink to='/reset-password'> Forgot Password? </NavLink>
            </div>
          </div>
          <div className="register text-[18px]">
            <p>
              {" "}
              Already have Account?{" "}
              <NavLink to='/login' className="text-blue-500 cursor-pointer">Login</NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Reg);
