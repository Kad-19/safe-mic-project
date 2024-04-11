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
import Selector from "./component/ThemeSelector/Selector";
import { createContext } from "react";
import { FaLess } from "react-icons/fa";

export const themeContext=createContext(null)
const App = () => {
  
  const [theme,setTheme]=useState({
    current:'light',
    previous:null,
    dark:false
  })

  let themes=['light','rose','violate','slate','dark','darkrose','darkviolate','darkslate']

  useEffect(()=>{
    const root = window.document.documentElement
    if(theme.previous!=null)root.classList.remove(theme.previous)
    root.classList.add(theme.current)
  },[theme])

  const changeTheme=(i)=>{
    theme.dark?i=i+4:i
      setTheme({current:themes.at(i),
                previous:theme.current})
    //themeIndex<3?setThemeIndex(++themeIndex):setThemeIndex(themeIndex=0)
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="">
          <Auth/>
          <Navbar />
          <div>
          <themeContext.Provider value={{changeTheme}}>
            <Selector/>
          </themeContext.Provider>

          <Button onClick={()=>{
            let CurrentIndex=themes.indexOf(theme.current);
            if(theme.dark){
              setTheme({
                current:themes.at(CurrentIndex%4),
                previous:themes.at(CurrentIndex),
                dark:false
              })
            }else{
              setTheme({
                current:themes.at(CurrentIndex+4),
                previous:themes.at(CurrentIndex),
                dark:true
              })
            }
            }}>
            theme
          </Button>
          
          </div>
          <AllRouting />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
