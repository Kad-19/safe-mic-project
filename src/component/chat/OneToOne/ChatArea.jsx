import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Message from "../MessageBlock/Message";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { IoMdSend } from "react-icons/io";
import { Button } from "@/components/ui/button";

const ChatArea = ({ user }) => {
  const [room, setRoom] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [chatSocket, setChatSocket] = useState(null);
  const [roomMessages, setRoomMessages] = useState({});
  const [resData, setResData] = useState(null);
  const [rend, setRend] = useState(0);
  const [limit, setLimit] = useState(100);
  const [rooms, setRooms] = useState([]);
  const [userData, setUserData] = useState(null);
  const [userRooms, setUserRooms] = useState([]);
  const [roomsLoaded, setRoomsLoaded] = useState(false);

  let namey = Math.floor(Math.random() * 1000);

  const scrollableRef = useRef(null);

  useEffect(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    enterRoom("discussion");
    fetchRooms();
  }, []);

  useEffect(() => {
    if (user) {
      fetchMessages(room);
      fetchUserData();
    }
  }, [user, room]);

  useEffect(() => {
    if (userData) {
      if(roomsLoaded){
        return;
      }
      rooms.forEach(async(rum) => {
        const { counselorId, studentId } = extractIds(rum.name);
        if (userData.is_student) {
          if (studentId == user.id) {
            const username = await getUsername(counselorId);
          const newroom = { username: username, room: rum };
          setUserRooms((userRoom) => [...userRoom, newroom]);
          }
        } else {
          if (counselorId == user.id) {
            const username = await getUsername(studentId);
            const newroom = { username: username, room: rum };
            setUserRooms((userRoom) => [...userRoom, newroom]);
          }
        }
      });
      setRoomsLoaded(true);
    }
  }, [userData, rooms]);

  const getUsername = async (id) => {
    try {
      const username = await fetchUserName(id);
      return username;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  const fetchUserName = async (id) => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };

      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/all/users/${id}`,
          config
        );
        return res.data.name;
      } catch (err) {
        console.log(err);
        throw err;
      }
    } else {
      console.log("invalid token");
    }
  };

  function extractIds(inputString) {
    const counselorRegex = /c(\d+)/;
    const studentRegex = /s(\d+)/;

    const counselorMatch = inputString.match(counselorRegex);
    const studentMatch = inputString.match(studentRegex);

    const counselorId = counselorMatch ? counselorMatch[1] : null;
    const studentId = studentMatch ? studentMatch[1] : null;

    return { counselorId, studentId };
  }

  const fetchMessages = async (room) => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };

      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/ws/api/messages/${room}/?limit=1&offset=0`,
          config
        );
        const data = res.data;
        let offset = data.count - limit;
        try {
          const response = await axios.get(
            `http://127.0.0.1:8000/ws/api/messages/${room}/?limit=${data.count}&offset=0`,
            config
          );
          const responseData = response.data;
          setResData(responseData);
        } catch (err) {
          console.log(err);
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("invalid token");
    }
  };

  const fetchRooms = async () => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };

      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/ws/api/rooms/`,
          config
        );
        console.log(res);
        setRooms(res.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("invalid token");
    }
  };

  const fetchUserData = async () => {
    if (localStorage.getItem("access")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("access")}`,
          Accept: "application/json",
        },
      };

      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/all/users/${user.id}`,
          config
        );
        console.log(res);
        setUserData(res.data);
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("invalid token");
    }
  };

  useEffect(() => {
    if (resData) {
      setMessages([]);
      setMessages((prevMessages) => {
        const newMessages = resData.results.map((data) => {
          return { message: data.message, username: data.user };
        });
        return [...newMessages, ...prevMessages];
      });
    }
    setRend((prev) => prev + 1);
  }, [resData]);

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

      setMessages((prevMessages) => [...prevMessages, data]);
      setMessageInput("");
    };
  }, [chatSocket]);

  function sendMessage(e) {
    e.preventDefault();
    chatSocket.send(
      JSON.stringify({ message: messageInput, username: user.name })
    );
  }

  console.log(userRooms);

  return (
    <div className="flex">
      <div className="grow flex flex-col">
        <Button
          className="rounded-none py-7"
          onClick={() => enterRoom("discussion")}
        >
          Discusstion
        </Button>
        {userRooms.length !=0? userRooms.map((rums) => (
          <Button onClick={() => enterRoom(rums.room.name)} className="rounded-none py-7 border border-blue-500">{rums.username}</Button>
        )): ""}
      </div>
      <Card className="ml-auto mt-0 bg-gray-100 sm:w-3/4 h-9/10">
        <CardHeader className="bg-blue-100 flex justify-center items-center p-3">
          Chat
        </CardHeader>
        <CardContent className="overflow-auto h-[73vh]" ref={scrollableRef}>
          {messages.map((mes, index) => (
            <div key={index}>
              {mes.username != user.name ? (
                <div className="relative bg-slate-600 p-1 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl mt-3 mr-auto w-3/4 ">
                  <div className="absolute w-0 h-0 border-t-[20px] border-t-transparent border-r-[20px] border-slate-600 border-b-[0px] border-b-transparent transform bottom-0 -left-2"></div>
                  <p className="px-3 text-blue-500 font-medium">
                    {mes.username}
                  </p>
                  <p className="text-slate-200 p-1 px-3 text-lg">
                    {mes.message}
                  </p>
                </div>
              ) : (
                <div className="relative bg-slate-400 p-1 mt-3 w-3/4 ml-auto rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl">
                  <div className="absolute w-0 h-0 border-t-[20px] border-t-transparent border-l-[20px] border-slate-400 border-b-[0px] border-b-transparent transform bottom-0 -right-2"></div>
                  <p className="text-slate-200 p-1 px-3 text-lg">
                    {mes.message}
                  </p>
                </div>
              )}
              <br />
            </div>
          ))}
        </CardContent>
        <CardFooter className="p-4">
          <form onSubmit={sendMessage} className="w-[100%] flex gap-3">
            <Input
              placeholder="enter your message..."
              onChange={(e) => setMessageInput(e.target.value)}
              value={messageInput}
              className="w-[100%]"
            />
            <button
              type="submit"
              className="flex align-middle items-center w-8"
            >
              <IoMdSend className="w-6 h-6" />
            </button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ChatArea);
