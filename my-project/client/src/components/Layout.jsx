import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { Outlet, useLocation } from "react-router-dom";
import React from 'react'
import Home from "../pages/Home";

const Layout = () => {
  const location = useLocation();
  // Show Topbar only on these routes
  const showTopbar = ["/", "/home", "/signup", "/login"].includes(location.pathname);

  return (
    <div>
      {showTopbar && <Topbar />}
      {/* <Home /> */}
      <Outlet />
    </div>
  )
}

export default Layout
