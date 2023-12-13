import DashSider from "../components/Sidebar/AdminDashSider";
import AdminDashhead from "../components/Headers/AdminDashhead";
import { Outlet } from "react-router-dom";

const AdminDashLayout = () => {
  return (
    <div>
      <div>
        <div className="flex">
          <DashSider />
          <div className="flex  flex-col">
            <AdminDashhead />
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashLayout;
