import { usuarios } from "../../usuarios";

const Users = () => {
  return (
    <div className="mt-10 bg-[#0B0F19] p-6 rounded-xl hover:bg-[#1A2238] shadow">

      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold text-white">
          Gestión de Usuarios
        </h2> 
        <span className="text-sm text-cyan-400 cursor-pointer">
          Ver todo
        </span>
      </div>

      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-400 text-sm">
            <th className="py-2">Usuario</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
        </thead>

        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id} className="border-t hover:bg-[#1A2238]">
              <td className="py-2 text-white">{user.nombre}</td>
              <td className="text-gray-300">{user.rol}</td>
              <td
                className={
                  user.estado === "Activo"
                    ? "text-green-400"
                    : "text-gray-500"
                }
              >
                {user.estado}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Users;