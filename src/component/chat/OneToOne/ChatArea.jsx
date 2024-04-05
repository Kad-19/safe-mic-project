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
  import { Input } from "@/components/ui/input"

  

export default function ChatArea() {
  return (
    <Card className="m-auto mt-12   bg-gray-100 sm:w-1/2 lg:w-3/6 md:w-1/2 ">
  <CardHeader className="bg-blue-100 flex justify-center items-center" >
  <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

  </CardHeader>
  <CardContent className="overflow-auto h-96">
   <div className='bg-blue-600 p-3 rounded-lg mt-3 mr-auto w-3/4'>
    <h1>person 1</h1>
   </div>
   <div className='bg-slate-400 p-3 rounded-lg mt-3 w-3/4 ml-auto '>
    <h1>person 2</h1>
   </div>
   <div className='bg-blue-600 p-3 rounded-lg mt-3 mr-auto w-3/4'>
    <h1>person 1</h1>
   </div>
   <div className='bg-slate-400 p-3 rounded-lg mt-3 w-3/4 ml-auto '>
    <h1>person 2</h1>
   </div>
   <div className='bg-blue-600 p-3 rounded-lg mt-3 mr-auto w-3/4'>
    <h1>person 1</h1>
   </div>
   <div className='bg-slate-400 p-3 rounded-lg mt-3 w-3/4 ml-auto '>
    <h1>person 2</h1>
   </div>
   <div className='bg-blue-600 p-3 rounded-lg mt-3 mr-auto w-3/4'>
    <h1>person 1</h1>
   </div>
   <div className='bg-slate-400 p-3 rounded-lg mt-3 w-3/4 ml-auto '>
    <h1>person 2</h1>
   </div>
  </CardContent>
  <CardFooter className="p-4">
  <Input   placeholder="enter your message..." />
  </CardFooter>
</Card>
  )
}
