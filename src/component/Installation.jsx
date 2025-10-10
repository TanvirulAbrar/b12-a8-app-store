import React, { useState } from "react";
import saveandload from "./saveandload";

import { Form, useLoaderData } from "react-router";
import Cardb from "./Cardb";

const Installation = () => {
  const datas = useLoaderData();
  const [loads, setloads] = useState(saveandload.loadins(2));

  const [data, setdata] = useState(
    datas.filter((data) => loads.includes(Number(data.id)))
  );

  const unInstallhandel = (id) => {
    const dataf = data.filter((data) => data.id != id);
    saveandload.removeins(id);
    setdata([...dataf]);
    setloads(loads.filter((a) => a != id));
  };
  const [sort, setsort] = useState("");

  const handelsort = (type) => {
    if (type == "download High-Low") {
      const sortbyd = [...data].sort(
        (a, b) =>
          Number(b.downloads.replace("M", "")) -
          Number(a.downloads.replace("M", ""))
      );
      setdata(sortbyd);
    }
    if (type == "download Low-High") {
      const sortbyd = [...data].sort(
        (a, b) =>
          Number(a.downloads.replace("M", "")) -
          Number(b.downloads.replace("M", ""))
      );
      setdata(sortbyd);
    }
    if (type == "size high-low") {
      const sortbyd = [...data].sort((a, b) => Number(b.size) - Number(a.size));
      setdata(sortbyd);
    }
    if (type == "size low-high") {
      const sortbyd = [...data].sort((a, b) => Number(a.size) - Number(b.size));
      setdata(sortbyd);
    }
    setsort(type);
  };
  return (
    <div>
      <div className="text-center p-9">
        <h1 className="text-[33px] font-semibold">Your Installed Apps</h1>
        <p className="text-[#696969] mb-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex px-9 items-center justify-between">
        <div className="font-bold">({loads.length})Apps Found</div>
        <div className="">
          <details className="dropdown">
            <summary className="btn m-1">
              Sort By{" "}
              <span className="max-[350px]:hidden flex">
                {" "}
                {sort ? sort : ""}
              </span>{" "}
            </summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-fit  py-2 shadow-sm">
              <li>
                <a onClick={() => handelsort("download High-Low")}>
                  download High-Low
                </a>
              </li>
              <li>
                <a onClick={() => handelsort("download Low-High")}>
                  download Low-High
                </a>
              </li>
              <li>
                <a onClick={() => handelsort("size high-low")}>size high-low</a>
              </li>
              <li>
                <a onClick={() => handelsort("size low-high")}>size low-high</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
      <div className="p-9 flex flex-col gap-5">
        {data.map((a) => (
          <Cardb key={a.id} data={a} unInstallhandel={unInstallhandel}></Cardb>
        ))}
      </div>
    </div>
  );
};

export default Installation;
