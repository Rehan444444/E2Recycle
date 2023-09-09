import React from 'react'
import Navbar from './Component/Navbar'
import Signup from './Component/Signup'
import { BrowserRouter,Routes,Route } from "react-router-dom";





function App() {
  return (
    <BrowserRouter basename="/app">
    <Routes>
    <Route path="/" element={<Navbar />}/>
    <Route path="/signin" element={<Signup />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
