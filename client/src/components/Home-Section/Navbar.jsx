import { Menu, MoveUpRight, X } from "lucide-react";
import React, { useState } from "react";







export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <div className="w-full flex justify-center z-50 fixed px-3">
      <div className="bg-white w-full md:w-[90%] lg:w-[80%] mt-3 rounded-3xl p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="bg-linear-to-r from-[#6552E0] to-[#9C8DFB] rounded-2xl p-2 px-3 text-2xl text-white">
              S
            </h1>
            <div className="ml-2">
              <h1 className="text-lg md:text-xl font-bold">
                Suman Chaudhary
              </h1>
              <span className="hidden sm:block text-sm text-gray-400">
                Front-End Developer
              </span>
            </div>
          </div>
          <nav className="hidden lg:flex font-bold text-gray-500 gap-3 xl:gap-6 items-center">
            <a
              href="#home"
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Services
            </a>
            <a
              href="#skills"
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Contact
            </a>
          </nav>
          <div className="hidden lg:flex items-center">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=maxchy430@email.com"
              className="bg-black rounded-full px-5 py-2 text-white"
            >
              Let's Talk
              <MoveUpRight className="inline ml-1 h-4" />
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden bg-black text-white p-2 rounded-full"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {isOpen && (
          <nav className="lg:hidden flex flex-col gap-2 mt-4 pt-3 border-t border-gray-100">
            <a
              href="#home"
              onClick={closeMenu}
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Services
            </a>
            <a
              href="#skills"
              onClick={closeMenu}
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={closeMenu}
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:bg-[#6552E0] hover:text-white px-3 py-2 rounded-full"
            >
              Contact
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=maxchy430@email.com"
              onClick={closeMenu}
className="bg-black rounded-full px-5 py-2 text-white mt-2 text-center shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            >
              Let's Talk
              <MoveUpRight className="inline ml-1 h-4" />
            </a>
          </nav>
        )}
      </div>
    </div>
  );
};