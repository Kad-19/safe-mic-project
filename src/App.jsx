import React from "react";
import LoginPage from "./component/LoginPage/LoginPage"
import Reg from "./component/LoginPage/Reg";
import Navbar from "./component/Navbar/Navbar";
import Complaint from './component/Complaint/Complaint'
import AllRouting from "./component/AllRouting/AllRouting";
import CounseInfo from "./component/Counselor info/CounseInfo";
const App = () => {
  return (
  <div> 
    <Navbar/>
    <AllRouting/>
    <CounseInfo/>
  </div>
  

  )
}
export default App;