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
  const [theme,setTheme]=useState({
    current:'light',
    previous:null
  })
  let themes=['light','dark','violate','darkviolate','rose','darkrose','slate','darkslate']
  let [themeIndex,setThemeIndex]=useState(1)
  useEffect(()=>{
    const root = window.document.documentElement
    if(theme.previous!=null)root.classList.remove(theme.previous)
    root.classList.add(theme.current)
    console.log(theme)
  },[theme])

  const changeTheme=()=>{
    setTheme({current:themes.at(themeIndex),
              previous:theme.current})
    themeIndex<7?setThemeIndex(++themeIndex):setThemeIndex(themeIndex=0)
    
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
