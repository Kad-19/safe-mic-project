import React, { useEffect, useRef, useState } from "react";
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
import { connect } from 'react-redux';


const ChatArea = ({user}) => {
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [chatSocket, setChatSocket] = useState(null);
  const [resData, setResData] = useState(null);
  const [rend, setRend] = useState(0);
  const [prevOffset, setprevOffset] = useState(0);
  let namey = Math.floor(Math.random() * 1000);

  const scrollableRef = useRef(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [messages]);
  
  useEffect(() => {
    enterRoom("discussion");
    fetchMessages();
  }, []);
  
  useEffect(() => {
    console.log(resData);
    if (resData && rend%2 == 0) {
      resData.results.map((data) => {
        const messageText = data.user + " : " + data.message;
        setMessages((prevMessages) => [...prevMessages, messageText]);
      });
    }
    setRend(prev => prev + 1);
  }, [resData]);

  const fetchMessages = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/messages/discussion/?limit=1&offset=1");
    const data = await res.json();
    let offset = data.count - 10;
    const response = await fetch(
      `http://127.0.0.1:8000/api/messages/discussion/?limit=10&offset=${offset}`
    );
    const responseData = await response.json();
    setResData(responseData);
    setprevOffset(offset - 10);
  };

  const fetchPrevMessages = async () => {
    let offset = prevOffset;
    if(offset < 0){
      offset = 0;
    }
  }

  useEffect(() => {
  if(scrollableRef.current){
    console.log(scrollableRef.current.scrollTop);
  }}, []);


  function enterRoom(room) {
    setRoom(room);
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
  }, [chatSocket]);


  function sendMessage(e) {
    e.preventDefault();
    chatSocket.send(JSON.stringify({ message: messageInput, username: namey }));
  }
  return (
    <Card className="m-auto mt-12   bg-gray-100 sm:w-1/2 lg:w-1/2 md:w-1/2 ">
      <CardHeader className="bg-blue-100 flex justify-center items-center p-3">
        <h1>Discussion</h1>
      </CardHeader>
      <CardContent className="overflow-auto h-96" ref={scrollableRef}>
        <div className="bg-blue-600 p-3 rounded-lg mt-3 mr-auto w-3/4">
          <h1>person 1</h1>
        </div>
        <div className="bg-slate-400 p-3 rounded-lg mt-3 w-3/4 ml-auto ">
          <h1>person 2</h1>
        </div>
        {messages.map((mes, index) => (
          <div>
            <div
              key={index}
              className="bg-blue-600 p-3 rounded-lg mt-3 mr-auto w-3/4 text-slate-200"
            >
              {mes}
            </div>
            <br />
          </div>
        ))}
      </CardContent>
      <CardFooter className="p-4">
        <form onSubmit={sendMessage} className="w-[100%]">
          <Input
            placeholder="enter your message..."
            onChange={(e) => setMessageInput(e.target.value)}
            value={messageInput}
            className="w-[100%]"
          />
        </form>
      </CardFooter>
    </Card>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user
});


export default connect(mapStateToProps) (ChatArea);
