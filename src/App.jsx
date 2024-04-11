import React from "react";
import Navbar from "./component/Navbar/Navbar";
import AllRouting from "./component/AllRouting/AllRouting";
import ComplaintForm from "./component/FillingForm/ComplaintForm";
import MyProfile from "./component/MyProfile/MyProfile";
import CounselorProfile from "./component/Counselor info/CounselorProfile";
const App = () => {
  return (
  <div className=""> 
    <Navbar/>
    <AllRouting/>
    <CounselorProfile/>
  </div>
  )
}
export default App;