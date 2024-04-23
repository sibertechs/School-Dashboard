// import React from "react";
import { FaSearch, FaCaretRight, FaHeart, FaStar } from "react-icons/fa";
import Sidebar1 from "../../Components/Sidebar1/Sidebar1";
import AWAAKYE from "./IMG/AWAAKYE.png";
import MCDONALD from "./IMG/MCDONALD.png";
import GOBE from "./IMG/GOBE.png";
import AMPESIE from "./IMG/AMPESIE.png";
import BANKU from "./IMG/BANKU.png";
import FUFU from "./IMG/FUFU.png";
import JOLLOF from "./IMG/JOLLOF.png";
// import KENKEY from "./IMG/KENKEY.png";
// import KONKONTE from "./IMG/KONKONTE.png";
import PLAIN from "./IMG/PLAIN.png";
import TZ from "./IMG/TZ.png";

const FoodOrders = () => {
  return (
    <div>
      <Sidebar1 />
      <div className=" justify-center items-center flex flex-col">
        <div className="justify-between items-center flex mx-10 w-full">
          <h1 className="mx-24 my-4 font-bold text-2xl">Welcome Siber</h1>
          <form action="" className="max-w-[350px] w-full px-4 mx-24 my-4">
            <div className="relative flex">
              <input
                type="text"
                name="search"
                className="w-full border h-12 shadow p-2 text-[0.6rem] mt-2 px-12 outline-none rounded-full"
                placeholder="What do you want to eat today?"
                required
              />
              <FaSearch className="mt-4 text-[1.5rem] absolute top-[10%] left-4 text-[#0f172a] cursor-pointer mr-4" />
            </div>
          </form>
        </div>
        <div className="flex justify-evenly lg:w-[1200px] rounded-xl items-center mx-auto bg-[#0f172a] py-8 text-white ">
          <div className="flex flex-col">
            <h1 className=" text-2xl my-4 font-bold mx-4">
              Get Discount Voucher Up To 20%
            </h1>
            <p className=" text-[0.8rem] mx-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae, accusamus!
            </p>
          </div>
          <div className="OrderImg">
            <img src={AWAAKYE} alt="" />
          </div>
        </div>
        <div className="flex justify-between lg:w-[1200px] rounded-xl items-center mx-auto my-4  text-white ">
          <div className="flex gap-4">
            <div className="flex gap-1 bg-[#0f172a] py-1 px-2 rounded-full">
              <img src={MCDONALD} alt="" className="w-[1.4rem]" />
              <p>Dishes</p>
            </div>

            <div className="flex gap-1 bg-white py-1 px-2 rounded-full text-black">
              <img src={MCDONALD} alt="" className="w-[1.4rem]" />
              <p>Burger</p>
            </div>
            <div className="flex gap-1 bg-white py-1 px-2 rounded-full text-black">
              <img src={MCDONALD} alt="" className="w-[1.4rem]" />
              <p>Snacks</p>
            </div>
            <div className="flex gap-1 bg-white py-1 px-2 rounded-full text-black">
              <img src={MCDONALD} alt="" className="w-[1.4rem]" />
              <p>Drink and Ice</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-1 bg-[#0f172a] py-1 px-2 rounded-full">
              <p>Menu</p>
            </div>

            <div className="flex gap-1 bg-white py-1 px-2 rounded-full text-black">
              <p>Meal Plans</p>
            </div>
            <div className="flex gap-1 bg-white py-1 px-2 rounded-full text-black">
              <p>Delivery</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[1200px]">
          <div className="flex justify-between lg:w-[1200px] rounded-xl items-center mx-auto my-4 ">
            <h2 className=" font-bold text-[1.2rem]">Popular Dishes</h2>
            {/* <div className="flex gap-4">
              <div className="flex gap-1 bg-[#0f172a] py-1 px-2 rounded-full">
                <img src={MCDONALD} alt="" className="w-[1.4rem]" />
                <p>Dishes</p>
              </div>

              <div className=" bg-white py-1 px-2 rounded-full text-black"></div>

              <div className="flex gap-1 bg-white py-1 px-2 rounded-full text-black">
                <img src={MCDONALD} alt="" className="w-[1.4rem]" />
                <p>Drink and Ice</p>
              </div>
            </div> */}
            <div className="flex gap-4">
              <h2 className="  text-[1rem]"> View all</h2>
              <FaCaretRight className="mt-1" />
              {/* <div className="flex gap-1 bg-[#0f172a] py-1 px-2 rounded-full">
                <p>Menu</p>
              </div>

              <div className="flex gap-1 bg-white py-1 px-2 rounded-full text-black">
                <p>Meal Plans</p>
              </div>
              <div className="flex gap-1 bg-white py-1 px-2 rounded-full text-black">
                <p>Delivery</p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center  lg:w-[1200px] rounded-xl flex-wrap items-center mx-auto my-4  text-white ">
          <div className="flex gap-4 flex-wrap">
            <div className="flex flex-col gap-1 bg-white py-1 px-2 w-[10rem] h-[10rem] rounded-md">
              <div className="flex justify-between">
                <p className=" bg-red-600 mt-1">10% OFF</p>
                <FaHeart className=" text-red-600" />
              </div>
              <img src={TZ} alt="" className="w-[8rem] px-6" />
              <div className="flex flex-col">
                <div className="flex gap-1 text-red-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-between">
                  <div className="flex-col">
                    <p className=" text-black">Tuo Zaafi</p>
                    <p className=" text-black font-bold"> &#x20B5;20</p>
                  </div>
                  <div className=" bg-red-600 h-8 w-6 mt-1">
                    <span className=" text-red-600 h-[2rem]">0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 bg-white py-1 px-2 w-[10rem] h-[10rem] rounded-md">
              <div className="flex justify-between">
                <p className=" bg-red-600 mt-1">10% OFF</p>
                <FaHeart className=" text-gray-100" />
              </div>
              <img src={FUFU} alt="" className="w-[8rem] px-6" />
              <div className="flex flex-col">
                <div className="flex gap-1 text-red-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-between">
                  <div className="flex-col">
                    <p className=" text-black">Fufu</p>
                    <p className=" text-black font-bold">GH&#x20B5;40</p>
                  </div>
                  <div className=" bg-red-600 h-8 w-6 mt-1">
                    <span className=" text-red-600 h-[2rem]">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-white py-1 px-2 w-[10rem] h-[10rem] rounded-md">
              <div className="flex justify-between">
                <p className=" bg-red-600 mt-1">10% OFF</p>
                <FaHeart className=" text-gray-100" />
              </div>
              <img src={PLAIN} alt="" className="w-[8rem] px-6" />
              <div className="flex flex-col">
                <div className="flex gap-1 text-red-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-between">
                  <div className="flex-col">
                    <p className=" text-black">Tuo Zaafi</p>
                    <p className=" text-black font-bold"> &#x20B5;20</p>
                  </div>
                  <div className=" bg-red-600 h-8 w-6 mt-1">
                    <span className=" text-red-600 h-[2rem]">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-white py-1 px-2 w-[10rem] h-[10rem] rounded-md">
              <div className="flex justify-between">
                <p className=" bg-red-600 mt-1">10% OFF</p>
                <FaHeart className=" text-gray-100" />
              </div>
              <img src={GOBE} alt="" className="w-[8rem] px-6" />
              <div className="flex flex-col">
                <div className="flex gap-1 text-red-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-between">
                  <div className="flex-col">
                    <p className=" text-black">Gari and Beans</p>
                    <p className=" text-black font-bold">GH&#x20B5;12</p>
                  </div>
                  <div className=" bg-red-600 h-8 w-6 mt-1">
                    <span className=" text-red-600 h-[2rem]">0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 bg-white py-1 px-2 w-[10rem] h-[10rem] rounded-md">
              <div className="flex justify-between">
                <p className=" bg-red-600 mt-1">10% OFF</p>
                <FaHeart className=" text-gray-100" />
              </div>
              <img src={BANKU} alt="" className="w-[8rem] px-6" />
              <div className="flex flex-col">
                <div className="flex gap-1 text-red-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-between">
                  <div className="flex-col">
                    <p className=" text-black">Banku</p>
                    <p className=" text-black font-bold">GH&#x20B5;12</p>
                  </div>
                  <div className=" bg-red-600 h-8 w-6 mt-1">
                    <span className=" text-red-600 h-[2rem]">0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 bg-white py-1 px-2 w-[10rem] h-[10rem] rounded-md">
              <div className="flex justify-between">
                <p className=" bg-red-600 mt-1">10% OFF</p>
                <FaHeart className=" text-gray-100" />
              </div>
              <img src={AWAAKYE} alt="" className="w-[8rem] px-6" />
              <div className="flex flex-col">
                <div className="flex gap-1 text-red-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-between">
                  <div className="flex-col">
                    <p className=" text-black">Awaakye</p>
                    <p className=" text-black font-bold">GH&#x20B5;12</p>
                  </div>
                  <div className=" bg-red-600 h-8 w-6 mt-1">
                    <span className=" text-red-600 h-[2rem]">0</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1 bg-white py-1 px-2 w-[10rem] h-[10rem] rounded-md">
              <div className="flex justify-between">
                <p className=" bg-red-600 mt-1">10% OFF</p>
                <FaHeart className=" text-gray-100" />
              </div>
              <img src={JOLLOF} alt="" className="w-[8rem] px-6" />
              <div className="flex flex-col">
                <div className="flex gap-1 text-red-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-between">
                  <div className="flex-col">
                    <p className=" text-black">Jollof</p>
                    <p className=" text-black font-bold">GH&#x20B5;42</p>
                  </div>
                  <div className=" bg-red-600 h-8 w-6 mt-1">
                    <span className=" text-red-600 h-[2rem]">0</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 bg-white py-1 px-2 w-[10rem] h-[10rem] rounded-md">
              <div className="flex justify-between">
                <p className=" bg-red-600 mt-1">10% OFF</p>
                <FaHeart className=" text-red-600" />
              </div>
              <img src={AMPESIE} alt="" className="w-[8rem] px-6" />
              <div className="flex flex-col">
                <div className="flex gap-1 text-red-600">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="flex justify-between">
                  <div className="flex-col">
                    <p className=" text-black">Ampesie</p>
                    <p className=" text-black font-bold">GH&#x20B5;10</p>
                  </div>
                  <div className=" bg-red-600 h-8 w-6 mt-1">
                    <span className=" text-red-600 h-[2rem]">0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodOrders;
