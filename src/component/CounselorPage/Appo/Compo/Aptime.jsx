import React, { useEffect, useState } from "react";
import axios from "axios";

function Aptime() {
  const [originalAppos, setOriginalAppos] = useState([]);
  const [appos, setAppos] = useState([]);
  const [convertingIso, setConvertingIso] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [startOfWeek, setStartOfWeek] = useState(null);
  const [endOfWeek, setEndOfWeek] = useState(null);
  const [counselorId, setCounselorId] = useState("");

  useEffect(() => {
    getAppointment();
    getProfile();
  }, []);

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
      setCounselorId(res.data.id);
    } catch (err) {
      console.log(err);
    }
  };

    const [tableData, setTableData] = useState([
      ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      [3, '', '', '', '', ''],
      [4, '', '', '', '', ''],
      [5, '', '', '', '', ''],
      [8, '', '', '', '', ''],
      [9, '', '', '', '', '']
    ]);
  
    useEffect(() => {

      const updatedTableData = [
        ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      [3, '', '', '', '', ''],
      [4, '', '', '', '', ''],
      [5, '', '', '', '', ''],
      [8, '', '', '', '', ''],
      [9, '', '', '', '', '']
      ];
  
      // Populate the table array based on the appointments data
      appointments.forEach(appointment => {
        const date = new Date(appointment.appointment_datetime);
        const weekday = date.getDay(); // Subtract 1 to convert Sunday (0) to Friday (4)
        const hour = date.getHours();
  
        if (hour === 3 || hour === 4 || hour === 5 || hour === 8 || hour === 9) {
          const rowIndex = [3, 4, 5, 8, 9].indexOf(hour) + 1; // Get the index of the hour in the tableData array
          updatedTableData[rowIndex][weekday] = appointment.user;
        }
      });
  
      // Update the state with the new table data
      setTableData(updatedTableData);
    }, [appointments]);

  const parseISOToDate = (isoString) => {
    return new Date(isoString);
  };

  useEffect(() => {
    const currentDate = new Date(); 
    const startOfWeekDate = new Date(currentDate); 
    startOfWeekDate.setDate(currentDate.getDate() - currentDate.getDay()); 
    startOfWeekDate.setHours(0, 0, 0, 0); 

    const endOfWeekDate = new Date(currentDate); 
    endOfWeekDate.setDate(currentDate.getDate() - currentDate.getDay() + 6); 
    setStartOfWeek(startOfWeekDate);
    setEndOfWeek(endOfWeekDate);
  }, []);

  const goForwardOneWeek = () => {
    const newStartOfWeek = new Date(startOfWeek);
    newStartOfWeek.setDate(startOfWeek.getDate() + 7);
    
    const newEndOfWeek = new Date(endOfWeek);
    newEndOfWeek.setDate(endOfWeek.getDate() + 7);
  
    setStartOfWeek(newStartOfWeek);
    setEndOfWeek(newEndOfWeek);
  };
  
  const goBackwardOneWeek = () => {
    const newStartOfWeek = new Date(startOfWeek);
    newStartOfWeek.setDate(startOfWeek.getDate() - 7);
    
    const newEndOfWeek = new Date(endOfWeek);
    newEndOfWeek.setDate(endOfWeek.getDate() - 7);
  
    setStartOfWeek(newStartOfWeek);
    setEndOfWeek(newEndOfWeek);
  };


  useEffect(() => {
    const convertIsoAndToUserName = async () => {
      if (originalAppos.length !== 0) {
        const updatedAppos = originalAppos
          .map((appo) => ({
            ...appo,
            appointment_datetime: parseISOToDate(appo.appointment_datetime),
          }))
          .filter((appo) => {
            const appointmentDate = new Date(appo.appointment_datetime);
            return appointmentDate >= startOfWeek && appointmentDate <= endOfWeek;
          }).filter((appo) => {
            return appo.counselor == counselorId;
          });
  
        const updatedAppointments = [];
        for (const appo of updatedAppos) {
          const username = await getUsername(appo.user);
          updatedAppointments.push({ ...appo, user: username });
        }
  
        setAppos(updatedAppos);
        setAppointments(updatedAppointments);
      }
    };
  
    convertIsoAndToUserName();
  }, [originalAppos, startOfWeek]);
  
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

  const getAppointment = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `http://localhost:8000/counselor/all-appointments/`,
        config
      );
      console.log(res);
      setOriginalAppos(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(appointments);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Weekly Program</h1>
      <button onClick={() => goBackwardOneWeek()}>prev</button>
      <button onClick={() => goForwardOneWeek()}>Next</button>
      <div>
        
      </div>
      <table className="border">
      <thead>
        <tr>
          {tableData[0].map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.slice(1).map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Aptime;
