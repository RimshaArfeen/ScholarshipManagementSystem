
import { useState, useEffect } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import PrvtComp from './Pages/PrvtComp/PrivateComp'
import Home from './Pages/Home/Home'
import ApplicationForm from './Components/ApplicationForm'
import Profile from './Pages/Profile/Profile'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import { UniDetails } from './Pages/UniversitiesInfo/UniversitiesInfo'
import Footer from './Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './Pages/Contact/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (in ms)
      once: true, // Ensures animation happens only once
      easing: "ease-in-out", // Easing effect
      offset: 120,
    });
  }, []);

  return (
    <div className=' bg-custom'>
      <Navbar />
      <Routes>
        <Route element={<PrvtComp />}>

          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<div className='relative top-20 p-10 text-3xl z-10 '>About Page</div>}></Route>
          <Route path='/applicationInfo' element={<ApplicationForm />}>
          </Route>
          <Route path='/adminDashboard' element={<AdminDashboard />}></Route>

          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/UniDetails/:id' element={<UniDetails
          />}></Route>

          <Route path='/contact' element={<Contact/>}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
