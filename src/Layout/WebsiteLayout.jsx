import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/Client/Navbar/NavBar";

const WebsiteLayout = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default WebsiteLayout;
