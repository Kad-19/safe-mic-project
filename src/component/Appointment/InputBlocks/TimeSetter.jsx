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
import { useState } from "react";

function TimeSetter(){
    function TimeSlots(startingTime,sessionDuration){
        this.startingTime=startingTime;
        this.sessionDuration=sessionDuration;
    }
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
                "w-36  justify-start text-left font-normal rounded-lg"
            )}
        >
            {btnText}
        </Button>
    </DropdownMenuTrigger>

    <DropdownMenuContent>
        <DropdownMenuLabel >
            Available slots
        </DropdownMenuLabel>
            <DropdownMenuGroup>{
                
stime.map(obj=>{
    let appointment=obj.hour+':00 - '+ obj.hour+':'+obj.minute
    return  <DropdownMenuItem key={obj.hour} 
    className={cn('px-6 mb-2 flex justify-center rounded-md hover:cursor-pointer border hover:dark:bg-zinc-900 hover:dark:border-white hover:scale-105')}
    onClick={()=>setbtnText(obj.hour+':00 - '+ obj.hour+':'+obj.minute)}>
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