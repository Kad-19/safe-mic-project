import React from "react";
import Approach from "./Component/Approach";
import GetCons from "./Component/GetCons";
import Guied from "./Component/Guied";
import Hero from "./Component/Hero";
import Ready from "./Component/Ready";
import Service from "./Component/Service";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { BrowserRouter as Route } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex flex-col">
      <div>{/* <Header /> */}</div>
      <div className="flex flex-col items-center px-20 mt-36 w-[80%] mx-auto max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div>
          <Hero />
        </div>
        <div>
          <Guied />
        </div>
        <div>
          <Approach />
        </div>
        <div className="flex flex-col items-center ">
          <Service />
        </div>
        <div>
          <Ready />
        </div>
        <div>
          <GetCons />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
