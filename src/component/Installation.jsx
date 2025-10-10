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

  return (
    <div>
      <div className="text-center p-9">
        <h1 className="text-[33px] font-semibold">Your Installed Apps</h1>
        <p className="text-[#696969] mb-5">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex p-9">
        <div className="">1 Apps Found</div>
        <div className=""></div>
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
