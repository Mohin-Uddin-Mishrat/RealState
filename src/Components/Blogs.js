import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowAltCircleRight,
  FaBath,
  FaBed,
  FaCalendar,
  FaEye,
  FaHome,
  FaParking,
  FaPlusCircle,
  FaTimes,
  FaTimesCircle,
} from "react-icons/fa";
import duplex from "../assets/duplex house.jpg";
import modern from "../assets/modern.jpg";
import luxery from "../assets/luxery.jpg";
import men1 from "../assets/man1.jpg";
import { MdDetails } from "react-icons/md";
import { FaMessage, FaStopwatch } from "react-icons/fa6";
export default function Blogs() {
  return (
    <div>
      <span className="text-[20px]  border-b-4 pb-2  border-b-orange-600 font-helvetica font-bold text-[#010F58]">
        Blog $ News
      </span>
      <div className="flex justify-between items-center my-3">
        <h1 className="text-[32px] md:text-[48] font-helvetica font-bold text-[#010F58]">
          Our Lates Blog & News
        </h1>
        <div className="flex gap-5">
          <FaAngleLeft className="bg-[#FF5017] text-white text-[10px]  w-6 h-6 rounded-full hidden sm:inline-block"></FaAngleLeft>
          <FaAngleRight className="bg-[#FF5017] text-white text-[10px]  w-6 h-6 rounded-full hidden sm:inline-block"></FaAngleRight>
        </div>
      </div>
      <div class="my-10  ">
        <div class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-4">
          <div class="hover:bg-[#010F58] hover:text-white p-2 rounded-lg ">
            <img
              src={duplex}
              alt="Image"
              class="w-full object-contain rounded-t-lg "
            />
            <div class="">
              <div className="flex  justify-between my-3">
                <span className="text-[16px]   leading-tight hover:text-white   font-helvetica font-bold text-red-500">
                  7 Home Trends That Will Shape Your House
                </span>
              </div>
              <div className="flex gap-2 justify-between my-2 py-2 ">
                <span className="flex items-center gap-1 text-[12px] font-semibold ">
                  <FaCalendar className=" text-[20px] text-yellow-400"></FaCalendar>{" "}
                  05-Dec-2022
                </span>
                <span className="flex items-center gap-1 text-[12px] font-semibold ">
                  <FaEye className="text-[20px] text-yellow-400"></FaEye> 1000
                </span>
                <span className="flex items-center gap-1 text-[12px] font-semibold ">
                  <FaMessage className="text-[20px] text-yellow-400"></FaMessage>{" "}
                  12 Comments
                </span>
              </div>
              <p className="">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,{" "}
              </p>
              <div className="flex gap-2 justify-between my-2 py-2 border-y border-y-slate-400">
                <div className="flex items-center justify-center space-x-2">
                  <img className="w-7 h-7 rounded-full" src={men1}></img>
                  <span className="text-[11px]">David Smith</span>
                </div>
                <div className="flex space-x-2 items-center justify-center">
                  <FaStopwatch></FaStopwatch>
                  <span>2 Miutes ago</span>
                </div>
              </div>
              <div className="font-semibold hover:text-white text-red-400 flex  justify-between items-center ">
                <span>Read More</span> <FaPlusCircle></FaPlusCircle>
              </div>
            </div>
          </div>
          <div class="hover:bg-[#010F58] hover:text-white p-2 rounded-lg ">
            <img
              src={modern}
              alt="Image"
              class="w-full object-contain rounded-t-lg "
            />
            <div class="">
              <div className="flex  justify-between my-3">
                <span className="text-[16px]   leading-tight hover:text-white   font-helvetica font-bold text-red-500">
                  Recent Commercial realEsate Transaction
                </span>
              </div>
              <div className="flex gap-2 justify-between my-2 py-2 ">
                <span className="flex items-center gap-1 text-[12px] font-semibold ">
                  <FaCalendar className=" text-[20px] text-yellow-400"></FaCalendar>{" "}
                  05-Dec-2022
                </span>
                <span className="flex items-center gap-1 text-[12px] font-semibold ">
                  <FaEye className="text-[20px] text-yellow-400"></FaEye> 1000
                </span>
                <span className="flex items-center gap-1 text-[12px] font-semibold ">
                  <FaMessage className="text-[20px] text-yellow-400"></FaMessage>{" "}
                  12 Comments
                </span>
              </div>
              <p className="">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,{" "}
              </p>
              <div className="flex gap-2 justify-between my-2 py-2 border-y border-y-slate-400">
                <div className="flex items-center justify-center space-x-2">
                  <img className="w-7 h-7 rounded-full" src={men1}></img>
                  <span className="text-[11px]">David Smith</span>
                </div>
                <div className="flex space-x-2 items-center justify-center">
                  <FaStopwatch></FaStopwatch>
                  <span>2 Miutes ago</span>
                </div>
              </div>
              <div className="font-semibold hover:text-white text-red-400 flex  justify-between items-center ">
                <span>Read More</span> <FaPlusCircle></FaPlusCircle>
              </div>
            </div>
          </div>
          <div class="hover:bg-[#010F58] hover:text-white p-2 rounded-lg ">
            <img
              src={luxery}
              alt="Image"
              class="w-full object-contain rounded-t-lg "
            />
            <div class="">
              <div className="flex  justify-between my-3">
                <span className="text-[16px]   leading-tight hover:text-white   font-helvetica font-bold text-red-500">
                  Renovating a living room? Experts Share their secrets
                </span>
              </div>
              <div className="flex gap-2 justify-between my-2 py-2 ">
                <span className="flex items-center gap-1 text-[12px] font-semibold ">
                  <FaCalendar className=" text-[20px] text-yellow-400"></FaCalendar>{" "}
                  05-Dec-2022
                </span>
                <span className="flex items-center gap-1 text-[12px] font-semibold ">
                  <FaEye className="text-[20px] text-yellow-400"></FaEye> 1000
                </span>
                <span className="flex items-center gap-1 text-[12px] font-semibold ">
                  <FaMessage className="text-[20px] text-yellow-400"></FaMessage>{" "}
                  12 Comments
                </span>
              </div>
              <p className="">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,{" "}
              </p>
              <div className="flex gap-2 justify-between my-2 py-2 border-y border-y-slate-400">
                <div className="flex items-center justify-center space-x-2">
                  <img className="w-7 h-7 rounded-full" src={men1}></img>
                  <span className="text-[11px]">David Smith</span>
                </div>
                <div className="flex space-x-2 items-center justify-center">
                  <FaStopwatch></FaStopwatch>
                  <span>2 Miutes ago</span>
                </div>
              </div>
              <div className="font-semibold hover:text-white text-red-400 flex  justify-between items-center ">
                <span>Read More</span> <FaPlusCircle></FaPlusCircle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
