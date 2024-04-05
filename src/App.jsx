import React from "react";
import Navbar from "./component/Navbar/Navbar";
import AllRouting from "./component/AllRouting/AllRouting";
import OneToOneChat from "./component/chat/OneToOne/OneToOneChat";
import GroupChat from "./component/chat/Group/GroupChat";
const App = () => {
  return (
  <div> 
    <Navbar/>
    {/* <AllRouting/> */}
    <OneToOneChat/>
    {/* <GroupChat/> */}
  </div>
  )
}
export default App;