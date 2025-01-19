import React from "react";
import { FaAngleLeft, FaAngleRight, FaHome, FaStar } from "react-icons/fa";
import city1 from "../assets/city1.jpg";
import city2 from "../assets/city2.jpg";
import city3 from "../assets/city3.jpg";
export default function Cities() {
  return (
    <div>
      <div className="text-center  ">
        <button className="text-white p-[10px] bg-[#010F58] my-2">
          View All Properties
        </button>
      </div>
      <span className="text-[20px]  border-b-4 pb-2  border-b-orange-600 font-helvetica font-bold text-[#010F58]">
        Find Properties
      </span>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-[32px] md:text-[48] font-helvetica font-bold text-[#010F58]">
          Explore Our Cities
        </h1>
        <div className="flex gap-5">
          <FaAngleLeft className="bg-[#FF5017] text-white text-[10px]  w-6 h-6 rounded-full hidden sm:inline-block"></FaAngleLeft>
          <FaAngleRight className="bg-[#FF5017] text-white text-[10px]  w-6 h-6 rounded-full hidden sm:inline-block"></FaAngleRight>
        </div>
      </div>
      <div class="my-10  ">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

          <div className="relative group">
            <img
              src={city1}
              alt="Image"
              className="w-full object-contain rounded-t-sm transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out"></div>
            <button className="text-white font-semibold bg-red-400 py-1 px-3 rounded-lg group-hover:bg-opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   transition-all duration-500 ease-in-out">
              Bankok
            </button>
            <div className="flex justify-between my-5">
              <div>
                <h1 className="text-red-400 text-[16px] font-helvetica font-bold">
                  Fortune Condo Town
                </h1>
                <div className="flex items-center">
                  <FaStar className="text-[#010F58]" />
                  <FaStar className="text-[#010F58]" />
                  <FaStar className="text-[#010F58]" />
                  <FaStar className="text-[#010F58]" />
                  <FaStar className=""></FaStar>
                  4.5
                </div>
              </div>
              <button className="px-2 py-1 text-white bg-[#010F58]">
                240/Sqft
              </button>
            </div>

          </div>
          <div className="relative group">
            <img
              src={city2}
              alt='city2'
              className="w-full object-contain rounded-t-sm transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out"></div>
            <button className="text-white font-semibold bg-red-400 py-1 px-3 rounded-lg group-hover:bg-opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   transition-all duration-500 ease-in-out">
              Sydney
            </button>
            <div className="flex justify-between my-5">
              <div>
                <h1 className="text-red-400 text-[16px] font-helvetica font-bold">
                  Farmhouse For buy
                </h1>
                <div className="flex items-center">
                  <FaStar className="text-[#010F58]" />
                  <FaStar className="text-[#010F58]" />
                  <FaStar className="text-[#010F58]" />
                  <FaStar className="text-[#010F58]" />
                  <FaStar className=""></FaStar>
                  4.5
                </div>
              </div>
              <button className="px-2 py-1 text-white bg-[#010F58]">
                240/Sqft
              </button>
            </div>

          </div>
          <div className="relative group">
            <img
              src={city1}
              alt="Image"
              className="w-full object-contain rounded-t-sm transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out"></div>
            <button className="text-white font-semibold bg-red-400 py-1 px-3 rounded-lg group-hover:bg-opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2   transition-all duration-500 ease-in-out">
              Toronto
            </button>
            <div className="flex justify-between my-5">
              <div>
                <h1 className="text-red-400 text-[16px] font-helvetica font-bold">
                  Appartment For Sale
                </h1>
                <div className="flex items-center">
                  <FaStar className="text-[#010F58]" />
                  <FaStar className="text-[#010F58]" />
                  <FaStar className="text-[#010F58]" />
                  <FaStar className="text-[#010F58]" />
                  <FaStar className=""></FaStar>
                  4.5
                </div>
              </div>
              <button className="px-2 py-1 text-white bg-[#010F58]">
                240/Sqft
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
