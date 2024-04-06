import { Collapsible,
    CollapsibleTrigger,
    CollapsibleContent} from "@/components/ui/collapsible"; 
import { Button } from "@/components/ui/button";
import up from './ChevronUp.svg'
import down from './ChevronDown.svg'
import { Card,CardContent,CardTitle } from "@/components/ui/card";
import { useState } from "react";
function ComplaintBlock({title,content}){
    const [open,SetOpen]=useState(false)
    return <div>
        <Collapsible
        open={open}
        onOpenChange={SetOpen}
        >
        <CollapsibleTrigger>
            <div className="border-solid border-black 
            border-2 px-4 py-1 mx-4 my-2 
            rounded-2xl w-64 flex justify-between
            hover:scale-x-105
            ">
                <p className="">
                    My complaint 
                </p> 
                <img className=" " src={open?up:down} alt="" />
            </div>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
        <Card className="w-64 mx-4">
            <CardTitle className="m-2">
                {title}
            </CardTitle>
            <CardContent>
                {content}
            </CardContent>
        </Card>
        </CollapsibleContent>
        </Collapsible>
        
    </div>
}export default ComplaintBlock;