import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import Complaint from "../Complaint/Complaint";
import Reg from "../LoginPage/Reg";
import GroupChat from "../chat/Group/GroupChat";
import Home from "../LoginPage/Home";
import ResetPassword from "../LoginPage/ResetPassword";
import ResetPasswordConfirm from "../LoginPage/ResetPasswordConfirm";
import Activate from "../LoginPage/Activate";
const AllRouting = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Reg />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/groupChat" element={<GroupChat />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route
        path="/password/reset/confirm/:uid/:token"
        element={<ResetPasswordConfirm />}
      />
      <Route path="/activate/:uid/:token" element={<Activate />} />
    </Routes>
  );
};

export default AllRouting;
