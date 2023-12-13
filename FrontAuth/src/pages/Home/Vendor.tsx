import pic from "../../assets/book.jpg";
import pic2 from "../../assets/about-1.png";
import pic3 from "../../assets/quote.png";
import pic4 from "../../assets/starting-with.png";
import pic5 from "../../assets/smart-insights.png";
import pic6 from "../../assets/icons.png";
import pic7 from "../../assets/partner.png";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onToggleState } from "../../global/reduxState";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
export const Vendor = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);

  const toggleState = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();

  const onHandleToggleState = () => {
    dispatch(onToggleState(!toggleState));
  };

  return (
    <div>
      <div
        className="grid  h-[80vh] w-full  justify-start bg-center bg-cover items-center "
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className=" w-[50vw] h-auto ml-[100px]">
          <h1 className="text-[40px] text-white text-start w-[60%]">
            Become a Bolt Food partner and grow your revenue
          </h1>

          <p className="text-white text-[20px] mt-2 text-start w-[65%] ">
            Bolt Food providers enjoy more orders, increased sales, and
            unmatched visibility — sign up today and reap the benefits!
          </p>

          <button className="w-[20%]  bg-purple-700 p-[10px] rounded-[40px] text-white text-lg mt-4">
            get started
          </button>
        </div>
      </div>
      {/* second page */}
      <div className="grid bg-white w-full h-[90vh]">
        <div className="grid grid-cols-5 m-3">
          <div className="col-span-3 h-full justify-center  flex text-center m-5">
            <div className="ml-[150px]">
              <h1 className="text-start mt-9  text-[30px]">
                Achieve more with Food Flex
              </h1>
              <p className="text-start mt-2 text-lg">
                Experience more success with our powerful tools and support:
              </p>

              <div className="text-start mt-10">
                <div className="mb-8">
                  <h2>
                    <span
                      className="py-[4px] px-[10px]  bg-purple-700
                                    rounded-[50%] ml-1"
                    >
                      1
                    </span>{" "}
                    <span className="p-2">More revenue</span>
                  </h2>
                  <p className="mt-1 ml-10">
                    Earn up to €1,000 per week in additional revenue.
                  </p>
                </div>

                <div className="mb-8">
                  <h2>
                    <span
                      className="py-[4px] px-[10px]  bg-purple-700
                                    rounded-[50%] ml-1 "
                    >
                      2
                    </span>{" "}
                    <span className="p-2">More customers</span>
                  </h2>
                  <p className="mt-1 ml-10 w-[80%]">
                    Get access to loyal Bolt Food customers and millions of
                    users who regularly use our car ride, electric scooter,
                    e-bike, and car-sharing services.
                  </p>
                </div>

                <div className="mb-8">
                  <h2>
                    <span
                      className="py-[4px] px-[10px]  bg-purple-700
                                    rounded-[50%] ml-1"
                    >
                      3
                    </span>{" "}
                    <span className="p-2">More insights</span>
                  </h2>
                  <p className="mt-1 ml-10">
                    Optimise performance with valuable insight into data behind
                    your sales.
                  </p>
                </div>

                <div className="mb-6">
                  <h2>
                    <span
                      className="py-[4px] px-[10px]  bg-purple-700
                                    rounded-[50%] ml-1"
                    >
                      4
                    </span>{" "}
                    <span className="p-2">More flexibility</span>
                  </h2>
                  <p className="mt-1 ml-10 w-[80%]">
                    Offer pickup, delivery, or both — manage your orders
                    seamlessly from your tablet, phone or POS with 1,000+
                    integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white">
            <div className="h-[100%] w-[80%] mt-5 ml-10">
              <img src={pic2} alt="" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      {/* third */}
      <div className="grid bg-white w-full h-[90vh]">
        <div className="grid grid-cols-6 bg-cyan-200 m-4">
          <div className="col-span-3 bg-white justify-center flex items-center">
            <div className="w-[80%] h-[80%]  rounded ">
              <img
                src={pic3}
                alt=""
                className="w-full h-full object-fit rounded-lg"
              />
            </div>
          </div>
          <div className="col-span-3 bg-white justify-center flex items-center">
            <div className="bg-white h-[60%] w-[100%]">
              <p className="mt-10 text-[40px] w-[50px] h-[50px]  bg-purple-700">
                <img src={pic6} alt="" />
              </p>
              <p className="w-[70%] text-[20px] px-7">
                Thanks to the Bolt Food platform, we've seen a significant
                growth in sales, which has allowed us to expand and open new
                locations.
              </p>
              <p className=" m-8">Maarja Kelder, owner, ‘Nuudel’.</p>
              <button className="w-[20%] py-4  bg-purple-700 m-4 text-white text-lg rounded-[40px]">
                Read Me
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* end */}
      <div className="h-[70vh] w-full bg-white justify-center flex items-center">
        <div className="w-[80%] h-[80%] bg-white">
          <div className="w-[80%] text-[40px]  font-semibold">
            Our partnerships expand beyond restaurants
          </div>
          <div className="mt-4 text-gray-400 text-[20px] mb-5">
            We partner with businesses of all types.
          </div>
          <div className="flex">
            <div className="w-[20%] h-[150px] mt-7  ">
              <div className="font-semibold mb-4">Florists</div>
              <div className="text-gray-500">
                We'll ensure your beautiful bouquets, arrangements, plants, and
                gifts arrive on time.
              </div>
            </div>
            <div className="w-[20%] h-[150px] mt-7 m-3">
              <div className="font-semibold mb-4">Grocery stores</div>
              <div className="text-gray-500">
                Provide same-day delivery of fresh groceries to nearby
                customers.
              </div>
            </div>
            <div className="w-[20%] h-[150px] mt-7 m-3">
              <div className="font-semibold mb-4">Pet stores</div>
              <div className="text-gray-500">
                Keep pet owners happy with speedy delivery of pet food, toys and
                other products.
              </div>
            </div>
            <div className="w-[20%] h-[150px] mt-7 m-3">
              <div className="font-semibold mb-4">Other retail stores</div>
              <div className="text-gray-500">
                Electronics, alcohol, fashion, and more — take advantage of our
                delivery service and powerful analytical tools to reach more
                customers and grow your sales!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* four */}
      <div className="grid h-[80vh] w-full bg-white  ">
        <div className="grid grid-cols-5 h-full w-full bg-white ">
          <div className="col-span-3 bg-white justify-center flex">
            <div className="bg-white h-[100%] w-[80%] flex items-center flex-col">
              <div className="text-[30px]  font-extrabold w-[50%] mb-5 mt-4">
                Smart insights for smart businesses
              </div>
              <div className="w-[50%] text-[18px] text-gray-500">
                Track your key performance indicators and make data-driven
                decisions with Bolt Food.
              </div>
              <div className="font-medium text-lg w-[50%] mt-5 pr-6">
                Unique users
              </div>
              <div className="w-[50%]  text-[19px] text-gray-500 ">
                The number of users who made their first order from your
                restaurant during the week.
              </div>

              <div className="font-medium text-lg w-[50%] mt-5 pr-6">
                Average order value
              </div>
              <div className="w-[50%]  text-[19px] text-gray-500 ">
                Better understand your customers’ average pre-discount spend.
              </div>

              <div className="font-medium text-lg w-[50%] mt-5 pr-6">
                Revenue
              </div>
              <div className="w-[50%]  text-[19px] text-gray-500 ">
                Total order value before discounts, including VAT and excluding
                delivery fees.
              </div>

              <div className="font-medium text-lg w-[50%] mt-5 pr-6">
                Conversion
              </div>
              <div className="w-[50%]  text-[19px] text-gray-500 mb-5">
                The percentage of customers who placed an order after opening
                your restaurant profile in the app.
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white flex justify-start">
            <div className="bg-gray-500 h-[80%] w-[80%]">
              <img src={pic5} alt="" className="h-full w-full object-fill" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid h-[80vh] w-full bg-white">
        <div className="grid grid-cols-5 ">
          <div className="col-span-3 bg-white flex justify-center items-center">
            <div className="h-[80%] w-[80%] bg-white rounded-lg ">
              <img src={pic4} alt="" className="h-full w-full object-fill " />
            </div>
          </div>

          <div className="col-span-2 flex justify-center items-center">
            <div className="h-[80%] w-full bg-white ">
              <h1 className="text-[40px] font-medium">
                Starting with Bolt Food is easy
              </h1>
              <p className="mt-3 text-gray-500 text-[20px]">
                Follow these 4 simple steps to get going:
              </p>
              <div className="mt-8">
                <h2>
                  <span
                    className="py-[4px] px-[10px]  bg-purple-700
                                    rounded-[50%] ml-1"
                  >
                    1
                  </span>{" "}
                  <span className="p-2">Sign a partnership agreement;</span>
                </h2>
              </div>

              <div className="mt-8">
                <h2>
                  <span
                    className="py-[4px] px-[10px]  bg-purple-700
                                    rounded-[50%] ml-1"
                  >
                    2
                  </span>{" "}
                  <span className="p-2">
                    Provide us with your menus and product photos;
                  </span>
                </h2>
              </div>

              <div className="mt-8">
                <h2>
                  <span
                    className="py-[4px] px-[10px]  bg-purple-700
                                    rounded-[50%] ml-1"
                  >
                    3
                  </span>{" "}
                  <span className="p-2">Verify your information;</span>
                </h2>
              </div>

              <div className="mt-8">
                <h2>
                  <span
                    className="py-[4px] px-[10px]  bg-purple-700
                                    rounded-[50%] ml-1"
                  >
                    4
                  </span>{" "}
                  <span className="p-2">
                    Set your status to ‘live’ and receive orders!
                  </span>
                </h2>
              </div>

              <button
                className="py-[10px] w-[20%] text-white text-[15px] bg-purple-700
                            m-2 mt-8 font-medium rounded-[40px]"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" min-h-[100vh] w-full bg-white flex justify-center items-center">
        <div className="h-auto w-[60%] bg-white text-center flex justify-center flex-col items-center">
          <h1 className="mt-4 text-[40px] font-semibold">
            Frequently asked questions
          </h1>

          <div
            className="w-[80%]  min-h-[50px] border-[1px] border-gray-400 flex
                    justify-start items-center flex-col text-start rounded-lg m-5 "
          >
            <div className="flex w-full h-[30px] justify-between mb-2">
              <h1 className="p-2">What is FlexFood</h1>
              <div className="p-2" onClick={() => setOpen(!open)}>
                {open ? <IoIosArrowDown /> : <MdOutlineKeyboardArrowUp />}
              </div>
            </div>
            {open && (
              <p className="mt-2 p-2">
                Bolt Food is a delivery solution for restaurants and merchants.
                The Bolt Food app connects partner restaurants and merchants
                with millions of customers who want to order food, groceries,and
                more.
              </p>
            )}
          </div>

          <div
            className="w-[80%]  min-h-[50px] border-[1px] border-gray-400 flex
                    justify-start items-center flex-col text-start rounded-lg m-2 "
          >
            <div className="flex w-full h-[30px] justify-between mb-2">
              <h1 className="p-2">
                Are there any specific requirements to become a Bolt Food
                partner?
              </h1>
              <div className="p-2" onClick={() => setOpen1(!open1)}>
                {open1 ? <IoIosArrowDown /> : <MdOutlineKeyboardArrowUp />}
              </div>
            </div>
            {open1 && (
              <p className="mt-2 p-2">
                Bolt Food is a delivery solution for restaurants and merchants.
                The Bolt Food app connects partner restaurants and merchants
                with millions of customers who want to order food, groceries,and
                more.
              </p>
            )}
          </div>

          <div
            className="w-[80%] min-h-[50px] border-[1px] border-gray-400 flex
                    justify-start items-center flex-col text-start rounded-lg m-2"
          >
            <div className="flex w-full h-[30px] justify-between mb-2">
              <h1 className="p-2">
                Does Bolt Food only work on restaurant partnerships, or can
                other businesses also join the platform?
              </h1>
              <div className="p-2" onClick={() => setOpen2(!open2)}>
                {open2 ? <IoIosArrowDown /> : <MdOutlineKeyboardArrowUp />}
              </div>
            </div>
            {open2 && (
              <p className="mt-2 p-2">
                Becoming a Bolt Food partner is easy — just complete the sign-up
                form to get started. You will need to provide your business
                information, such as your menu and product pictures. Once you’ve
                signed up, we’ll send you a device or you can use your own
                device, and you’re ready to start receiving orders.
              </p>
            )}
          </div>

          <div
            className="w-[80%]  min-h-[50px] border-[1px] border-gray-400 flex
                    justify-start items-center flex-col text-start rounded-lg m-2"
          >
            <div className="flex w-full h-[30px] justify-between mb-2">
              <h1 className="p-2">How can I become a Bolt Food merchant?</h1>
              <p className="p-2" onClick={() => setOpen3(!open3)}>
                {open3 ? <IoIosArrowDown /> : <MdOutlineKeyboardArrowUp />}
              </p>
            </div>
            {open3 && (
              <p className="mt-2 p-2">
                Becoming a Bolt Food partner is easy — just complete the sign-up
                form to get started. You will need to provide your business
                information, such as your menu and product pictures. Once you’ve
                signed up, we’ll send you a device or you can use your own
                device, and you’re ready to start receiving orders.
              </p>
            )}
          </div>

          <div
            className="w-[80%] min-h-[50px] border-[1px] border-gray-400 flex
                    justify-start items-center flex-col text-start rounded-lg m-2"
          >
            <div className="flex w-full h-[30px] justify-between mb-2">
              <h1 className="p-2">
                How does Bolt Food help its merchant partners increase their
                revenue?
              </h1>
              <p className="p-2" onClick={() => setOpen4(!open4)}>
                {open4 ? <IoIosArrowDown /> : <MdOutlineKeyboardArrowUp />}
              </p>
            </div>
            {open4 && (
              <p className="mt-2 p-2">
                Becoming a Bolt Food partner is easy — just complete the sign-up
                form to get started. You will need to provide your business
                information, such as your menu and product pictures. Once you’ve
                signed up, we’ll send you a device or you can use your own
                device, and you’re ready to start receiving orders.
              </p>
            )}
          </div>

          <div
            className="w-[80%]  min-h-[50px] border-[1px] border-gray-400 flex
                    justify-start items-center flex-col text-start rounded-lg m-2"
          >
            <div className="flex w-full h-[30px] justify-between mb-2">
              <h1 className="p-2">Do I need extra hardware or software?</h1>
              <p className="p-2" onClick={() => setOpen5(!open5)}>
                {open5 ? <IoIosArrowDown /> : <MdOutlineKeyboardArrowUp />}
              </p>
            </div>
            {open5 && (
              <p className="mt-2 p-2">
                Becoming a Bolt Food partner is easy — just complete the sign-up
                form to get started. You will need to provide your business
                information, such as your menu and product pictures. Once you’ve
                signed up, we’ll send you a device or you can use your own
                device, and you’re ready to start receiving orders.
              </p>
            )}
          </div>

          <div
            className="w-[80%]  min-h-[50px] border-[1px] border-gray-400 flex
                    justify-start items-center flex-col text-start rounded-lg m-2"
          >
            <div className="flex w-full h-[30px] justify-between mb-2">
              <h1 className="p-2">
                How long does it take to become a partner restaurant?
              </h1>
              <p className="p-2" onClick={() => setOpen6(!open6)}>
                {open6 ? <IoIosArrowDown /> : <MdOutlineKeyboardArrowUp />}
              </p>
            </div>
            {open6 && (
              <p className="mt-2 p-2">
                Becoming a Bolt Food partner is easy — just complete the sign-up
                form to get started. You will need to provide your business
                information, such as your menu and product pictures. Once you’ve
                signed up, we’ll send you a device or you can use your own
                device, and you’re ready to start receiving orders.
              </p>
            )}
          </div>

          <div
            className="w-[80%]  min-h-[50px] border-[1px] border-gray-400 flex
                    justify-start items-center flex-col text-start rounded-lg m-2"
          >
            <div className="flex w-full h-[30px] justify-between mb-2">
              <h1 className="p-2">
                What are the benefits of partnering with Bolt Food for
                merchants?
              </h1>
              <p className="p-2" onClick={() => setOpen7(!open7)}>
                {open7 ? <IoIosArrowDown /> : <MdOutlineKeyboardArrowUp />}
              </p>
            </div>
            {open7 && (
              <p className="mt-2 p-2">
                Becoming a Bolt Food partner is easy — just complete the sign-up
                form to get started. You will need to provide your business
                information, such as your menu and product pictures. Once you’ve
                signed up, we’ll send you a device or you can use your own
                device, and you’re ready to start receiving orders.
              </p>
            )}
          </div>
        </div>
      </div>
      <div className=" bg-white h-[90vh] w-full flex justify-center items-center">
        <div className="w-[70%] h-[70vh] bg-gray-300 p-[10px] relative flex flex-col">
          <div className="h-[80%] w-[40%] absolute bottom-[150px] mt-10">
            <img
              src={pic7}
              alt=""
              className="w-full h-full object-fill rounded-md ml-3"
            />
          </div>
          <div className="absolute left-[600px] ">
            <div className="w-[80%] text-[40px] font-semibold">
              Get ready to enjoy the benefits of Bolt Food!
            </div>
            <div className="text-[18px] mt-4 mb-5">
              {" "}
              Unlock your business’s full potential:
            </div>
            <div>
              <div className="mt-6">
                <span className="py-[4px] px-[10px]  bg-purple-700 rounded-[50%] m-2">
                  1
                </span>
                <span>Increase revenue by an average of €1,000 per week</span>
              </div>

              <div className="mt-10">
                <span className="py-[4px] px-[10px] bg-purple-700 rounded-[50%] m-2">
                  2
                </span>
                <span>Increase revenue by an average of €1,000 per week</span>
              </div>
              <button className="py-[10px] w-[80%] bg-purple-700 mt-10 text-[20px] font-bold text-white rounded-[40px]">
                Become a Foodflex partner
              </button>
              <div className="mt-10">
                Disclaimer: Actual results may vary, depending on local factors
                and influences.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Vendor;
