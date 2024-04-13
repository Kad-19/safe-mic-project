"use client";
import Datepicker from "./InputBlocks/Datepicker";
import TimeSetter from "./InputBlocks/TimeSetter";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import API_URL from "@/url";
export const AppointmentContext = createContext(null);
function Appointment() {
  let dt = new Date();
  const [date, setDate] = useState(dt);
  const [appointment, setAppointment] = useState("");
  const [counselers, setCounselers] = useState([]);

  useEffect(() => {
    getVerifiedCounselors();
  }, []);

  const getVerifiedCounselors = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${API_URL}/counselor/counselors/`,
        config
      );
      setCounselers(res.data);
    } catch (err) {}
  };
  console.log(counselers);

  useEffect(() => {
    setAppointment(
      date.toLocaleDateString("en-UK", {
        hour: "2-digit",
        weekday: "long",
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    );
  }, [date]);
  const dateSetter = (dae) => {
    dae.setHours(date.getHours());
    setDate(dae);
  };
  const hourSetter = (hr) => {
    let date2 = new Date(date);
    date2.setHours(hr);
    setDate(date2);
  };

  const sendAppointment = async () => {
    const appointment_datetime = date.toISOString();
    const counselor = "1";
    const bod = JSON.stringify({
      counselor,
      appointment_datetime,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.post(
        `${API_URL}/counselor/appointments/`,
        bod,
        config
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="flex my-4 justify-center h-[100vh]">
        <p className="mx-4">Set your appointment</p>
        <div className="grid grid-cols-1  gap-12 md:grid-cols-2">
          <AppointmentContext.Provider value={{ dateSetter, hourSetter }}>
            <Datepicker />
            <TimeSetter />
          </AppointmentContext.Provider>
        </div>
      </div>
      <div className="fixed bottom-1/4">
        Your Appointment: {date != dt ? appointment : ""}
        <br />
        <Button
          onClick={() => {
            // console.log(date.toISOString());
            // let a = {
            //   appointment_time: date.toISOString(),
            //   counselor_id: "2",
            // };
            // console.log(a);
            // console.log(JSON.stringify(a));
            sendAppointment();
          }}
        >
          Confirm
        </Button>
      </div>
    </>
  );
}
export default Appointment;
