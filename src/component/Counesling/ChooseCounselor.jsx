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
import API_URL from "@/url";
import { connect } from "react-redux";

const ChooseCounselor = ({user}) => {
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
        `${API_URL}/counselor/counselors/`,
        config
      );
      setCounselers(res.data);
    } catch (err) {}
  };


  const handleClick = (counselor) => {
    const roomName = "c" + counselor.otherId + "s" + user.id;
    console.log(roomName);
    if(typeof roomName === 'string'){
      console.log("string");
    }
    navigate(`/oneToOneChat/${roomName}`);
  }

  return (
    <div className="">
      <h1 className="flex justify-center mt-28 2/w-2/12 p-8 font-semibold">
        Select a Counselor you want to chat with
      </h1>
      <div className="flex justify-center ">
        {counselers.map((counselor, index) => (
          <Card key={index} className="bg-gray-200 flex justify-center items-center flex-col rounded-lg m-5 lg:w-2/12 md:w-1/3 sm:w-1/2 hover:bg-gray-300 cursor-pointer" onClick={() => handleClick(counselor)}>
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

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ChooseCounselor);
