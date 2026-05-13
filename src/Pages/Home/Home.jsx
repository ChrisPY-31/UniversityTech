import React, { useEffect, useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from "../../components/ui/sidebar";
import { Link, Navigate } from "react-router-dom";
import MenuRoles from "../../components/MenuRoles";
import { useSelector } from "react-redux";

export const Home = () => {
  const [menu, setMenu] = useState(3);

  const { role } = useSelector((state) => state.auth);

  const rol = "admin"; // "admin", student", "instructor"

  return (
    <>
      <Sidebar>
        <SidebarContent className="bg-white-400">
          <SidebarHeader>
            <h2>Nexus Tech University</h2>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarMenu>
              <MenuRoles rol={role} activeMenu={menu} />
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
};
