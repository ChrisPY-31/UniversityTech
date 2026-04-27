
const Statistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

      <div className="bg-[#0B0F19] p-6 rounded-xl border hover:bg-[#1A2238] border-gray-600 shadow">
        <p className="text-gray-400 text-sm">Usuarios activos</p>
        <h2 className="text-2xl font-bold text-white">1.2k</h2>
        <span className="text-green-400 text-sm">+12% este mes</span>
      </div>

      <div className="bg-[#0B0F19] p-6 rounded-xl border hover:bg-[#1A2238] border-gray-600 shadow">
        <p className="text-gray-400 text-sm">Cursos activos</p>
        <h2 className="text-2xl font-bold text-white">12</h2>
        <span className="text-cyan-400 text-sm">+3 nuevos</span>
      </div>

      <div className="bg-[#0B0F19] p-6 rounded-xl border hover:bg-[#1A2238] border-gray-600 shadow">
        <p className="text-gray-400 text-sm">Nuevos registros</p>
        <h2 className="text-2xl font-bold text-white">320</h2>
        <span className="text-green-400 text-sm">+5% este mes</span>
      </div>

    </div>
  );
};

export default Statistics;