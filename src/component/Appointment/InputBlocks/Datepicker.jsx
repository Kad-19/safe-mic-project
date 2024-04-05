import { Popover,
    PopoverContent,
    PopoverTrigger} from "@radix-ui/react-popover";

import { Calendar } from "@/components/ui/calendar";
import { useState,useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
function Datepicker(){
    const [date,setDate]=useState(new Date())
    const [dsply, setDsply]= useState("Set the date")    
    return <Popover>
        <PopoverTrigger asChild>
            <Button
            variant={"outline"}
            className={cn(
                "w-[280px] justify-start text-left font-normal rounded-lg"
            )}
        >{dsply}</Button>
        </PopoverTrigger>
        <PopoverContent>
        <Calendar 
        mode="single"
        selected={date}

        onSelect={date=>{
            setDate(date)
            setDsply(date.toLocaleDateString("en-UK",
            {day:'numeric'
            ,month:'long'
            ,year:'numeric'
        }))
        }}
        initialFocus
        />
        </PopoverContent>
    </Popover>
}export default Datepicker;