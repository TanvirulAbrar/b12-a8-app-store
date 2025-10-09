import React from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";

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
      <Footer></Footer>
    </div>
  );
};

export default Root;
