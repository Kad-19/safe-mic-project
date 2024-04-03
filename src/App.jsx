import React from "react";
import LoginPage from "./component/LoginPage/LoginPage"
import Reg from "./component/LoginPage/Reg";
import Navbar from "./component/Navbar/Navbar";
import Complaint from './component/Complaint/Complaint'
const App = () => {
  return (
  <div> 
    <div className="flex justify-center items-center rounded md p8 m-20"><LoginPage/>
    <Reg/></div>
    
   
  </div>
  

  )
}
export default App;