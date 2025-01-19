import React from "react";
import { FaAngleLeft, FaAngleRight, FaHome } from "react-icons/fa";
import apartment from "../assets/apartment.jpg";
import duplex from "../assets/duplex house.jpg";
import office from "../assets/office.jpg";
export default function Category() {
  return (
    <div>
      <span className="text-[20px]  border-b-4 pb-2  border-b-orange-600 font-helvetica font-bold text-[#010F58]">
        Our Services
      </span>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-[32px] md:text-[48] font-helvetica font-bold text-[#010F58]">
          Our Main Focus
        </h1>
        <div className="flex gap-5">
          <FaAngleLeft className="bg-[#FF5017] text-white text-[10px]  w-6 h-6 rounded-full hidden sm:inline-block"></FaAngleLeft>
          <FaAngleRight className="bg-[#FF5017] text-white text-[10px]  w-6 h-6 rounded-full hidden sm:inline-block"></FaAngleRight>
        </div>
      </div>
      <div class="my-10  ">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div class=" ">
            <img
              src={apartment}
              alt="Image"
              class="w-full object-contain rounded-t-sm "
            />
            <div class="flex flex-col items-center">
              <div className="flex gap-4 my-5">
                <FaHome className="text-[#FF5017] w-10 h-10 p-2 rounded-lg border-2 border-red-400"></FaHome>
                <span className="text-[20px]   font-helvetica font-bold text-[#010F58]">
                  Buy A Property
                </span>
              </div>
              <p class="text-sm text-gray-600 text-center">
                lorAbout Us Lorem ipsum dolor sit amet consectetur adipisin cing
                elit sed do eiusmod tempor incididunt utlrul labore et dolore
                magna aliqua.{" "}
              </p>
              <button className="p-2 my-7 border-2 font-semibold text-red-400 border-red-400 rounded-sm">
                Find A Home
              </button>
            </div>
          </div>
          
          <div class=" ">
            <img
              src={apartment}
              alt="Image"
              class="w-full object-contain rounded-t-sm "
            />
            <div class="flex flex-col items-center">
              <div className="flex gap-4 my-5">
                <FaHome className="text-[#FF5017] w-10 h-10 p-2 rounded-lg border-2 border-red-400"></FaHome>
                <span className="text-[20px]   font-helvetica font-bold text-[#010F58]">
                  Buy A Property
                </span>
              </div>
              <p class="text-sm text-gray-600 text-center">
                lorAbout Us Lorem ipsum dolor sit amet consectetur adipisin cing
                elit sed do eiusmod tempor incididunt utlrul labore et dolore
                magna aliqua.{" "}
              </p>
              <button className="p-2 my-7 border-2 font-semibold text-red-400 border-red-400 rounded-sm">
                Find A Home
              </button>
            </div>
          </div>
          
          <div class=" ">
            <img
              src={apartment}
              alt="Image"
              class="w-full object-contain rounded-t-sm "
            />
            <div class="flex flex-col items-center">
              <div className="flex gap-4 my-5">
                <FaHome className="text-[#FF5017] w-10 h-10 p-2 rounded-lg border-2 border-red-400"></FaHome>
                <span className="text-[20px]   font-helvetica font-bold text-[#010F58]">
                  Buy A Property
                </span>
              </div>
              <p class="text-sm text-gray-600 text-center">
                lorAbout Us Lorem ipsum dolor sit amet consectetur adipisin cing
                elit sed do eiusmod tempor incididunt utlrul labore et dolore
                magna aliqua.{" "}
              </p>
              <button className="p-2 my-7 border-2 font-semibold text-red-400 border-red-400 rounded-sm">
                Find A Home
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
