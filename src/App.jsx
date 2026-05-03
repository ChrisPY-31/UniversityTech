import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login/Login";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PrivateLayout from "./Pages/PrivateLayout/PrivateLayout";
import { useState } from "react";
import InstructorDashboard from "./Pages/Instructor/InstructorDashboard";
import Notification from "./Pages/Notification/Notification";
import Courses from "./components/Courses";
import NewCourse from "./Pages/NewCourse/NewCourse";
import AboutCourse from "./Pages/AboutCourse/AboutCourse";
import ManagerDashboard from "./Pages/Manager/ManagerDashboard";
import ManagerUsersPage from "./Pages/Manager/ManagerUsersPage";
import CourseVideo from "./Pages/CourseVideo/CourseVideo";
import NewLessons from "./Pages/NewLessons/NewLessons";

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
          <Route path="/video-lecciones" element={<CourseVideo />} /> 
          <Route path="/notificaciones" element={<Notification />} />
          <Route
            path="/course/descripcion"
            element={<AboutCourse/>}
          />

          {/*Rutas privadas Administrador*/}
          <Route path="/newAccounts" element={<h1>Crear Cuentas</h1>} />
          <Route path="/dashboard" element={<ManagerDashboard />} />
          <Route path="/users" element={<ManagerUsersPage />} />

          {/*Rutas privadas Instuctor*/}
          <Route path="/instructor" element={<InstructorDashboard />} />
          <Route path="/cursos/nuevo-curso" element={<NewCourse/>} />
          <Route path="/cursos/curriculum" element={<NewLessons/>} />
          {/*Rutas privadas Estudiante*/}
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
