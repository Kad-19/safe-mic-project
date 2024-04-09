import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import Complaint from "../Complaint/Complaint";
import Reg from "../LoginPage/Reg";
import GroupChat from "../chat/Group/GroupChat";
import ResetPassword from "../LoginPage/ResetPassword";
import ResetPasswordConfirm from "../LoginPage/ResetPasswordConfirm";
import Appointment from "../Appointment/Appointment";
import Activate from "../LoginPage/Activate";
import Counseling from "../Counesling/Counseling";
import Homepage from "../Homepage/Homepage";
import MyProfile from "../MyProfile/MyProfile";
const AllRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<Reg />} />
      <Route path="/complaint" element={<Complaint />} />
      <Route path="/counseling" element={<Counseling />} />
      <Route path="/groupChat" element={<GroupChat />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/Appointment" element={<Appointment/>} />
      <Route
        path="/password/reset/confirm/:uid/:token"
        element={<ResetPasswordConfirm />}
      />
      <Route path="/activate/:uid/:token" element={<Activate />} />
      <Route path="/profile" element={<MyProfile/>}/>
    </Routes>
  );
};

export default AllRouting;
