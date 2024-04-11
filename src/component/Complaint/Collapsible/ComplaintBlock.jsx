import { Collapsible,
    CollapsibleTrigger,
    CollapsibleContent} from "@/components/ui/collapsible"; 
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import up from './ChevronUp.svg'
import down from './ChevronDown.svg'
import { Card,CardContent,CardTitle } from "@/components/ui/card";
import { useState } from "react";
function ComplaintBlock({title,content}){
    const [open,SetOpen]=useState(false)
    return <Collapsible
        open={open}
        onOpenChange={SetOpen}
        className={cn("w-10/12 md:w-6/12")}
        >
        <CollapsibleTrigger
        className={cn("w-full")}
        >
            <div className="border-solid border-black 
            border-2 px-4 py-1 mx-4 my-2 
            rounded-2xl flex justify-between
            hover:scale-x-105
            ">
                <p className="">
                    My complaint 
                </p> 
                <img className=" " src={open?up:down} alt="" />
            </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent className={cn("w-full")}>
        <Card className=" mx-4">
            <CardTitle className="m-2 text-lg">
                {title}
            </CardTitle>
            <CardContent>
                {content}
            </CardContent>
        </Card>
        </CollapsibleContent>
        </Collapsible>
}export default ComplaintBlock;