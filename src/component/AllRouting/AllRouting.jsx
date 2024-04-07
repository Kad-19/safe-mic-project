import React from 'react'
import{Routes,Route} from "react-router-dom"
import LoginPage from '../LoginPage/LoginPage'
import Complaint from '../Complaint/Complaint'
import Appointment from '../Appointment/Appointment'
import Reg from '../LoginPage/Reg'
const AllRouting = () => {
  return (
  <Routes>
    <Route path='/'element={<LoginPage/>}/>
    <Route path='/signup'element={<Reg/>}/>
    <Route path='/complaint'element={<Complaint/>}/>
    <Route path='/Appointment' element={<Appointment/>}/>
  </Routes>
  )
}

export default AllRouting