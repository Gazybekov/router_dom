import React from "react";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      <footer>@makers2023</footer>
    </>
  );
};

export default Layout;
