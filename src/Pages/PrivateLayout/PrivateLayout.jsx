import React from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../Home/Home";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navigate } from "@/components/Navigate";
const PrivateLayout = ({ isAuth }) => {
  if (!isAuth) return <Navigate to="/sign-in" />;

  return (
    <SidebarProvider>
      <Home />
      <main className="flex-1">
        <SidebarTrigger className="absolute"/>
        <Navigate isAuth={true} />
        <Outlet /> {/* Aquí se renderizan Home, Cursos, Perfil, etc. */}
      </main>
    </SidebarProvider>
  );
};

export default PrivateLayout;
