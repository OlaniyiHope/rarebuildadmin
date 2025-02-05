import React from "react";

import StatsCards from "../../Components/AdminStat/StatsCards";
import AdminWelcome from "../../Components/AdminHeader/AdminWelcome";
import UserTable from "../../Components/AdminStat/UserTable";
import AdminHeader from "../AdminHeader";

const Dashboard = () => {
  return (
    <div>
      <AdminHeader />
      <AdminWelcome />
      {/*<StatsCards />*/}
      <UserTable />
    </div>
  );
};

export default Dashboard;
