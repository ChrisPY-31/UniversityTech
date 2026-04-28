import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PrivateLayout from "./Pages/PrivateLayout/PrivateLayout";
import { useState } from "react";
import InstructorDashboard from "./Pages/Instructor/InstructorDashboard";
import Notification from "./Pages/Notification/Notification";
import CoursesCard from "./components/Courses/CoursesCard";
import Courses from "./components/Courses";
import Users from "./components/Manager/Users";
import NewCourse from "./Pages/NewCourse/NewCourse";
import AboutCourse from "./Pages/AboutCourse/AboutCourse";
import CurriculumBuilder from "./Pages/CurriculumBuilder/CurriculumBuilder";
function App() {
  const location = useLocation();

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <Routes>
        {/* <Navigate> */}

        {/*Rutas publicas*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<Login />} />

        {/*Rutas privadas*/}
        <Route element={<PrivateLayout isAuth={isAuthenticated} />}>
          {/*Rutas privadas publicas*/}
          <Route path="/home" element={<Courses />} />
          <Route path="/video-lecciones" element={<h1>Video Lecciones</h1>} />
          <Route path="/notificaciones" element={<Notification />} />
          <Route
            path="/course/descripcion"
            element={<AboutCourse/>}
          />

          {/*Rutas privadas Administrador*/}
          <Route path="/dashboard" element={<h1>Dashboard</h1>} />
          <Route path="/users" element={<Users />} />

          {/*Rutas privadas Instuctor*/}
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/cursos/nuevo-curso" element={<NewCourse/>} />
          <Route path="/cursos/curriculum" element={<CurriculumBuilder/>} />
          {/*Rutas privadas Estudiante*/}
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
