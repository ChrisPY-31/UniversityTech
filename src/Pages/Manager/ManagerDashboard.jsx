import Statistics from "../../Components/Manager/Statistics";
import Users from "../../Components/Manager/Users";
import { courses } from "../../datos";

const ManagerDashboard = () => {
  return (
    <div className="min-h-screen bg-[#060B16] px-6 py-6">

      <div className="mb-2">
        <h1 className="text-2xl font-bold text-white">Panel de Administración</h1>
        <p className="text-gray-400 text-sm mt-1">
          Bienvenido de nuevo. Aquí tienes el resumen de la plataforma.
        </p>
      </div>

      {/* Estadísticas */}
      <Statistics />

      {/* Cursos */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Cursos de la Plataforma</h2>
          <span className="text-sm text-cyan-400 cursor-pointer">Ver todos</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`bg-gradient-to-br ${course.color} p-5 rounded-xl`}
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-3xl">{course.emoji}</span>
                <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full">
                  {course.badge}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg">{course.name}</h3>
              <p className="text-white/70 text-sm mt-1 line-clamp-2">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    
     {/* tabla de usuario */}
      <Users showPagination={false}/>

    </div>
  );
};

export default ManagerDashboard;
