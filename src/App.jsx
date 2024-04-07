import React from "react";
import Navbar from "./component/Navbar/Navbar";
import AllRouting from "./component/AllRouting/AllRouting";
import ComplaintForm from "./component/FillingForm/ComplaintForm";
import MyProfile from "./component/MyProfile/MyProfile";
const App = () => {
  return (
  <div className=""> 
    <Navbar/>
    <AllRouting/>
    <MyProfile/>
  </div>
  )
}
export default App;