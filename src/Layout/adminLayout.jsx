import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/Admin/sideBarAmin/sideBar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div>
        <SideBar />
      </div>
      <main className="bg-gray-100 ml-16">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
