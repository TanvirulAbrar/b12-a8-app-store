import { Github } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";

const Navbar = () => {
  const activeClass = `underline decoration-[#632EE3] text-[#632EE3]`;

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost min-md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? activeClass : "")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? activeClass : "")}
                to={"/apps"}
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? activeClass : "")}
                to={"/installation"}
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink className="text-[#632EE3] btn btn-ghost text-xl" to={"/"}>
          <img src={logo} className="h-[40px] w-[40px]" alt="" />
          HERO.IO
        </NavLink>
      </div>
      <div className="navbar-center hidden min-md:flex font-semibold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeClass : "")}
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeClass : "")}
              to={"/apps"}
            >
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeClass : "")}
              to={"/installation"}
            >
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        <a
          href="https://github.com/TanvirulAbrar/"
          className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          <Github></Github>
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;
