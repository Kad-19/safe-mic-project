import React from "react";
import LoginPage from "./component/LoginPage/LoginPage";
import Navbar from "./component/Navbar/Navbar";
import Complaint from './component/Complaint/Complaint'
import { Button } from "./components/ui/button";
import { Calendar } from "./components/ui/calendar";
import { cn } from "./lib/utils";
const App = () => {
  return (<div>
      <Complaint/>
      <div className="flex justify-center">
        <Calendar className={cn('')}/>
      </div>

  </div>

  )
}
export default App;