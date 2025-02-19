import { useState } from 'react'
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

function App() {
    // const [formData, setFormData] = useState({})
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<PrvtComp />}>

          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<div className='relative top-20 p-10 text-3xl z-10 '>About Page</div>}></Route>
          <Route path='/applicationInfo' element={<ApplicationForm  />}>
          </Route>
          <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>

          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/contact' element={<div className='relative top-20 p-10 text-3xl z-10 '>Contact Page</div>}></Route>
        </Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
      </Routes>
    </>
  )
}

export default App
