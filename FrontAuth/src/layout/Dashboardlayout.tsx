import { useSelector } from "react-redux";
import Dashboardsidebar from "../components/Sidebar/Dashboardsidebar";
import Dashboardheader from "../components/Headers/Dashboardheader";
import { Outlet } from "react-router-dom";
import { FC } from "react";

const Dashboardlayout: FC = () => {
  const readToggle = useSelector((state: any): any => {
    return state.toggle;
  });
  return (
    <div>
      <Dashboardsidebar />
      <div className="w-full flex justify-end">
        <div
          className={`transition-all duration-300`}
          style={{
            width: `${readToggle ? "calc(100% - 240px)" : "calc(100% - 70px)"}`,
          }}
        >
          <Dashboardheader />
          <div className="m-4">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
