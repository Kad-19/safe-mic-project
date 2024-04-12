import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Aptime() {
    const [weeklyProgram, setWeeklyProgram] = useState([]);

    useEffect(() => {
      // Fetch data from the database
      axios.get('')
        .then(response => {
          setWeeklyProgram(response.data);
        })
        .catch(error => {
          console.error('Error fetching weekly program:', error);
        });
    }, []);
  
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Weekly Program</h1>
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Day</th>
              <th className="px-4 py-2">Time</th>
            </tr>
          </thead>
          <tbody>
            {weeklyProgram.map(({ day, time, program }) => (
              <tr key={`${day}-${time}`}>
                <td className="border px-4 py-2">{day}</td>
                <td className="border px-4 py-2">{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Aptime