import React, { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import axios from "axios";

const Reg = ({ signup, isAuthenticated, error }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [accountCreated, setAccountCreated] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [is_student, setIs_student] = useState(true);


  const { name, email, password, re_password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === re_password) {
      if(is_student){
        if(email.endsWith("aastustudent.edu.et")){
          signup(name, email, password, re_password);
        }
        else{
          setErrorMessage("Please use your organization email")
        }
      }
      else{
        signup(name, email, password, re_password);
      }
    }
    else {
      setErrorMessage("Password and Confirm password doesn't match");
    }

  };

  useEffect(() => {
    if (error) {
      setAccountCreated(false);
      if (error == "OK"){
        setAccountCreated(true);
      }
      if (error.hasOwnProperty("email")) {
        setErrorMessage("");
        error.email.map((mes) => {
          setErrorMessage((prevmes) => prevmes + " " + mes);
        });
      } else if (error.hasOwnProperty("password")) {
        setErrorMessage("");
        error.password.map((mes) => {
          setErrorMessage((prevmes) => prevmes + " " + mes);
        });
      }
    }
  }, [error]);
  if (isAuthenticated) {
    navigate("/");
  }
  if (accountCreated) {
    navigate(`/login/notverified`);
  }

  const toggle = () => {
    if (is_student) {
      setIs_student(false);
    } else {
      setIs_student(true);
    }
  };

  return (
    <div className="flex justify-center items-center rounded my-20 w-[100%]">
      <div className="flex bg-slate-300 border-slate-500 rounded-lg pt-20 pl-5 pr-5 pb-32 shadow-lg bg-opacity-50 text-sm/[40px] xl:w-[40%] xl:min-w-[600px] w-[100%] sm:w-[80%]">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="mx-auto sm:w-[60%] w-[80%]"
        >
          <h1 className="text-[32px] pb-10 text-center">Create Account</h1>
          <div className="flex justify-start items-center">
            <span className="text-lg mr-2 font-medium">Sign up as </span>
            <label
              htmlFor="Toggle3"
              className="inline-flex items-center p-1 rounded-md cursor-pointer text-gray-800"
            >
              <input id="Toggle3" type="checkbox" className="hidden peer" />
              <span className="px-4 rounded-l-md bg-violet-400 peer-checked:bg-gray-300" onClick={toggle}>
                Student
              </span>
              <span className="px-4 rounded-r-md bg-gray-300 peer-checked:bg-violet-400" onClick={toggle}>
                Counselor
              </span>
            </label>
          </div>
          <div className="relative mt-10 flex text-[18px] flex-wrap flex-col">
            <label htmlFor="" className="w-[110px] font-medium">
              User Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full xl:w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    "
              placeholder="user name"
              required
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
            <FaRegUser className=" absolute top-4 right-4" />
          </div>
          <div className="relative my-7 flex text-[18px] flex-wrap flex-col">
            <label htmlFor="" className="w-[110px] font-medium">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full xl:w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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
          <div className="relative my-7 flex flex-wrap text-[18px] flex-col">
            <label htmlFor="" className="w-[110px] font-medium">
              {" "}
              Password
            </label>
            <input
              type="password"
              className=" mt-1 block w-full xl:w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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

          <div className="relative my-7 flex flex-wrap text-[18px] flex-col ">
            <label htmlFor="" className="font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              className=" mt-1 block w-full xl:w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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

          <div className="flex gap-4 text-[18px] align-middle py-3 flex-col ">
            <div className="italic text-lg text-red-500">
              {errorMessage}
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 text-white hover:bg-purple-800 py-1 transition-colors duration-200 font-medium"
            >
              Sign Up
            </button>

            <div className="self-auto w-60 text-blue-500 cursor-pointer">
              <NavLink to="/reset-password"> Forgot Password? </NavLink>
            </div>
          </div>
          <div className="text-lg py-8 font-medium">
            <p>
              {" "}
              Already have Account?{" "}
              <NavLink to="/login" className="text-blue-500 cursor-pointer">
                Login
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, { signup })(Reg);
