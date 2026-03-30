import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from './Components/Navigate'
import VistaPrincipal from './Pages/VistaPrincipal/VistaPrincipal'
import { Home } from './Pages/Home/Home'
import Login from './Pages/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigate/>
      <Routes>
          <Route path="/" element={<VistaPrincipal/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/sing-in" element={<Login/>} />
          <Route path="/administradorDashboard" element={<h1>Administrador Dashboard</h1>} />

      </Routes>
    </>
  )
}

export default App
