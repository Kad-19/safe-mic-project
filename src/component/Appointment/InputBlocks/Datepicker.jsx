import { Popover,
    PopoverContent,
    PopoverTrigger} from "@radix-ui/react-popover";

import { Calendar } from "@/components/ui/calendar";
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { AppointmentContext } from "../Appointment";
function Datepicker(){
    const [date,setDate]=useState(new Date())
    const [dsply, setDsply]= useState("Set the date") 
    const {dateSetter}=useContext(AppointmentContext);
    return <Popover>
        <PopoverTrigger asChild>
            <Button
            variant={"outline"}
            className={cn(
                "w-[280px] justify-start text-left font-normal rounded-lg shadow-md"
            )}
        >{dsply}</Button>
        </PopoverTrigger>
        <PopoverContent>
        <Calendar 
        mode="single"
        selected={date}
        className={cn(' bg-background')}
        onSelect={date=>{
            setDate(date)
            setDsply(date.toLocaleDateString("en-US",
            {year:'numeric',
            month:'short',
            day:'numeric'
        }))
        
        setDate(date)
        dateSetter(date)
        }}
        initialFocus
        />
        </PopoverContent>
    </Popover>
}export default Datepicker;