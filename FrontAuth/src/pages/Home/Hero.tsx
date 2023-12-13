import Feature1 from "./Feature1";
// import hero from "../../assets/hero.webp";
import hero from "../../assets/medium-shot-woman-using-smartphone-outdoors.jpg";
import Service from "./Service";
import Propos from "./Propos";
import Customer from "./Customer";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div>
      <div
        className="h-[95vh] w-[100%] bg-gray-700 bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-[rgba(0,0,0,0.7)] h-full">
          <div className="flex md:ml-[30px]  justify-center flex-col max-w-xl px-6 mx-autoflex-col items-start pt-32 text-white ">
            <h1 className="text-4xl font-bold md:text-6xl pt-12">
              Buy and Pay Later
            </h1>
            <p className="mt-5 text-xl md:text-2xl pt-12">
              FoodFlex is the all-in-one Platform. Get picked up by a top-rated
              driver in minutes and enjoy a comfortable ride to wherever you’re
              going; or skip the traffic entirely on one of our industry-leading
              scooters.
            </p>
            <Link to="/account/get_started">
              <button className="mt-10 rounded-3xl bg-purple-700 px-6 py-3 text-xl font-bold">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Feature1 />
      <Service />
      <Propos />
      <Customer />
    </div>
  );
};
