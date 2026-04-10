import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'  
import { Navigate } from './Components/Navigate'
import { Home } from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import LandingPage from './Pages/LandingPage/LandingPage'
import ManagerDashboard from './Pages/Manager/ManagerDashboard'

function App() {
  const location = useLocation();  

  return (
    <>
      
      {location.pathname !== '/administradorDashboard' && <Navigate />}
      <Routes>
      {/* <Navigate> */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/sing-in" element={<Login/>} />
        <Route path="/administrador" element={<ManagerDashboard/>} />
        <Route path="/video-lecciones" element={<h1>Video Lecciones</h1>} />
      </Routes>
    </>
  ) 
}
  
export default App 