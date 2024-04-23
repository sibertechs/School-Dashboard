import React from "react";
import { useNavigate } from "react-router-dom";
import { BsTriangle } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
const Nav = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <div className="flex flex-col my-4 w-full justify-center items-center mx-auto ">
      <div className=" justify-evenly items-center w-full mx-auto md:flex-row flex flex-col  h-[4rem]">
        <h2 className=" font-bold text-[1.3rem] mx-12">Analytics</h2>
        {/* <div className="flex">
            <span className="flex gap-2 text-[#22ee7a]"><BsTriangle  className="mt-1"/>Year over year</span>
        </div> */}
        <div className="flex gap-8">
          <div className="-400  flex">
            <form action="" className="max-w-[480px] w-full px-4">
              <div className="relative flex">
                <input
                  type="text"
                  name="q"
                  className="w-full border h-12 shadow p-2 mt-2 px-20 outline-none rounded-xl"
                  placeholder="search"
                  required
                />
                <FaSearch className="mt-2 text-[2rem] absolute top-[10%] right-0 text-black cursor-pointer mr-4" />
              </div>
            </form>
          </div>
          <div className="mt-4">
            <input
              type="date"
              name=""
              id=""
              className="px-12 h-[2.2rem] text-[1.2rem]  font-bold rounded-3xl"
            />
          </div>
          <div className="logout">
            <a
              className=" bg-violet-700 text-white py-1 px-8 absolute my-3 font-bold rounded-sm cursor-pointer"
              onClick={() => logout()}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
