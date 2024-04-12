import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthCounselor = () => {
  const [errorStatus, setErrorStatus] = useState(0);
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  const [formData, setFormData] = useState({
    bio: "",
    languages: "",
    specialities: "",
  });

  const { bio, languages, specialities } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    submitProfile();
  };

  const submitProfile = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ bio, languages, specialities});

    try {
      const res = await axios.post(
        `http://localhost:8000/counselor/counselor-profile/`,
        body,
        config
      );
      console.log(res);
    } catch (err) {
      console.log(err);
      setErrorStatus(err.response.status);
    }
  };

  useEffect(() => {
    getProfile();
    // getVerifiedCounselors();
  }, []);

  if(verified){
    navigate("/")
  }

  const getProfile = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `http://localhost:8000/counselor/counselor-profile/`,
        config
      );
      console.log(res);
      setVerified(res.data.verified)
    } catch (err) {
      console.log(err);
      setErrorStatus(err.response.status);
    }
  };
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
      console.log("Counselors");
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-10">
      <div>
        {errorStatus == 500 ? (
          <form onSubmit={(e) => onSubmit(e)}>
            <label>Bio</label>
            <input onChange={(e) => onChange(e)} value={bio} name="bio"></input>
            <label>Languages</label>
            <input onChange={(e) => onChange(e)} value={languages} name="languages"></input>
            <label>Specialities</label>
            <input onChange={(e) => onChange(e)} value={specialities} name="specialities"></input>
            <label>Years of experience</label>
            <input></input>
            <button type="submit">Submit</button>
          </form>
        ) : (
          verified? "Verified": <div> Your Account is not verified by the Admin yet.</div>
        )}
      </div>
    </div>
  );
};

export default AuthCounselor;
