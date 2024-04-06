import React from "react";
import Navbar from "./component/Navbar/Navbar";
import AllRouting from "./component/AllRouting/AllRouting";
import ComplaintBlock from "./component/Complaint/Collapsible/ComplaintBlock";
const App = () => {
  return (
  <div className=""> 
    <Navbar/>
    <AllRouting/>
  </div>
  )
}
export default App;