import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

export default function ChatArea() {
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [chatSocket, setChatSocket] = useState(null);
  const [roomMessages, setRoomMessages] = useState({});
  let namey = Math.floor(Math.random() * 1000);

  useEffect(() => {
    enterRoom("discussion");
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
    } else {
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
  return (
    <Card className="m-auto mt-12   bg-gray-100 sm:w-1/2 lg:w-1/2 md:w-1/2 ">
      <CardHeader className="bg-blue-100 flex justify-center items-center p-3">
        <h1>Discussion</h1>
      </CardHeader>
      <CardContent className="overflow-auto h-96">
        <div className="bg-blue-600 p-3 rounded-lg mt-3 mr-auto w-3/4">
          <h1>person 1</h1>
        </div>
        <div className="bg-slate-400 p-3 rounded-lg mt-3 w-3/4 ml-auto ">
          <h1>person 2</h1>
        </div>
        {messages.map((mes, index) => (
          <div>
            <div key={index} className="bg-blue-600 p-3 rounded-lg mt-3 mr-auto w-3/4 text-slate-200">{mes}</div>
            <br />
          </div>
        ))}
      </CardContent>
      <CardFooter className="p-4">
        <form onSubmit={sendMessage} className="w-[100%]">
          <Input placeholder="enter your message..." onChange={(e) => setMessageInput(e.target.value)}
          value={messageInput} className='w-[100%]'/>
        </form>
      </CardFooter>
    </Card>
  );
}
