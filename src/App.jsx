import React from 'react'
import Navbar from './Component/Navbar'
import Login from './Component/Login'
import Signup from './Component/Signup';
import { Routes,Route } from "react-router-dom";





function App() {
  return (
    
    <>
   
    
    <Routes>
    <Route path="/" element={<Navbar />}/>
    <Route  path='/Signup' element={<Signup/>} />
    <Route path='/Login' element={<Login/>} />
    
    </Routes>
   
 
    </>
  )
}

export default App
