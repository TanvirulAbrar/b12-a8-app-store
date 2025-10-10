import React from "react";
import { NavLink } from "react-router";
import imge from "../assets/App_Error.png";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Appserror = () => {
  return (
    <div>
      <img className="mx-auto" src={imge} alt="" />

      <div className="text-center  my-10 ">
        <h1 className="text-[33px] font-semibold">Oops, page not found!</h1>
        <p className="text-[#696969] mb-5">
          The page you are looking for is not available.
        </p>

        <NavLink
          to={"/apps"}
          className="btn mt-5 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Go Back
        </NavLink>
      </div>
    </div>
  );
};

export default Appserror;
