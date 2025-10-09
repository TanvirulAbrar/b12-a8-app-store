import React from "react";
import hero from "../assets/hero.png";
import playsore from "../assets/Group.png";
import appstore from "../assets/fi_5977575.png";
import { NavLink, useLoaderData } from "react-router";
import Card from "./Card";

const Home = () => {
  const data = useLoaderData();
  return (
    <div className="text-center bg-[#f4f4f4]">
      <div className="text-center ">
        <div className="font-bold text-[50px]  py-[80px]">
          <h1>We Build</h1>
          <h1>
            <span className="text-[#632EE3]">Productive</span> Apps
          </h1>
        </div>
        <p className="text-[#627382] pb-[40px] px-[5%]">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className=" h-[50] mx-auto mb-8">
          <button className="btn rounded-xl border-1 border-[#a3a3a3] ">
            <img src={playsore} alt="" />
            Google Play
          </button>
          <button className="btn ml-8 rounded-xl border-1 border-[#a3a3a3] ">
            <img src={appstore} alt="" />
            App Store
          </button>
        </div>
        <img className="mx-auto" src={hero} alt="" />
      </div>
      {/* Trusted */}
      <div className=" bg-linear-to-r from-[#4922a3] to-[#9F62F2] text-white h-fit py-10">
        <h1 className="text-[33px] font-bold mb-10">
          Trusted by Millions, Built for You
        </h1>
        <div
          className="flex justify-center gap-10 max-sm:flex-col
        "
        >
          <div className="">
            {" "}
            <p className="text-[10px]">Total Downloads</p>
            <h1 className="text-[44px] font-bold">29.6M </h1>
            <p className="text-[10px]">21% more than last month</p>
          </div>
          <div className="">
            <p className="text-[10px]">Total Reviews</p>
            <h1 className="text-[44px] font-bold">906K </h1>
            <p className="text-[10px]">40% more than last month</p>
          </div>

          <div className="">
            <p className="text-[10px]">Active Apps</p>
            <h1 className="text-[44px] font-bold">132+ </h1>
            <p className="text-[10px]"> 31 more will Launch</p>
          </div>
        </div>
      </div>
      {/* tranding apps */}
      <div className="text-center  my-10 ">
        <h1 className="text-[33px] font-semibold">Trending Apps</h1>
        <p className="text-[#696969] mb-5">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid gap-5 items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit mx-auto">
          {/* card */}
          {data
            .filter((app) => app.id >= 10)
            .map((data, index) => (
              <Card key={index} data={data}></Card>
            ))}
        </div>
        <NavLink
          to={"/apps"}
          className="btn mt-5 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
        >
          Show All
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
