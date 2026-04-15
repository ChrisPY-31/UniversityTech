import './App.css'
import {Route, Routes, useLocation } from 'react-router-dom'  
import { Home } from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import LandingPage from './Pages/LandingPage/LandingPage'
import PrivateLayout from './Pages/PrivateLayout/PrivateLayout'
import { useState } from 'react'
import Courses from './components/Manager/Courses'

function App() {
  const location = useLocation();  

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  return (
    <>
      
      <Routes>
      {/* <Navigate> */}

        {/*Rutas publicas*/}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/sign-in" element={<Login/>} />

        {/*Rutas privadas*/}
        <Route element={<PrivateLayout isAuth={isAuthenticated} />}>
          <Route path="/home" element={<Courses/>} />
          <Route path="/video-lecciones" element={<h1>Video Lecciones</h1>} />
        </Route>
        
      </Routes>
    </>
  ) 
}
  
export default App 