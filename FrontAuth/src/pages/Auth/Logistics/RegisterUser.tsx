import { Link } from "react-router-dom";

const RegisterUser = () => {
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <div className=" bg-red-600 w-[60%] h-[80%] grid grid-rows-3">
        <div className=" row-span-1 bg-[#39A88E]"></div>
        <div className=" row-span-2 bg-blue-500">
          <div className=" text-[30px] font-[500] text-center">
            Choose Your Country
          </div>
          <div className=" flex flex-col pl-8 ">
            <div>Country*</div>
            <label>
              {/* <p>Select your country</p> */}
              <select className=" w-[90%] h-[40px] rounded-lg outline-0">
                <option>Global</option>
                <option>Nigeria</option>
                <option>Cameroon</option>
                <option>Ghana</option>
                <option>Niger</option>
                <option>France</option>
                <option>South-Africa</option>
                <option>Russia</option>
              </select>
            </label>
            <div>This must be fill</div>
          </div>
          <div className=" pl-8 mt-6">
            <Link to="/nextprocess">
              <button className=" w-[90%] h-[40px] rounded-lg bg-[#39A88E]">
                NEXT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
