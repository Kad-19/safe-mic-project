import React from 'react'
import Direct from "./Component2/Direct";
import Benefit from "./Component2/Benefit";
import Science from "./Component2/Science";
import Chordon from "./Component2/Chordon";
import Header from "./Component2/Header";
import Footer from './Component2/Footer';
import { BrowserRouter as Route } from 'react-router-dom'

function Counseling() {
  return (
    <div className="flex flex-col">
    {/* <div><Header/></div> */}
<div className="flex flex-col items-center px-20 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
  <div><Direct/></div>
  <div><Benefit/></div>
  <div><Science/></div>
 <div><Chordon/></div>
</div>
<div><Footer/></div>
</div>
  )
}

export default Counseling