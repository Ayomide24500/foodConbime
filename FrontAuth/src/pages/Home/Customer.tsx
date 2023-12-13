import { FaCircleCheck } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { FaPersonBiking } from "react-icons/fa6";
const Customer = () => {
  return (
    <div className="grid grid-cols-1 mt-[200px] gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex flex-col items-center">
        <div className="text-[32px] mb-4 text-[#FF4500]">
          <FaCircleCheck />
        </div>
        <div className="text-[#2F313F] text-[25px] font-medium">
          15+ thousand
        </div>
        <div className="text-[#2F313F] text-center">
          customers around Nigeria
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-[32px] mb-4 text-[#FF4500]">
          <TbWorld />
        </div>
        <div className="text-[#2F313F] text-[25px] font-medium">
          5 Regions in Nigeria
        </div>
        <div className="text-[#2F313F] text-center">
          Coverage in major regions
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="text-[32px] mb-4 text-[#FF4500]">
          <FaPersonBiking />
        </div>
        <div className="text-[#2F313F] text-[25px] font-medium">
          2+ thousand
        </div>
        <div className="text-[#2F313F] text-center">drivers and couriers</div>
      </div>
    </div>
  );
};

export default Customer;
