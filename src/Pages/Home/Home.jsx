import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
} from "../../components/ui/sidebar";
import { Link } from "react-router-dom";
import MenuRoles from "../../components/MenuRoles";

export const Home = () => {
  const [menu, setMenu] = useState(3);
  const rol = "instructor"; // "admin", student", "instructor"

  return (
    <>
      <Sidebar>
        <SidebarContent className="bg-white-400">
          <SidebarHeader>
            <h2>Nexus Tech University</h2>
          </SidebarHeader>
          <SidebarGroup>
            <SidebarMenu>
                <MenuRoles rol={rol} activeMenu={menu}/>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </>
  );
};
