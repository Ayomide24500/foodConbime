import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineMessage } from "react-icons/ai";
import { FaChartArea } from "react-icons/fa";
import { FaAd } from "react-icons/fa";
import { AiOutlineFolderView } from "react-icons/ai";
import { Link } from "react-router-dom";

const DashSider = () => {
  const [change, setChange] = useState(false);

  const changer = () => {
    setChange(!change);
  };
  return (
    <div className="w-[230px] h-[100vh] border-r bg-[#FF4500] fixed">
      <div className="w-[full] h-[80px] flex justify-center items-center">
        <Link to="/">
          <h1 className="text-[25px] text-white font-semibold">Grocery Eazy</h1>
        </Link>
      </div>
      <div className="w-full h-[calc(100vh-80px)]  flex justify-center items center flex-col">
        <div className="w-full h-[90%]  flex justify-center items-start ">
          <div className="w-[70%] pt-[50px]">
            <div
              onClick={changer}
              className="w-full h-[45px] rounded-[6px] text-[17px] text-black font-bold flex justify-center items-center bg-white mb-[20px] hover:cursor-pointer transition-all duration-350"
            >
              <AiOutlineDashboard className="mr-3" />
              DashBoard
            </div>
            {change ? (
              <div className="transition-all duration-350 ">
                <div className="w-full h-[45px] text-[17px] mb-[20px] text-white font-bold flex justify-start items-center  hover:cursor-pointer">
                  <FaAd className="mr-3" />
                  Add Project
                </div>

                <div className="anime w-full h-[45px] text-[17px] mb-[20px] text-white font-bold flex justify-start items-center  hover:cursor-pointer">
                  <AiOutlineFolderView className="mr-3" />
                  View Project
                </div>
              </div>
            ) : null}

            <div className="w-full h-[45px] rounded-[6px] text-[17px] text-white font-bold flex justify-start items-center  mb-[20px] hover:cursor-pointer">
              <AiOutlineProject className="mr-3" />
              Projects
            </div>
            <div className="w-full h-[45px] rounded-[6px] text-[17px] text-white font-bold flex justify-start items-center  mb-[20px] hover:cursor-pointer">
              <FaChartArea className="mr-3" />
              Analytics
            </div>
            <div className="w-full h-[45px] rounded-[6px] text-[17px] text-white font-bold flex justify-start items-center  mb-[20px] hover:cursor-pointer">
              <AiOutlineTeam className="mr-3" />
              Teams
            </div>
            <div className="w-full h-[45px] rounded-[6px] text-[17px] text-white font-bold flex justify-start items-center  mb-[20px] hover:cursor-pointer">
              <AiOutlineMessage className="mr-3" />
              Messages
            </div>
            <div className="w-full h-[45px] rounded-[6px] text-[17px] text-white font-bold flex justify-start items-center  mb-[20px] hover:cursor-pointer">
              <AiOutlineSetting className="mr-3" />
              Settings
            </div>
          </div>
        </div>
        <div className="w-[100%] h-[10%] flex justify-center">
          <div className="w-[80%] text-[17px] text-white font-semibold flex justify-start gap-3 :hover cursor-pointer ">
            <AiOutlineLogout className="mt-1" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSider;
