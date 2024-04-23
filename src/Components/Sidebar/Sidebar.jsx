import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineMenuFold,
  AiOutlineInbox,
  AiOutlineSetting,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { FaBoltLightning } from "react-icons/fa6";
import { BsCloudsFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegRegistered } from "react-icons/fa";
import { PiTrademarkRegisteredFill } from "react-icons/pi";
import { BiHome, BiChart, BiBullseye, BiStar } from "react-icons/bi";

const Sidebar = () => {
  const [sidebar, setsidebar] = useState(false);

  const handlesidebar = () => {
    setsidebar(!sidebar);
  };
  return (
    <div>
      <div onClick={handlesidebar} className="fixed left-[15%]">
        <AiOutlineMenu className="w-[3rem] text-blue-900" />
      </div>
      <div className="bg-[#0f172a] fixed mt-[-1rem] left-0 lg:w-[14rem] w-[2.5rem] lg:h-screen z-10 ">
        <h4 className="text-white flex font-bold text-[1.3rem] mt-8 mx-6 cursor-pointer">
          <BsCloudsFill className="mx-4 mt-2" />
          <span>dpopfood</span>
        </h4>
        <nav className="bg-[#0f172a] fixed left-0 lg:w-[12rem] w-[2.5rem] lg:h-screen">
          <h5 className="text-white mx-8 mt-4">Overview</h5>
          <ul className="my-8 mx-">
            <li className="px- w-full" title="Dashboard">
              <Link
                to="/dashboard"
                className="text-white leading-4 px-2 my-6 w-full flex mx-4 gap-2 font-light lg:hover:text-black lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 px- py-2"
              >
                <MdDashboard className=" m mt- font-bold mr-" />{" "}
                <span className="lg:block hidden">Dashboard</span>
              </Link>
              {/* <a
                href="Dashboard.jsx"
               
              >
               
              </a> */}
            </li>
            <li className="" title="Current Active Students">
              <Link
                to="/currentativestdts"
                className="text-white leading-4 px-2 my-6 w-full flex mx-4 gap-2 font-light lg:hover:text-black lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 px- py-2"
              >
                <MdOutlineNotificationsActive className=" m mt- font-bold mr-0" />{" "}
                <span className="lg:block hidden">Current Active Stds</span>
              </Link>
              {/* <a
                href="#"
                className="text-white leading-4 my-6 flex mx-4 gap-2 font-light lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 w-[14rem]"
              ></a> */}
            </li>
            <li className="" title="Current Registered Students">
              <Link
                to="/currentregisteredstudts"
                className="text-white leading-4 px-2 my-6 w-full flex mx-4 gap-2 font-light lg:hover:text-black lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 px- py-2"
              >
                <FaRegRegistered className=" m mt- font-bold mr-0" />{" "}
                <span className="lg:block hidden">Current Reg Studs</span>
              </Link>
              {/* <a
                href="FoodOrders.jsx"
                className="text-white leading-4 my-6 flex mx-4 gap-2 font-light lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 w-[14rem]"
              >
               
              </a> */}
            </li>
            <li className="" title="Current Registered Staff">
              <Link
                to="/currentregisteredstaff"
                className="text-white leading-4 px-2 my-6 w-full flex mx-4 gap-2 font-light lg:hover:text-black lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 px- py-2"
              >
                <PiTrademarkRegisteredFill className=" m mt- font-bold mr-0" />{" "}
                <span className="lg:block hidden">Current Reg Staff</span>
              </Link>
              {/* <a
                href="#"
                className="text-white leading-4 my-6 flex mx-4 gap-2 font-light lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 w-[14rem]"
              ></a> */}
            </li>
            <li className="" title="Review">
              <Link
                to="/review"
                className="text-white leading-4 px-2 my-6 w-full flex mx-4 gap-2 font-light lg:hover:text-black lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 px- py-2"
              >
                <BiBullseye className=" m mt- font-bold" />{" "}
                <span className=" lg:block hidden">Review</span>
              </Link>
              {/* <a
                href="#"
                className="text-white leading-4 my-6 flex mx-4 gap-2 font-light lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 w-[14rem]"
              >

              </a> */}
            </li>
            <li className="" title="Inbox">
              <Link
                to="/review"
                className="text-white leading-4 px-2 my-6 w-full flex mx-4 gap-2 font-light lg:hover:text-black lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 px- py-2"
              >
                <AiOutlineInbox className=" m mt- font-bold mr-0" />{" "}
                <span className=" lg:block hidden">Inbox</span>
              </Link>
              {/* <a
                href="#"
                className="text-white leading-4 my-6 flex mx-4 gap-2 font-light lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 w-[14rem]"
              >

              </a> */}
            </li>
            <li className="" title="Settings">
              <Link
                to="/review"
                className="text-white leading-4 px-2 my-6 w-full flex mx-4 gap-2 font-light lg:hover:text-black lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 px- py-2"
              >
                <AiOutlineSetting className=" m mt- font-bold mr-0" />{" "}
                <span className=" lg:block hidden">Settings</span>
              </Link>
              {/* <a
                href="#"
                className="text-white leading-4 my-6 flex mx-4 gap-2 font-light lg:hover:bg-white  hover:font-bold hover:rounded-lg  ease-in-out duration-500 w-[14rem]"
              >

              </a> */}
            </li>
          </ul>
        </nav>

        <div className="absolute bottom-5 mx-2 px-2 py-  bg-white justify-center items-center flex flex-col rounded-xl">
          <BiStar className="fa-solid fa-star absolute top-0 mt-[-1rem]  text-center text-white text-[2rem] bg-black p-2 rounded-lg" />
          <h4 className="text-[1.3rem] font-bold lg:block hidden mt-2">
            Try all feature
          </h4>
          <p className="text-[0.7rem] mb-4 lg:block hidden">
            Discover a more organized <br />
            food through our food dashboard
          </p>
          <a
            href=""
            className="bg-black lg:block hidden text-white px-3 font-bold mt- mb-2 rounded-full"
          >
            Upgrade plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
