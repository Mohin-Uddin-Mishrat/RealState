import React from 'react'
import {  FaAngleLeft, FaAngleRight } from "react-icons/fa";
import apartment from "../assets/apartment.jpg";
import duplex from "../assets/duplex house.jpg";
import office from "../assets/office.jpg";
export default function Service() {
  return (
    <div>
         <div className="flex justify-between items-center">
          <h1 className="text-[32px] md:text-[48] font-helvetica font-bold text-[#010F58]">
            Brows By Categories
          </h1>
          <div className='flex gap-5'>
            <FaAngleLeft className='bg-[#FF5017] text-white text-[10px]  w-6 h-6 rounded-full hidden sm:inline-block'></FaAngleLeft>
            <FaAngleRight className='bg-[#FF5017] text-white text-[10px]  w-6 h-6 rounded-full hidden sm:inline-block'></FaAngleRight>
          </div>
        </div>
        <div class="my-10  ">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

            <div class="   flex items-center  ">
              <img
                src={apartment}
                alt="Image"
                class="w-36 sm:w-32 h-48  object-cover "
              />
              <div class="ml-4">
                <h3 class="text-lg font-semibold">Appartment</h3>
                <p class="text-sm text-gray-600">
                  This is a short description.
                </p>
              </div>
            </div>
            <div class="   flex items-center  ">
              <img
                src={office}
                alt="Image"
                class="w-36 sm:w-32 h-48  object-cover "
              />
              <div class="ml-4">
                <h3 class="text-lg font-semibold">Duplex House</h3>
                <p class="text-sm text-gray-600">
                  This is a short description.
                </p>
              </div>
            </div>
            <div class="   flex items-center  ">
              <img
                src={duplex}
                alt="Image"
                class="w-36 sm:w-32 h-48  object-cover "
              />
              <div class="ml-4">
                <h3 class="text-lg font-semibold">Office</h3>
                <p class="text-sm text-gray-600">
                  This is a short description.
                </p>
              </div>
            </div>

          </div>
        </div>
    </div>
  )
}
