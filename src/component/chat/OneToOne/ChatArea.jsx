import React, { useEffect, useState } from 'react'
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
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [chatSocket, setChatSocket] = useState(null);
  const [roomMessages, setRoomMessages] = useState({});
  let namey = Math.floor(Math.random() * 1000);

  useEffect(() => {
    enterRoom("a");
  }, [])

  const updateRoomMessages = (key, value) => {
    setRoomMessages((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  function enterRoom(room) {
    setRoom(room);
    if (roomMessages[room]) {
      setMessages(roomMessages[room]);
    }
    else{
      setMessages([]);
    }
    connectToWebSocket(room);
  }
  function connectToWebSocket(room) {
    if (chatSocket) {
      chatSocket.close();
    }
    setChatSocket(new WebSocket("ws://localhost:8000/ws/chat/" + room + "/"));
  }
  useEffect(() => {
    if (!chatSocket) {
      return;
    }
    chatSocket.onopen = function (e) {
      console.log("The connection was setup successfully !");
    };
    chatSocket.onclose = function (e) {
      console.log("Something unexpected happened !");
    };
    chatSocket.onerror = function (error) {
      console.error("WebSocket Error:", error);
    };
    chatSocket.onmessage = function (e) {
      const data = JSON.parse(e.data);

      let messageText = data.username + " : " + data.message;
      console.log(data);
      setMessages((prevMessages) => [...prevMessages, messageText]);
      setMessageInput("");
    };
    console.log(chatSocket);
  }, [chatSocket]);

  useEffect(() => {
    updateRoomMessages(room, messages);
  }, [messages]);
  console.log(roomMessages);

  function sendMessage(e) {
    e.preventDefault();
    chatSocket.send(JSON.stringify({ message: messageInput, username: namey }));
  }
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
  messages.map((str)=>{
  toggle=toggle?false:true;
  return <div>
            <Message sender={toggle} text={str}/>
        </div>
  })
}
  </CardContent>
  <CardFooter className="p-4">
  <form onSubmit={sendMessage} className="w-[100%]">
          <Input placeholder="enter your message..." onChange={(e) => setMessageInput(e.target.value)}
          value={messageInput} className='w-[100%]'/>
        </form>
  </CardFooter>
</Card>
  )
}
