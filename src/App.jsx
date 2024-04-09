import React from "react";
import Navbar from "./component/Navbar/Navbar";
import AllRouting from "./component/AllRouting/AllRouting";
import ComplaintBlock from "./component/Complaint/Collapsible/ComplaintBlock";
import { Provider } from "react-redux";
import { Button } from "./components/ui/button";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Auth from "./component/LoginPage/Auth";
import { useState, useEffect } from "react";
const App = () => {
  const [theme,setTheme]=useState('light')
  useEffect(()=>{
    const root = window.document.documentElement
    root.classList.remove(theme=="dark"?"light":"dark")
    root.classList.add(theme)
  },[theme])

  const changeTheme=()=>{
    theme=='light'?setTheme('dark'):setTheme('light')
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="">
          <Auth/>
          <Navbar />
          <div>
            <Button onClick={changeTheme}>
                Change theme
            </Button>
          </div>
          <AllRouting />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
