import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

const Users = ({ showPagination = true, users = [], deleteUser }) => {
  const [page, setPage] = useState(1);
  const perPage = 5;

  const nonAdminUsers = users.filter((u) => u.role?.toLowerCase() !== "admin");
  const totalPages = Math.max(1, Math.ceil(nonAdminUsers.length / perPage));
  const data = nonAdminUsers.slice((page - 1) * perPage, page * perPage);

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

      <div className="overflow-hidden rounded-xl border border-gray-800">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#111827] text-gray-400 text-sm uppercase tracking-wider">
              <th className="py-3 px-4">Nombre</th>
              <th className="px-4">Apellidos</th>
              <th className="px-4">Rol</th>
              <th className="px-4">Estado</th>
              <th className="px-5">Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-8 text-center text-gray-500 text-sm">
                  No hay usuarios registrados.
                </td>
              </tr>
            ) : (
              data.map((user) => (
                <tr key={user.idPerson} className="border-t border-gray-800 transition hover:bg-[#111827]">
                  <td className="py-3 px-4 text-white font-medium">{user.name}</td>
                  <td className="px-4 text-white">{user.lastName}</td>
                  <td className="px-4">
                    <span className="text-xs text-gray-400 capitalize">{user.role?.toLowerCase()}</span>
                  </td>
                  <td className="px-4">
                    <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs">
                      Activo
                    </span>
                  </td>
                  <td className="px-5">
                    <button
                      onClick={() => deleteUser(user.idPerson)}
                      className="text-red-500 hover:text-red-400 transition-colors cursor-pointer"
                    >
                      <MdDeleteOutline className="text-xl" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {showPagination && nonAdminUsers.length > perPage && (
        <Pagination className="mt-6">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className={page === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            <PaginationItem>
              <span className="text-gray-400 text-sm px-2">
                {page} / {totalPages}
              </span>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                className={page === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default Users;
