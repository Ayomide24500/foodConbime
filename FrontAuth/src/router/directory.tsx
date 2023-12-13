import { FC, useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import AdminDashboard from "../pages/Dashboard/AdminDashboard";
import DashboardHome from "../pages/Dashboard/DashboardHome";

const DirectaryRoute: FC = () => {
  const [state, setState]: any = useState({});

  const user = useSelector((state: any) => state.userState);
  useEffect(() => {
    if (user) {
      const dec = jwtDecode(user);
      setState(dec);
    }
  }, []);

  return (
    <div>
      {state.status === "admin" ? (
        <AdminDashboard />
      ) : state.status === "user" ? (
        <DashboardHome />
      ) : state.status === "student" ? (
        <DashboardHome />
      ) : null}
    </div>
  );
};

export default DirectaryRoute;
