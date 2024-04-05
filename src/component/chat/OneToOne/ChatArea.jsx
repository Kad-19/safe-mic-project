import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Message from '../MessageBlock/Message'
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import { Input } from "@/components/ui/input"

  

export default function ChatArea() {
  const conversation = [
    "Hi there!",
    "Hey, how's it going?",
    "Not too bad, thanks for asking. What about you?",
    "I'm doing pretty well. Just got back from a jog.",
    "That sounds nice. I need to get back into exercising.",
    "Yeah, it's tough to stay motivated sometimes.",
    "Definitely. Maybe we can go for a run together sometime?",
    "That would be great! Let's plan for it next weekend.",
    "Sounds like a plan. Looking forward to it!",
    "Me too. Have a good day!",
    "You too!"
  ];

  let toggle=true;
  return (
    <Card className="m-auto mt-12  bg-gray-100 sm:w-1/2 lg:w-3/6 md:w-6/12 ">

  <CardHeader className="bg-blue-100 flex justify-center items-center" >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
  </CardHeader>

  <CardContent className="overflow-auto h-96 grid grid-cols-1">
{
  conversation.map((str)=>{
  toggle=toggle?false:true;
  return <div>
            <Message sender={toggle} text={str}/>
        </div>
  })
}
  </CardContent>
  <CardFooter className="p-4">
  <Input   placeholder="enter your message..." />
  </CardFooter>
</Card>
  )
}
