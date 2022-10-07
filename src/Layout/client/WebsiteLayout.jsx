import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Client/Footer/Footer";
import NavBar from "../../components/Client/Navbar/NavBar";

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
        <Footer />
      </footer>
    </div>
  );
};

export default WebsiteLayout;
