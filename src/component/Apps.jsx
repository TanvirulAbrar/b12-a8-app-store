import React, { Suspense, useState } from "react";

import { NavLink, useLoaderData } from "react-router";
import Card from "./Card";
const Apps = () => {
  const data = useLoaderData();
  const [filterdata, setfilterdata] = useState(data);
  const [ispending, setispending] = useState(false);

  const findWithWord = (a) => {
    setispending(true);

    setTimeout(() => {
      const mdata = data.filter((item) =>
        item.title.toLowerCase().includes(a.toLowerCase())
      );
      setfilterdata(mdata);
      setispending(false);
    }, 200);
  };

  return (
    <div className="text-center  pb-10 bg-[#f4f4f4]">
      <h1 className="text-[33px] font-semibold">Our All Applications</h1>
      <p className="text-[#696969] mb-5">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="min-md:flex justify-between max-w-[1050px] mx-auto px-4 mb-4 items-center">
        <div className="">({filterdata.length}) Apps Found</div>
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
          <input
            type="search"
            onChange={(e) => findWithWord(e.target.value.trim())}
            className="grow"
            placeholder="Search Apps"
          />
        </label>
      </div>
      {ispending && (
        <span className="loading loading-spinner text-primary"></span>
      )}
      <div className="grid gap-5 items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-fit mx-auto">
        {/* card */}

        {filterdata.map((data, index) => (
          <Card key={index} data={data}></Card>
        ))}
      </div>
      {/* ooop */}
      <div
        className={`text-center  my-10 ${
          filterdata.length != 0 ? "hidden" : ""
        }`}
      >
        <h1 className="text-[33px] font-semibold">OPPS!! APP NOT FOUND </h1>
        <p className="text-[#696969] mb-5">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </div>
    </div>
  );
};

export default Apps;
