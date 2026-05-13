import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Home } from "../Home/Home";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navigate } from "@/components/Navigate";
import { Toaster } from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import { useSelector } from "react-redux";
const PrivateLayout = () => {

 
  return (
    <SidebarProvider>
      <Home  />
      <main className="flex-1">
        <SidebarTrigger className="absolute"/>
        <Navigate isAuth={true}/>
        <Outlet /> {/* Aquí se renderizan Home, Cursos, Perfil, etc. */}
      </main>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </SidebarProvider>
  );
};

export default PrivateLayout;
