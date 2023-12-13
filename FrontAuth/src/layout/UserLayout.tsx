import { Outlet } from "react-router-dom";
import { FC } from "react";
import { useSelector } from "react-redux";
import Sider2 from "../components/Sidebar/UserSider";
import UserHeader from "../components/Headers/UserHeader";
import Sider from "../components/Sidebar/UserSider1";

const UserLayout: FC = () => {
  const readToggle = useSelector((state: any) => state.toggle);
  return (
    <div>
      <Sider />
      <div className="w-full flex justify-end ">
        <div
          className={`bg-[white] transition-all duration-300 `}
          style={{
            width: `${readToggle ? "calc(100% - 210px)" : "calc(100% - 70px)"}`,
          }}
        >
          <UserHeader />
          <div className="flex flex-row-reverse">
            <Sider2 />
            <div
              className={`
         flex 
         justify-start 
         items-center
        w-[100%] 
        ${readToggle ? "pr-[30px]" : "pr-0"}
         `}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
