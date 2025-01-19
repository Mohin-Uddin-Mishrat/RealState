import { useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Navar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="hidden w-full bg-[#000033] text-white py-2 lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span className="text-sm">7124 Landmark Tower, New York</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span className="text-sm">support@yourdomain.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span className="text-sm">+61383766284</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Facebook
              size={16}
              className="cursor-pointer hover:text-gray-300"
            />
            <Instagram
              size={16}
              className="cursor-pointer hover:text-gray-300"
            />
            <Twitter size={16} className="cursor-pointer hover:text-gray-300" />
            <Linkedin
              size={16}
              className="cursor-pointer hover:text-gray-300"
            />
            <Youtube size={16} className="cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </div>

      <section className="w-[100%] p-2 sm:w-[70.87%] mx-auto">
        <div className="bg-white ">
          <div className="container mx-auto ">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <h1 className="text-[36px] font-helvetica font-bold text-[#010F58]">
                  Kavinex
                </h1>
              </div>

              <div className="hidden lg:flex items-center space-x-4">
                <a href="#" className="text-[#FF4D1C] font-medium">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FF4D1C]">
                  About Us
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FF4D1C]">
                  Property
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FF4D1C]">
                  Pages
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FF4D1C]">
                  Blog
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FF4D1C]">
                  Contact
                </a>
                <a href="#" className="text-gray-600 hover:text-[#FF4D1C]">
                  Sign In
                </a>
                <button className="bg-[#FF4D1C] text-white px-6 py-2 rounded hover:bg-[#e6441a] transition-colors">
                  Add Property
                </button>
              </div>

              <button
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t">
              <div className="container mx-auto px-4 py-4">
                <div className="flex flex-col space-y-4">
                  <a href="#" className="text-[#FF4D1C] font-medium">
                    Home
                  </a>
                  <a href="#" className="text-gray-600">
                    About Us
                  </a>
                  <a href="#" className="text-gray-600">
                    Property
                  </a>
                  <a href="#" className="text-gray-600">
                    Pages
                  </a>
                  <a href="#" className="text-gray-600">
                    Blog
                  </a>
                  <a href="#" className="text-gray-600">
                    Contact
                  </a>
                  <a href="#" className="text-gray-600">
                    Sign In
                  </a>
                  <button className="bg-[#FF4D1C] text-white px-6 py-2 rounded w-full">
                    Add Property
                  </button>

                  <div className="pt-4 border-t space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span className="text-sm">
                        7124 Landmark Tower, New York
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail size={16} />
                      <span className="text-sm">support@yourdomain.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone size={16} />
                      <span className="text-sm">+61383766284</span>
                    </div>

                    <div className="flex items-center space-x-4 pt-2">
                      <Facebook size={16} className="cursor-pointer" />
                      <Instagram size={16} className="cursor-pointer" />
                      <Twitter size={16} className="cursor-pointer" />
                      <Linkedin size={16} className="cursor-pointer" />
                      <Youtube size={16} className="cursor-pointer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
}
