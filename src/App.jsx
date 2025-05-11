
import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './Pages/ScrollToTop'
import Navbar from './Components/Navbar'
import SignUp from './Pages/SignUp/SignUp'
import PrvtComp from './Pages/PrvtComp/PrivateComp'
import Home from './Pages/Home/Home'
import ApplicationForm from './Components/ApplicationForm'
import Profile from './Pages/Profile/Profile'
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard'
import UniversitiesInfo, { UniDetails } from './Pages/UniversitiesInfo/UniversitiesInfo'
import Footer from './Components/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from './Pages/Contact/Contact'
import Overview from './Pages/Overview/Overview'
import Scholarships from './Pages/Scholarships/Scholarships'
import Register from './Pages/Register/Register'
import { Navigate } from 'react-router-dom'
import PrivateComp from './Pages/PrvtComp/PrivateComp'


function App() {
  useEffect(() => {
    AOS.init({
      duration: 900, // Animation duration (in ms)
      once: true, // Ensures animation happens only once
      easing: "ease-in-out", // Easing effect
      offset: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <div className=' bg-custom'>
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Register />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/UniDetails/:id" element={<UniDetails />} /> {/* <-- PUBLIC NOW */}

          {/* Protected routes */}
          <Route element={<PrivateComp />}>
            {/* Public Routes */}
            <Route path="/home/:id" element={<Home />} />
            <Route path="/overview/:id" element={<Overview />} />
            <Route path="/scholarships/:id" element={<Scholarships />} />
            <Route path="/applicationForm/:id" element={<ApplicationForm />} />
            <Route path="/profile/:id" element={<Profile />} />
            <Route path="/contact/:id" element={<Contact />} />

            {/* Admin Routes */}
            <Route path="/adminDashboard/:id" element={<AdminDashboard />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
