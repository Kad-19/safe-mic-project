"use client";
import Datepicker from "./InputBlocks/Datepicker";
import TimeSetter from "./InputBlocks/TimeSetter";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { createContext } from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import API_URL from "@/url";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
export const AppointmentContext = createContext(null);
function Appointment() {
  let dt = new Date();
  const [date, setDate] = useState(dt);
  const [appointment, setAppointment] = useState("");
  const [counselers, setCounselers] = useState([]);
  const [counselorChoice, setCounselorChoice] = useState(null);

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
      const res = await axios.get(`${API_URL}/counselor/counselors/`, config);
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
    const counselor = counselorChoice.id + "";
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
    <div className="h-[100vh] mt-36">
      <div className="flex my-4 justify-center flex-col">
        <div className="">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className={cn('flex gap-3 m-4')}>
                <span>Choose Counselor</span>
              <Input className={cn('w-4/12')} value={counselorChoice?counselorChoice.username:"Choice"}/>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
              {counselers.map((counseler, index) => (
                <DropdownMenuItem key={index} onClick={() => setCounselorChoice(counseler)}>{counseler.username}</DropdownMenuItem>
              ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex">
          <p className="m-4">Set your appointment</p>
          <div className="grid grid-cols-1  gap-12 md:grid-cols-2">
            <AppointmentContext.Provider value={{ dateSetter, hourSetter }}>
              <Datepicker />
              <TimeSetter />
            </AppointmentContext.Provider>
          </div>
        </div>
      </div>
      <div className="">
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
    </div>
  );
}
export default Appointment;
