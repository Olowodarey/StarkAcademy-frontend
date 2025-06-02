
"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Moon, Menu, X, Bell } from "lucide-react";
import CoursesModal from "../component/courseModal";
import ResourcesModal from "../component/resourceModal";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import courseicon from "../../public/assets/courseicon.svg";
import React from "react";
import resourceicon from "../../public/assets/resourceicon.svg";
import tradingicon from "../../public/assets/tradingIcon.svg";
import airdropicon from "../../public/assets/airdropIcon.svg";

const Navbar = () => {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black border-1 rounded-lg border-white text-white px-6 py-4 flex justify-between w-full items-center max-w-[85%] m-auto mt-4 ">
      <div className="text-[2rem] font-bold">Stark Academy</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {/* Course section */}
        <div className="relative">
          <button
            onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            <Image
              src={courseicon}
              alt="Courses icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-lg font-medium">Courses</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {/* Modal positioned directly under the button */}
          {isCoursesOpen && (
            <CoursesModal
              open={isCoursesOpen}
              onClose={() => setIsCoursesOpen(false)}
            />
          )}
        </div>

        {/* Trading section */}
        <div className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors cursor-pointer">
          <Image
            src={tradingicon}
            alt="Trading icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-lg font-medium">Trading</span>
        </div>

        {/* Airdrops */}
        <div className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors cursor-pointer">
          <Image
            src={airdropicon}
            alt="Airdrop icon"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-lg font-medium">Airdrops</span>
        </div>

        {/* Resources Section */}
        <div className="relative">
          <button
            onClick={() => setIsResourcesOpen(!isResourcesOpen)}
            className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            <Image
              src={resourceicon}
              alt="Resource icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-lg font-medium">Resources</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {/* Modal positioned directly under the button */}
          {isResourcesOpen && (
            <ResourcesModal
              open={isResourcesOpen}
              onClose={() => setIsResourcesOpen(false)}
            />
          )}
        </div>
        <Bell className="cursor-pointer text-gray-400 hover:text-white" />
        <Moon className="cursor-pointer" />
        <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
          PH
        </div>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setMobileMenuOpen(true)} className="cursor-pointer">
          <Menu />
        </button>
      </div>

      {/* Mobile Menu Dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/80" aria-hidden="true" />
        <div className="fixed top-0 right-0 w-2/3 h-full bg-black p-6 space-y-6 cursor-pointer">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setMobileMenuOpen(false)}>
              <X />
            </button>
          </div>
          
          {/* Mobile menu items with consistent styling */}
          <button 
            onClick={() => {
              setIsCoursesOpen(true);
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors w-full text-left cursor-pointer"
          >
            <Image
              src={courseicon}
              alt="Courses icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-lg font-medium">Courses</span>
          </button>
          
          <div className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors cursor-pointer">
            <Image
              src={tradingicon}
              alt="Trading icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-lg font-medium">Trading</span>
          </div>
          
          <div className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors cursor-pointer">
            <Image
              src={airdropicon}
              alt="Airdrop icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-lg font-medium">Airdrops</span>
          </div>
          
          <button 
            onClick={() => {
              setIsResourcesOpen(true);
              setMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 text-white hover:text-gray-300 transition-colors w-full text-left cursor-pointer"
          >
            <Image
              src={resourceicon}
              alt="Resource icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-lg font-medium">Resources</span>
          </button>
          
          <div className="flex items-center gap-4">
            <Bell className="cursor-pointer text-gray-400 hover:text-white" />
            <Moon />
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              PH
            </div>
          </div>
        </div>
      </Dialog>

      {/* Modals */}
      <CoursesModal
        open={isCoursesOpen}
        onClose={() => setIsCoursesOpen(false)}
      />
      <ResourcesModal
        open={isResourcesOpen}
        onClose={() => setIsResourcesOpen(false)}
      />
    </nav>
  );
};

export default Navbar;