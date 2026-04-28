import { usuarios } from "../../usuarios";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";

const Users = ({showPagination = true }) => {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const totalPages = Math.ceil(usuarios.length / perPage);

  const data = usuarios.slice(
    (page - 1) * perPage,
    page * perPage
  );

  return (
    <div className="mt-10 bg-[#0B0F19] p-6 rounded-2xl shadow-lg border border-gray-800">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-white tracking-wide">
          Gestión de Usuarios
        </h2> 
        <span className="text-sm text-cyan-400 cursor-pointer hover:text-cyan-300 transition">
          Ver todo →
        </span>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-800 cursor-pointer">
        <table className="w-full text-left">

          <thead>
            <tr className="bg-[#111827] text-gray-400 text-sm uppercase tracking-wider">
              <th className="py-3 px-4">Usuario</th>
              <th className="px-4">Rol</th>
              <th className="px-4">Estado</th>
            </tr>
          </thead>

          <tbody>
            {data.map((user) => (  
              <tr 
                key={user.id} 
                className="border-t border-gray-800 hover:bg-[#1A2238] transition"
              >
                <td className="py-3 px-4 text-white font-medium">
                  {user.nombre}
                </td>

                <td className="px-4 text-gray-300">
                  {user.rol}
                </td>

                <td className="px-4">
                  <span
                    className={
                      user.estado === "Activo"
                        ? "bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs"
                        : "bg-gray-700/30 text-gray-400 px-3 py-1 rounded-full text-xs"
                    }
                  >
                    {user.estado}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
      </div>


      {showPagination && (
        <Pagination className="mt-6">
        <PaginationContent>

          <PaginationItem>
            <PaginationPrevious
              onClick={() => setPage(page - 1)}
              className={
                page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"
              }
            />
          </PaginationItem>

          <PaginationItem>
            <span className="text-gray-400 text-sm px-2">
              {page} / {totalPages}
            </span>
          </PaginationItem>

          <PaginationItem>
            <PaginationNext
              onClick={() => setPage(page + 1)}
              className={
                page === totalPages
                  ? "pointer-events-none opacity-50"
                  : "cursor-pointer"
              }
            />
          </PaginationItem>

        </PaginationContent>
      </Pagination>
      )}

    </div>
  );
};

export default Users;