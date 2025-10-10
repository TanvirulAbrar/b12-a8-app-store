import { Download, Star } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";
import { toast } from "react-toastify";

const Cardb = ({ data, unInstallhandel }) => {
  const { title, image, downloads, ratingAvg, size, id } = data;

  return (
    <div className="rounded-xl p-2 items-center max-w-[1440px] flex justify-between max-[375px]:flex-col h-fit border border-[#00D390] bg-white ">
      <div className="flex gap-2 items-center">
        <div className="rounded-xl items-center w-fit h-fit bg-[#f4f4f4] overflow-hidden mx-auto ">
          {" "}
          <img src={image} alt="" className="h-[50px] w-[50px]" />
        </div>
        <div className=" items-center  ">
          <div className="mb-0 font-semibold">{title}</div>
          <div
            className="flex 
        justify-between w-full max-[450px]:flex-col gap-3"
          >
            <div className="flex  rounded-[4px]  gap-2    text-[#00D390]">
              <Download />
              <span>{downloads}</span>
            </div>
            <div className="flex rounded-[4px]  gap-2  text-[#FF8811]">
              <Star />
              <span>{ratingAvg}</span>
            </div>
            <div className="text-[#627382]">{size}MB</div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          toast("Uninstalled");
          unInstallhandel(id);
        }}
        className="btn btn-success text-white font-semibold"
      >
        Uninstall
      </button>
    </div>
  );
};

export default Cardb;
