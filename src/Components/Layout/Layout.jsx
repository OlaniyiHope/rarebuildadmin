import React from "react";
import AdminHeader from "../../Pages/AdminHeader";

const Layout = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
};

export default Layout;
