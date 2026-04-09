const Statics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

      <div className="bg-[#0B0F19] p-6 rounded-xl border hover:bg-[#1A2238] border-gray-600 shadow">
        <p className="text-gray-400 text-sm">Usuarios activos</p>
        <h2 className="text-2xl font-bold text-white">14.2k</h2>
        <span className="text-green-400 text-sm">+12%</span>
      </div>

      <div className="bg-[#0B0F19] p-6 rounded-xl border hover:bg-[#1A2238] border-gray-600 shadow">
        <p className="text-gray-400 text-sm">Ingresos mensuales</p>
        <h2 className="text-2xl font-bold text-white">$84,200</h2>
        <span className="text-green-400 text-sm">+8.4%</span>
      </div>

    </div>
  );
};

export default Statics;