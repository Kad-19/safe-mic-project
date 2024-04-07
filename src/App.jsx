import React from "react";
import Navbar from "./component/Navbar/Navbar";
import AllRouting from "./component/AllRouting/AllRouting";
import ComplaintBlock from "./component/Complaint/Collapsible/ComplaintBlock";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter } from "react-router-dom";
import Auth from "./component/LoginPage/Auth";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="">
          <Auth/>
          <Navbar />
          <AllRouting />
        </div>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
