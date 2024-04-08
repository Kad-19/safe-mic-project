import { 
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger, 
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuGroup,
    DropdownMenuSeparator} from "@radix-ui/react-dropdown-menu"
import { Button, } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useContext } from "react";
import { AppointmentContext } from "../Appointment";
function TimeSetter(){
const {tSetter}=useContext(AppointmentContext)
const [stime,setStime]=useState([
    {
        hour:8,
        minute:45
    },
    {
        hour:9,
        minute:45
    },
    {
        hour:10,
        minute:45
    },
    {
        hour:11,
        minute:45
    }
])
const [btnText,setbtnText]=useState('Set Time')
return <span className="mx-8">
    <DropdownMenu className='bg-zinc-500'>
    <DropdownMenuTrigger asChild>
    <Button
            variant={"outline"}
            className={cn(
                "w-40  justify-start text-left font-normal rounded-lg shadow-md"
            )}
        >
            {btnText}
        </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent  className={cn("bg-transparent rounded-lg px-4 pt-4 shadow-sm")}>
        {/* <DropdownMenuLabel >
            Available slots
        </DropdownMenuLabel> */}
            <DropdownMenuGroup>{
                
stime.map(obj=>{
    let appointment=obj.hour+':00 - '+ obj.hour+':'+obj.minute
    return  <DropdownMenuItem key={obj.hour} 
    className={cn('px-4 py-2 mb-2 flex justify-center bg-gray-100 rounded-md hover:cursor-pointer hover:dark:bg-zinc-900 hover:dark:border-white hover:scale-105')}
    onClick={()=>{
        setbtnText(obj.hour+':00 - '+ obj.hour+':'+obj.minute)
        tSetter(obj)
        console.log(new Date())
        }}>
                {appointment}
            </DropdownMenuItem>
})
}
            </DropdownMenuGroup>

    </DropdownMenuContent>
    <DropdownMenuSeparator/>
</DropdownMenu>
</span> 

}export default TimeSetter;