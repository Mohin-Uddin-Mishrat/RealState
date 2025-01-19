import React from "react";
import { FaAngleLeft, FaAngleRight, FaArrowAltCircleRight, FaBath, FaBed, FaHome, FaParking } from "react-icons/fa";
import apartment from "../assets/apartment.jpg";
import space from "../assets/offfice space.jpg";
import  luxery from "../assets/luxery.jpg";
import  modern from "../assets/modern.jpg";
import  working from "../assets/working.jpg";
import { MdDetails } from "react-icons/md";
export default function Property() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-3">
        <span className="text-[20px]  border-b-4 pb-2  border-b-orange-600 font-helvetica font-bold text-[#010F58]">
          Our Property
        </span>
        <h1 className="text-[32px] md:text-[48] font-helvetica font-bold text-[#010F58]">
          Our Explore Properties
        </h1>
      </div>
      <div class="my-10  ">
        <div class="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3  gap-4">
          <div class="hover:bg-[#010F58] hover:text-white p-2 rounded-lg ">
            <img
              src={apartment}
              alt="Image"
              class="w-full object-contain rounded-t-lg "
            />
            <div class="">
              <div className="flex  justify-between my-3">
                <span className="text-[16px] hover:text-white   font-helvetica font-bold text-red-500">
                  Ready Resort For Sell
                </span>
                <span className="text-white bg-red-400 p-1 text-[11px] font-bold rounded-sm">252500$</span>
              </div>
              <p className="">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
              <div className="flex gap-2 justify-between my-2 py-2 border-y border-y-slate-400">
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBed className="w-5 h-5 rounded-full hover:text-red-400 hover:bg-white text-white p-1 bg-red-400"></FaBed> Beds : Na</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBath className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaBath> Bath : 10</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaParking className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaParking> Parking : 3</span>
              </div>
              <div className="font-semibold hover:text-white text-red-400 flex  justify-between items-center "><span>View Details</span> <FaArrowAltCircleRight></FaArrowAltCircleRight></div>
            </div>
          </div>
          <div class="hover:bg-[#010F58] hover:text-white p-2 rounded-lg ">
            <img
              src={working}
              alt="Image"
              class="w-full object-contain rounded-t-lg "
            />
            <div class="">
              <div className="flex  justify-between my-3">
                <span className="text-[16px] hover:text-white   font-helvetica font-bold text-red-500">
                  working sPACE
                </span>
                <span className="text-white bg-red-400 p-1 text-[11px] font-bold rounded-sm">252500$</span>
              </div>
              <p className="">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
              <div className="flex gap-2 justify-between my-2 py-2 border-y border-y-slate-400">
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBed className="w-5 h-5 rounded-full hover:text-red-400 hover:bg-white text-white p-1 bg-red-400"></FaBed> Beds : Na</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBath className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaBath> Bath : 10</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaParking className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaParking> Parking : 3</span>
              </div>
              <div className="font-semibold hover:text-white text-red-400 flex  justify-between items-center "><span>View Details</span> <FaArrowAltCircleRight></FaArrowAltCircleRight></div>
            </div>
          </div>
          <div class="hover:bg-[#010F58] hover:text-white p-2 rounded-lg ">
            <img
              src={apartment}
              alt="Image"
              class="w-full object-contain rounded-t-lg "
            />
            <div class="">
              <div className="flex  justify-between my-3">
                <span className="text-[16px] hover:text-white   font-helvetica font-bold text-red-500">
                  Ready Resort For Sell
                </span>
                <span className="text-white bg-red-400 p-1 text-[11px] font-bold rounded-sm">252500$</span>
              </div>
              <p className="">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
              <div className="flex gap-2 justify-between my-2 py-2 border-y border-y-slate-400">
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBed className="w-5 h-5 rounded-full hover:text-red-400 hover:bg-white text-white p-1 bg-red-400"></FaBed> Beds : Na</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBath className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaBath> Bath : 10</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaParking className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaParking> Parking : 3</span>
              </div>
              <div className="font-semibold hover:text-white text-red-400 flex  justify-between items-center "><span>View Details</span> <FaArrowAltCircleRight></FaArrowAltCircleRight></div>
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
                <span className="text-[16px] hover:text-white   font-helvetica font-bold text-red-500">
                  Moder Condo
                </span>
                <span className="text-white bg-red-400 p-1 text-[11px] font-bold rounded-sm">252500$</span>
              </div>
              <p className="">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
              <div className="flex gap-2 justify-between my-2 py-2 border-y border-y-slate-400">
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBed className="w-5 h-5 rounded-full hover:text-red-400 hover:bg-white text-white p-1 bg-red-400"></FaBed> Beds : Na</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBath className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaBath> Bath : 10</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaParking className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaParking> Parking : 3</span>
              </div>
              <div className="font-semibold hover:text-white text-red-400 flex  justify-between items-center "><span>View Details</span> <FaArrowAltCircleRight></FaArrowAltCircleRight></div>
            </div>
          </div>
          <div class="hover:bg-[#010F58] hover:text-white p-2 rounded-lg ">
            <img
              src={space}
              alt="Image"
              class="w-full object-contain rounded-t-lg "
            />
            <div class="">
              <div className="flex  justify-between my-3">
                <span className="text-[16px] hover:text-white   font-helvetica font-bold text-red-500">
                  Office space
                </span>
                <span className="text-white bg-red-400 p-1 text-[11px] font-bold rounded-sm">252500$</span>
              </div>
              <p className="">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
              <div className="flex gap-2 justify-between my-2 py-2 border-y border-y-slate-400">
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBed className="w-5 h-5 rounded-full hover:text-red-400 hover:bg-white text-white p-1 bg-red-400"></FaBed> Beds : Na</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBath className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaBath> Bath : 10</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaParking className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaParking> Parking : 3</span>
              </div>
              <div className="font-semibold hover:text-white text-red-400 flex  justify-between items-center "><span>View Details</span> <FaArrowAltCircleRight></FaArrowAltCircleRight></div>
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
                <span className="text-[16px] hover:text-white   font-helvetica font-bold text-red-500">
                  Luxery condo
                </span>
                <span className="text-white bg-red-400 p-1 text-[11px] font-bold rounded-sm">252500$</span>
              </div>
              <p className="">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
              <div className="flex gap-2 justify-between my-2 py-2 border-y border-y-slate-400">
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBed className="w-5 h-5 rounded-full hover:text-red-400 hover:bg-white text-white p-1 bg-red-400"></FaBed> Beds : Na</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaBath className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaBath> Bath : 10</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold "><FaParking className="w-5 h-5 rounded-full text-white p-1 bg-red-400"></FaParking> Parking : 3</span>
              </div>
              <div className="font-semibold hover:text-white text-red-400 flex  justify-between items-center "><span>View Details</span> <FaArrowAltCircleRight></FaArrowAltCircleRight></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
