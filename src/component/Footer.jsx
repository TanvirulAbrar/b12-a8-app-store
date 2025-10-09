import React from "react";
import sllogo1 from "../assets/sllogo1.png";
import sllogo2 from "../assets/sllogo2.png";
import sllogo3 from "../assets/sllogo3.png";
import sllogo4 from "../assets/sllogo4.png";

import logo from "../assets/logo.png";
import { NavLink } from "react-router";
const Footer = () => {
  return (
    <div className=" bg-[#001931]">
      <div className="flex gap-10 justify-between p-8  text-white max-sm:flex-col">
        <div className="w-[200px] flex flex-col gap-2.5">
          <NavLink className="flex items-center btn-ghost text-xl" to={"/"}>
            <img src={logo} className="h-[40px] w-[40px]" alt="" />
            HERO.IO
          </NavLink>
          <p className="">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
        </div>
        <div className=" flex flex-col gap-2.5">
          <h1 className="font-bold">Company</h1>
          <p className="">About Us</p>
          <p className="">Our Mission</p>
        </div>
        <div className=" flex flex-col gap-2.5">
          <h1 className="font-bold">Services</h1>
          <p className="">Products </p>
          <p className="">Customer Stories</p>
          <p className="">Download Apps</p>
        </div>
        <div className=" flex flex-col gap-2.5">
          <h1 className="font-bold">Information </h1>
          <p className="">Privacy Policy </p>
          <p className="">Terms & Conditions</p>
          <p className=""> Join Us</p>
        </div>
        <div className=" flex flex-col gap-2.5">
          <h1 className="font-bold">Social Links</h1>
          <div className="flex gap-2">
            <img src={sllogo3} className="h-5 w-5" alt="" />

            <img src={sllogo1} className="h-5 w-5" alt="" />

            <img src={sllogo2} className="h-5 w-5" alt="" />

            <img src={sllogo4} className="h-5 w-5" alt="" />
          </div>
        </div>
      </div>
      <div className="p-8  text-white text-center">
        © 2025. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
