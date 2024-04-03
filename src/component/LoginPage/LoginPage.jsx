import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginPage = () => {
  return (
    <div className="flex justify-center it p-[150px]">
      <div className="flex bg-slate-300 border-slate-500 rounded pt-10 pl-10 pr-40 pb-40 shadow-lg backdrop-blur-sm bg-opacity-50 text-sm/[40px] ">
        <form action="">
          <h1 className="text-2xl pb-10 ">Your Account</h1>
          <div className="relative my-5 flex space-x-4 ">
            <lable htmlFor="">Email</lable>
            <input
              type="email"
              className="block w-72 py-2.5 px-0 text-sm border-gray-300 appearance-none dark:focus:border-blue-50"
              placeholder="email"
              required
            />
          </div>
          <div className="relative my-7 flex space-x-4">
            <lable htmlFor=""> Password</lable>
            <input
              type="password"
              className="block w-72 py-2.5 px-0 text-sm border-gray-300 appearance-none dark:focus:border-blue-50"
              placeholder="password"
              required
            />
          </div>
          <div className="flex space-x-14">
            <button type="submit">Login</button>
            <div className="forget-pass">
              <a href="#">Forget Password?</a>
            </div>
          </div>
          <div className="register">
            <p>
              {" "}
              New to Safe Mic? <a href="#">Create Account</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
