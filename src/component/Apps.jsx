import React from "react";

import { NavLink, useLoaderData } from "react-router";
import Card from "./Card";
const Apps = () => {
  const data = useLoaderData();
  return (
    <div className="text-center  my-10 bg-[#f4f4f4]">
      <h1 className="text-[33px] font-semibold">Our All Applications</h1>
      <p className="text-[#696969] mb-5">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between mx-48 mb-4 items-center">
        <div className="">({data.length}) Apps Found</div>
        <label className="input w-fit">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" className="grow" placeholder="Search Apps" />
        </label>
      </div>
      <div className="grid gap-5 items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit mx-auto">
        {/* card */}
        {data.map((data, index) => (
          <Card key={index} data={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default Apps;
