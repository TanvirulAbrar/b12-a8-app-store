import { Download, Star } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Card = ({ data }) => {
  const { title, image, downloads, ratingAvg, id } = data;
  return (
    <NavLink
      to={`/apps/${id}`}
      className="rounded-xl p-3 w-[243px] h-[302px] border border-[#00D390] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
    >
      <div className="rounded-xl w-fit h-fit bg-[#f4f4f4] overflow-hidden mx-auto mb-3">
        {" "}
        <img src={image} alt="" className="h-[200px] w-[200px]" />
      </div>
      <div className="mb-3 font-semibold">{title}</div>
      <div
        className="flex 
      justify-between w-full"
      >
        <div className="flex rounded-[4px] p-1 gap-2 bg-[#F1F5E8]   text-[#00D390]">
          <Download />
          <span>{downloads}</span>
        </div>
        <div className="flex rounded-[4px] p-1 gap-2 bg-[#FFF0E1] text-[#FF8811]">
          <Star />
          <span>{ratingAvg}</span>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
