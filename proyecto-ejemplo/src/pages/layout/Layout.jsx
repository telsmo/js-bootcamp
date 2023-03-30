import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout-container">
      <Header />
      <Outlet />
    </div>
  );
};
export default Layout;
