import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/Admin/sideBarAmin/sideBar";
import styles from "./admin.module.css";

const AdminLayout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.SideBar}>
        <SideBar />
      </div>
      <main className={styles.mainAdmin}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
