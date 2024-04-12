import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

export default function ChooseCounselor() {
  const navigate = useNavigate();
  const [counselers, setCounselers] = useState([]);
  useEffect(() => {
    getVerifiedCounselors();
  }, []);

  const getVerifiedCounselors = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `http://localhost:8000/counselor/counselors/`,
        config
      );
      const data = 
      console.log("Counselors");
      setCounselers(res.data);
    } catch (err) {}
  };

  console.log(counselers);

  const handleClick = (counselor) => {
    navigate(`/oneToOneChat/${counselor}`);
  }

  return (
    <div className="">
      <h1 className="flex justify-center mt-28 2/w-2/12 p-8 font-semibold">
        select a Counselor you want to chat with
      </h1>
      <div className="flex justify-center ">
        {counselers.map((counselor) => (
          <Card className="bg-gray-200 flex justify-center items-center flex-col rounded-lg m-5 lg:w-2/12 md:w-1/3 sm:w-1/2 hover:bg-gray-300 cursor-pointer" onClick={(counselor) => handleClick(counselor)}>
            <CardHeader className="p-6">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <CardDescription>{counselor.username}</CardDescription>
            </CardContent>
            <CardFooter className="h-36">
              <p>{counselor.bio}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
