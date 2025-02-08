import { useState } from 'react'
import './App.css'
import {Route,Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
function App() {

  return (
    <>
    <Navbar/>
   <Routes>
    <Route
    path='/' element= {<div>Home PAge</div>}></Route>
    <Route path='/login' element= {<Login/>}></Route>
    <Route path='/signUp' element= {<SignUp/>}></Route>
    
   </Routes> 
    </>
  )
}

export default App
