import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/Admin/sideBarAmin/sideBar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="flex-none">
        <SideBar />
      </div>
      <main className="grow bg-gray-50 ">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
