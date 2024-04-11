import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { reset_password } from "../../actions/auth";
import { Button } from "@/components/ui/button";

const ResetPassword = ({ reset_password }) => {
  const navigate = useNavigate();
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password(email);
    setRequestSent(true);
  };

  if (requestSent) {
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center rounded md my-20 w-full">
      <div className="flex bg-slate-300 border-slate-500 rounded-lg pt-20 pl-5 pr-5 pb-32 shadow-lg bg-opacity-50 text-sm/[40px] xl:w-[40%] xl:min-w-[600px] w-[100%] sm:w-[80%]">
        <form
          onSubmit={(e) => onSubmit(e)}
          className="mx-auto sm:w-[60%] w-[80%]"
        >
          <h1 className="text-[32px] pb-10 text-center">
            Request Password Reset
          </h1>
          <div className="relative mt-10 flex text-[18px] flex-wrap flex-col">
            <label htmlFor="" className="w-[110px] font-medium">
              Email
            </label>
            <input
              className="mt-1 block w-full  xl:w-[100%] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              "
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="flex gap-4 text-[18px] align-middle py-3 flex-col">
          <Button className="w-full rounded-lg bg-purple-600 text-white hover:bg-purple-800 py-1 transition-colors duration-200 font-medium" type="submit">
            Reset Password
          </Button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
