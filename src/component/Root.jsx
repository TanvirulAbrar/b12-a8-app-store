import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "./Footer";

const Root = () => {
  const navigation = useNavigation();
  const isPending = Boolean(navigation.location);

  return (
    <div>
      <Navbar></Navbar>
      <div className="  relative w-fit m-auto ">
        {" "}
        {isPending && (
          <span className="loading loading-spinner text-primary"></span>
        )}
      </div>
      <Outlet></Outlet>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
};

export default Root;
