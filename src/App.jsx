import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from './Components/Navigate'
import { Home } from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import LandingPage from './Pages/LandingPage/LandingPage'

function App() {


  return (
    <>
      <Navigate/>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/sing-in" element={<Login/>} />
          <Route path="/administradorDashboard" element={<h1>Administrador Dashboard</h1>} />
          <Route path="/video-lecciones" element={<h1>Video Lecciones</h1>} />
      </Routes>
    </>
  )
}

export default App
