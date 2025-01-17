import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <>
      <nav className=" sticky top-0 bg-white shadow-md p-4 cursor-pointer">
        <div className=" flex justify-between">
          <div className=" flex flex-row hover:underline">
            <div className=" font-medium">List</div>
            <div className=" font-medium text-red-500">Race</div>
          </div>
          <ul className="hidden gap-6 md:flex">
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/"> HOME </NavLink>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              ABOUT
            </li>

            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              SERVICES
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/Contact">CONTACT</NavLink>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/Card">CARD</NavLink>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/data1"> LOGIN</NavLink>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/data2"> LOGIN</NavLink>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/data3"> LOGIN</NavLink>
            </li>
            <li className=" hover:text-red-500 cursor-pointer font-medium text-gray-500  hover:underline space-y-1">
              <NavLink to="/data4">Dummy </NavLink>
            </li>
          </ul>
          <div className="md:hidden ">
            <button className="text-3xl -mt-2 text-gray-500   ">&equiv;</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
