import React, { useEffect, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const LoginPage = ({login, isAuthenticated, error}) => {
  const navigate = useNavigate();
  const [is_student, setIs_student] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const {notVerified} =  useParams();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
  };

  useEffect(() => {
    if (isAuthenticated) {
      if(is_student){
        navigate("/");
      }
      else{
        navigate("/authCounselor");
      }
    }
  });

  const toggle = () => {
    if(is_student){
      setIs_student(false);
    }
    else{
      setIs_student(true);
    }
  }

  return (
    <div className="flex justify-center items-center rounded md my-2 w-full flex-col">
      {notVerified? <div className="w-full p-4 bg-purple-300 text-blue-950">An Activation link has been sent to your email, Please activate your account by clicking the link inorder to be able to login.</div>:""}
      <div className="flex bg-slate-300 border-slate-500 rounded-lg pt-20 pl-5 pr-5 pb-32 shadow-lg bg-opacity-50 text-sm/[40px] xl:w-[40%] xl:min-w-[600px] w-[100%] sm:w-[80%] my-12">
        <form onSubmit={(e) => onSubmit(e)} className="mx-auto sm:w-[60%] w-[80%]">
          <h1 className="text-[32px] pb-10 text-center">Your Account</h1>
          <div onClick={toggle}>Sign In as : {is_student? "Student": "Counselor"}</div>
          <div className="relative mt-10 flex text-[18px] flex-wrap flex-col">
            <label htmlFor="" className="w-[110px] font-medium">Email</label>
            <input
              type="email"
              className="mt-1 block w-full  xl:w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      "
              placeholder="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
            <MdOutlineMail className="absolute top-4 right-4" />
          </div>
          <div className="relative my-7 flex flex-wrap text-[18px] flex-col">
            <label htmlFor="" className="w-[110px] font-medium"> Password</label>
            <input
              type="password"
              className=" mt-1 block xl:w-[100%] w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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

          <div className="flex gap-4 text-[18px] align-middle py-3 flex-col">
            <div className=" italic text-red-500 text-lg ">
              {error? error.detail: ""}
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-purple-600 text-white hover:bg-purple-800 py-1 transition-colors duration-200 font-medium"
            >
              Login
            </button>

            <div className="w-full text-blue-500 text-right mr-4 font-medium">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div className="text-lg py-8 font-medium">
            <p>
              {" "}
              New to Safe Mic?{" "}
              <NavLink to='/signup' className="text-blue-500 sm:mx-3">
                Create Account
              </NavLink>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

export default connect(mapStateToProps, {login}) (LoginPage);