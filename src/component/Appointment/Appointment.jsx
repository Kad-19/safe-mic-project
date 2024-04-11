"use client"
import Datepicker from "./InputBlocks/Datepicker"
import TimeSetter from "./InputBlocks/TimeSetter"
import { Button } from "@/components/ui/button";
import { createContext } from "react";
import { useState,
    useEffect} from "react";
import {motion} from "framer-motion"
export const AppointmentContext=createContext(null);
function Appointment(){
    let dt=new Date()
    const [date,setDate]=useState(dt)
    const [appointment,setAppointment]=useState("")
    useEffect(()=>{
        setAppointment(date.toLocaleDateString('en-UK',
        {hour:'2-digit',
        weekday:'long',
        day:'2-digit',
        month:'short',
        year:'numeric'}
    ))
    console.log(date)

    },
    [date])
    const dateSetter=(dae)=>setDate(dae)
    const hourSetter=(hr)=>{
        let date2=new Date(date)
        date2.setHours(hr)
        setDate(date2)
    }
    return<>
    <div className="flex my-4 justify-center">
        
        <p className="mx-4">Set your appointment</p>
        <div className="grid grid-cols-1  gap-12 md:grid-cols-2">
            <AppointmentContext.Provider value={{dateSetter,hourSetter}}>
                <Datepicker/>
                <TimeSetter/>
            </AppointmentContext.Provider>
        </div>
    </div>
    <div className="fixed bottom-1/4">
        Your Appointment: {date!=dt?appointment:""}
        <br />
        <Button onClick={()=>{
            console.log(date.toISOString())
            let a={
                appointment_time:date.toISOString(),
                counselor_id:'2'
            }
            console.log(a)
            console.log(JSON.stringify(a))
        }}>
            Confirm
        </Button>
    </div>
    
    </> 
}export default Appointment;