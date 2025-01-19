import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaSnapchat,
  FaStar,
} from "react-icons/fa";
import agents1 from "../assets/agent1.jpg";
import agents2 from "../assets/agent3.jpg";
import agents3 from "../assets/pexels-italo-melo-881954-2379004.jpg";
export default function Agents() {
  return (
    <div className="my-">
      <div className="flex flex-col justify-center items-center  ">
        <button className="text-white p-[10px] bg-[#010F58] my-2">
          View All Properties
        </button>
        <h1 className="text-[32px] md:text-[48] font-helvetica font-bold text-[#010F58]">
          Meet Our Agents
        </h1>
      </div>

      <div class="my-10  ">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
         
          <div className="relative group">
            <img
              src={agents3}
              alt="Image"
              className="w-full h-[70vh] md:object-cover object-contain rounded-t-sm transition duration-500 ease-in-out group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out"></div>

            <div className="absolute inset-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <span className="text-white font-semibold text-lg mb-4">
                Mathy Josep
              </span>

              <div className="flex gap-4 text-white">
                <FaLinkedin className="text-2xl" />
                <FaFacebook className="text-2xl" />
                <FaInstagram className="text-2xl" />
                <FaSnapchat className="text-2xl" />
              </div>
            </div>

          </div>
          <div className="relative group">
            <img
              src={agents1}
              alt="Image"
              className="w-full h-[70vh] md:object-cover object-contain rounded-t-sm transition duration-500 ease-in-out group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out"></div>

            <div className="absolute inset-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <span className="text-white font-semibold text-lg mb-4">
                Lasith Malinga
              </span>

              <div className="flex gap-4 text-white">
                <FaLinkedin className="text-2xl" />
                <FaFacebook className="text-2xl" />
                <FaInstagram className="text-2xl" />
                <FaSnapchat className="text-2xl" />
              </div>
            </div>

          </div>
          <div className="relative group">
            <img
              src={agents2}
              alt="Image"
              className="w-full h-[70vh] md:object-cover object-contain rounded-t-sm transition duration-500 ease-in-out group-hover:blur-sm"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-500 ease-in-out"></div>

            <div className="absolute inset-0 flex justify-center items-center flex-col opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
              <span className="text-white font-semibold text-lg mb-4">
                Mohin Uddin
              </span>

              <div className="flex gap-4 text-white">
                <FaLinkedin className="text-2xl" />
                <FaFacebook className="text-2xl" />
                <FaInstagram className="text-2xl" />
                <FaSnapchat className="text-2xl" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
