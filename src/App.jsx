import React from 'react'
import LoginPage from './component/LoginPage'
import Reg from './component/Reg'

const App = () => {
  return (
    <div className="flex justify-center it p-[150px]">

      <LoginPage/>
      <Reg/>
    </div>
    
  )
}

export default App