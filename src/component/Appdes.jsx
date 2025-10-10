import React, { useState } from "react";
import { Form, useLoaderData, useParams } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { NavLink } from "react-router";
import imge from "../assets/App_Error.png";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Chart from "./Chart";
import { Download, Star } from "lucide-react";
import download from "../assets/fi_18110198.png";
import star from "../assets/fi_1828884.png";
import like from "../assets/fi_17817684.png";
import saveandload from "./saveandload";

const Appdes = () => {
  const { id } = useParams();
  const datas = useLoaderData();
  const data = datas.find((data) => data.id == id);

  const loads = saveandload.loadins(2);
  const [isn, setisn] = useState(loads.includes(Number(id)));

  return (
    <div className="">
      {/* oppos */}
      <div className={`${data ? "hidden" : ""}`}>
        <img className={`mx-auto mt-10`} src={imge} alt="" />

        <div className="text-center  my-10 ">
          <h1 className="text-[33px] font-semibold">OPPS!! APP NOT FOUND </h1>
          <p className="text-[#696969] mb-5">
            The App you are requesting is not found on our system. please try
            another apps
          </p>

          <NavLink
            to={"/apps"}
            className="btn mt-5 text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"
          >
            Go Back
          </NavLink>
        </div>
      </div>
      {/* details */}
      {data && (
        <div className="flex max-w-[1150px] max-sm:flex-col p-10 gap-10 mx-auto">
          <div className=" h-[243px] w-[243px] ">
            {" "}
            <img src={data?.image} className="h-[243px] w-[243px]" alt="" />
          </div>
          <div className="">
            <h1 className="text-[32px] font-bold "> {data.title}</h1>{" "}
            <p className="mb-[40px] ">
              Developed by{" "}
              <span className="text-[#632EE3]">{data?.companyName}</span>
            </p>
            <div className="flex gap-5">
              <div className="">
                <img src={download} className="h-[27px] w-[27px] " alt="" />
                <h1 className="">Downloads</h1>
                <p className="text-[32px] font-bold">{data.downloads}</p>
              </div>
              <div className="">
                <img src={star} className="h-[27px] w-[27px] " alt="" />

                <h1 className="">Average Ratings</h1>
                <p className="text-[32px] font-bold">{data.ratingAvg}</p>
              </div>
              <div className="">
                <img src={like} className="h-[27px] w-[27px] " alt="" />

                <h1 className="">Total Reviews</h1>
                <p className="text-[32px] font-bold">{data.reviews}</p>
              </div>
            </div>
            <button
              onClick={() => {
                !isn && saveandload.saveins(data.id);
                !isn && setisn(true);
                !isn && toast("Installed");
              }}
              className="btn btn-success text-white font-semibold"
            >
              {isn ? `Installed` : `Install Now (${data.size}MB)`}
            </button>
          </div>
        </div>
      )}
      <div
        className="w-full h-fit
      "
      >
        <div className="font-bold ml-20">Ratings</div>
        <Chart data={data.ratings} dataKey="count" color="#FF8811" />
      </div>
      <div
        className=" h-fit p-5 mx-auto max-w-[1300px]
      "
      >
        <div className="font-bold ">Description</div>
        <div className="">{data.description}</div>
      </div>
    </div>
  );
};

export default Appdes;
