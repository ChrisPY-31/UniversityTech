import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from './Components/Navigate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigate/>
      <Routes>
          <Route path="/" element={<p>Vista principal</p>} />
          <Route path="/Home" element={<p>Vista Cursos</p> } />
          <Route path="/sing-in" element={<p>Contact</p>} />
      </Routes>
    </>
  )
}

export default App
