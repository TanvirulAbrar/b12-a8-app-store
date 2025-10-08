import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Root = () => {
  const notify = () => toast("Wow so easy!");
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
      <div className="">add footer</div>
    </div>
  );
};

export default Root;
