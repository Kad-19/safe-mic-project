import React, { useState, useEffect } from "react";
import axios from "axios";
function Tablecon() {
    const [appos, setAppo] = useState([]);

    useEffect(() => {
        axios
            .get("")
            .then((response) => setAppo(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div className="container mx-auto mt-4">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Time</th>
                        <th className="px-4 py-2">Appointement</th>
                    </tr>
                </thead>
                <tbody>
                    {appos.map((appo) => (
                        <tr key={appo.id}>
                            <td className="border px-4 py-2">{appo.time}</td>
                            <td className="border px-4 py-2">{appo.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default Tablecon