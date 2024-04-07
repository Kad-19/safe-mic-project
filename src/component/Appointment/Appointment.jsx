import Datepicker from "./InputBlocks/Datepicker"
import TimeSetter from "./InputBlocks/TimeSetter"
import { createContext } from "react";
import { useState,
    useEffect} from "react";
import {motion} from "framer-motion"
export const AppointmentContext=createContext(null);
function Appointment(){
    const [date,setDate]=useState(null)
    const [appointmentTime,setAppointmentTime]=useState(null)
    const dateSetter=(dae)=>setDate(dae)
    const tSetter=(t)=>setAppointmentTime(t)

    return<>
    <div className="flex my-4">
        
        <p className="mx-4">Set your appointment</p>
        <span className=" ">
            <AppointmentContext.Provider value={{dateSetter,tSetter}}>
                <Datepicker/>
                <TimeSetter/>
            </AppointmentContext.Provider>
        </span>
    </div>
        <div className="mx-4 absolute bottom-1/2 ">
{date&&appointmentTime!=null?date.toLocaleDateString("en-UK",{day:'numeric',month:'long',year:'numeric'}):""} {date&&appointmentTime!=null?"at "+String(appointmentTime.hour)+":00":"" +""}
        </div>
        
    
    </> 
}export default Appointment;