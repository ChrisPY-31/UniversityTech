import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./Pages/Login/Login";
import LandingPage from "./Pages/LandingPage/LandingPage";
import PrivateLayout from "./Pages/PrivateLayout/PrivateLayout";
import InstructorDashboard from "./Pages/Instructor/InstructorDashboard";
import Notification from "./Pages/Notification/Notification";
import Courses from "./components/Courses";
import NewCourse from "./Pages/NewCourse/NewCourse";
import AboutCourse from "./Pages/AboutCourse/AboutCourse";
import ManagerDashboard from "./Pages/Manager/ManagerDashboard";
import ManagerUsersPage from "./Pages/Manager/ManagerUsersPage";
import CourseVideo from "./Pages/CourseVideo/CourseVideo";
import NewLessons from "./Pages/NewLessons/NewLessons";
import ManagerNewAccount from "./Pages/Manager/ManagerNewAccount";
import { useUser } from "./hooks/useUser";

function App() {
  const location = useLocation();
  
  const {isLoggedIn } = useUser();

  return (
    <>
      <Routes>
        {/* <Navigate> */}

        {/*Rutas publicas*/}
        <Route path="/" element={<LandingPage   />  } />
        <Route path="/sign-in" element={<Login />} />

        {/*Rutas privadas*/}
        <Route element={<PrivateLayout />}>
          {/*Rutas privadas publicas*/}
          <Route path="/home" element={ isLoggedIn ? <Courses /> : <Navigate to="/sign-in" /> } />
          <Route path="/video-lecciones" element={ isLoggedIn ? <CourseVideo /> : <Navigate to="/sign-in" /> } />
          <Route path="/notificaciones" element={ isLoggedIn ? <Notification /> : <Navigate to="/sign-in" /> } />
          <Route
            path="/course/descripcion"
            element={ isLoggedIn ? <AboutCourse/> : <Navigate to="/sign-in" /> }
          />

          {/*Rutas privadas Administrador*/}
          <Route path="/newAccounts" element={ isLoggedIn ? <ManagerNewAccount/> : <Navigate to="/sign-in" /> } />
          <Route path="/dashboard" element={ isLoggedIn ? <ManagerDashboard /> : <Navigate to="/sign-in" /> } />
          <Route path="/users" element={ isLoggedIn ? <ManagerUsersPage /> : <Navigate to="/sign-in" /> } />

          {/*Rutas privadas Instuctor*/}
          <Route path="/instructor" element={ isLoggedIn ? <InstructorDashboard /> : <Navigate to="/sign-in" /> } />
          <Route path="/cursos/nuevo-curso" element={ isLoggedIn ? <NewCourse/> : <Navigate to="/sign-in" /> } />
          <Route path="/cursos/curriculum" element={ isLoggedIn ? <NewLessons/> : <Navigate to="/sign-in" /> } />
          {/*Rutas privadas Estudiante*/}
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
