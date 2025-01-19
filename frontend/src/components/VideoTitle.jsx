import React from "react";
import { IoIosPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="aspect-video absolute text-[#eee] pt-[10%] p-12">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="w-1/3 mt-4">{overview}</p>
      <div className="mt-8 flex gap-6">
        <button className="flex items-center px-5 py-1 text-lg bg-white text-black rounded-lg hover:bg-opacity-80">
          <IoIosPlay size="24px" />
          <span>Play</span>
        </button>
        <button className="flex items-center px-5 py-1 text-lg bg-gray-500 text-black rounded-lg hover:bg-opacity-50">
          <IoIosInformationCircleOutline size="24px" />
          <span>Watch More</span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
