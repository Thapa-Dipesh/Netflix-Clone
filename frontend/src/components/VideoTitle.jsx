import React from "react";
import { IoIosPlay } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = () => {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[10%] p-12">
      <h1 className="text-4xl font-bold">Movie Title</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
        alias.
      </p>
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
