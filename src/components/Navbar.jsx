import React from "react";
import 'remixicon/fonts/remixicon.css';
import logo from "/logo.png"
const Navbar = () => {
  return (
    <div className="mainnav h-[10%] navbar p-4 flex items-center justify-between">
      <div className="circle h-[3.6vw] w-[3.6vw]  bg-[#25282F] pl-2 pt-3 rounded-full">
        <img src={logo} className="rounded-full h-[85%] bg-red-100  w-[85%]" alt="" />
      </div>
      <div className="header w-[50%]">
        <ul className="nav-list flex justify-start gap-10">
          <li >
            <a className="font-bold" href="#start">START</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#services">SERVICES</a>
          </li>
          <li>
            <a href="#blog">BLOG</a>
          </li>
          <li>
            <a href="#open-source">OPEN SOURCE</a>
          </li>
        </ul>
      </div>
      <div className="navbtn text-gray-700  w-[12vw] p-3 border border-zinc-300 rounded-lg flex items-center justify-center cursor-pointer hover:bg-zinc-200 transition duration-300">
        <i className="ri-arrow-right-fill text-lg"></i>
        <h1 className="ml-2">WORK WITH ME</h1>
      </div>
    </div>
  );
};

export default Navbar;
