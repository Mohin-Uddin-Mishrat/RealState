import React from "react";
import tutorial from "../assets/pexels-falling4utah-1080721.jpg";
export default function () {
  return (
    <div className="relative mb-32 ">
      <img
        src={tutorial}
        className="h-[70vh] w-screen object-cover block"
        alt="Tutorial"
      />
      <div className="absolute left-1/2  -translate-x-1/2 -bottom-[10px] z-50  bg-[#F8FAFA] h-32 p-5">
        <div className="flex justify-between gap-5">
          <div className="flex flex-col items-center mb-5 ">
            <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center mb-5 font-semibold border-2 border-[#010F58]">
              <span className="text-[20px]   font-helvetica font-bold text-red-400  ">
                98700+
              </span>
            </div>
            <span className="text-[13px]   font-helvetica font-bold text-[#010F58]">
              Properties Listed
            </span>
          </div>
          <div className="flex flex-col items-center mb-5">
            <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center mb-5 font-semibold border-2 border-[#010F58]">
              <span className="text-[20px]   font-helvetica font-bold text-red-400  ">
                98700+
              </span>
            </div>
            <span className="text-[13px]   font-helvetica font-bold text-[#010F58]">
              Properties Sold
            </span>
          </div>
          <div className="flex flex-col items-center mb-5">
            <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center mb-5 font-semibold border-2 border-[#010F58]">
              <span className="text-[20px]   font-helvetica font-bold text-red-400  ">
                98700+
              </span>
            </div>
            <span className="text-[13px]   font-helvetica font-bold text-[#010F58]">
              Satisfied Client
            </span>
          </div>
          <div className="flex flex-col items-center mb-5">
            <div className="md:w-32 md:h-32 w-20 h-20 rounded-full  flex items-center justify-center mb-5 font-semibold border-2 border-[#010F58]">
              <span className="text-[20px]   font-helvetica font-bold text-red-400  ">
                98700+
              </span>
            </div>
            <span className="text-[13px]   font-helvetica font-bold text-[#010F58]">
              Realtor Awards
            </span>
          </div>
          
        </div>
      </div>
      <div className="absolute inset-0 bg-slate-500 opacity-55"></div>
    </div>
  );
}
