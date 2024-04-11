import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ChooseCounselor() {
  return (
    <div className=''>       
         <h1 className='flex justify-center mt-28 2/w-2/12 p-8 font-semibold'>select a Counselor you want to chat with</h1>   
        <div className='flex justify-center '>
        <Card className="bg-gray-200 flex justify-center items-center flex-col rounded-lg m-5 lg:w-2/12 md:w-1/3 sm:w-1/2">
            <CardHeader className="p-6">
              <Avatar>
                 <AvatarImage src="https://github.com/shadcn.png" />
                 <AvatarFallback>CN</AvatarFallback>
               </Avatar>
              
            </CardHeader>
            <CardContent>
            <CardDescription>Name</CardDescription>
            </CardContent>
            <CardFooter className="h-36">
            <p>description </p>
            </CardFooter>
        </Card> 
        <Card className="bg-gray-200 flex justify-center items-center flex-col rounded-lg m-5 lg:w-2/12 md:w-1/3 sm:w-1/2 ">
            <CardHeader className="p-6">
              <Avatar>
                 <AvatarImage src="https://github.com/shadcn.png" />
                 <AvatarFallback>CN</AvatarFallback>
               </Avatar>
              
            </CardHeader>
            <CardContent>
            <CardDescription>Name</CardDescription>
            </CardContent>
            <CardFooter className="h-36">
            <p>description </p>
            </CardFooter>
        </Card> 
        <Card className="bg-gray-200 flex justify-center items-center flex-col rounded-lg m-5 lg:w-2/12 md:w-1/3 sm:w-1/2 ">
            <CardHeader className="p-6">
              <Avatar>
                 <AvatarImage src="https://github.com/shadcn.png" />
                 <AvatarFallback>CN</AvatarFallback>
               </Avatar>
              
            </CardHeader>
            <CardContent>
            <CardDescription>Name</CardDescription>
            </CardContent>
            <CardFooter className="h-36">
            <p>description </p>
            </CardFooter>
        </Card> 
        
    </div>
    </div>
  )
}
