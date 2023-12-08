import React from "react";
import AdminNav from "./AdminNav/AdminNav";
import OrderTable from "./OrderTable";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <AdminNav />
      <Outlet />
    </div>
  );
}

export default Dashboard;
