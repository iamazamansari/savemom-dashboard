import React from "react";

import { RxViewGrid } from "react-icons/rx";
import { MdVerifiedUser } from "react-icons/md";
import { BiFemale } from "react-icons/bi";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { MdErrorOutline } from "react-icons/md";
import { PiTestTubeBold } from "react-icons/pi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { BiBookContent } from "react-icons/bi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { RiArrowDropRightLine } from "react-icons/ri";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import logo from "../assets/logo.png";
const Sidebar = ({ isOpen, toggleSidebar }) => {
  // Sidebar navigation links and associated icons
  const navItems = [
    { name: "Dashboard", icon: RxViewGrid, href: "#", current: true },
    { name: "Users", icon: MdVerifiedUser, href: "#", hasSubMenu: true },
    { name: "Mothers", icon: BiFemale, href: "#", hasSubMenu: true },
    {
      name: "Healthworkers",
      icon: FaHandHoldingDroplet,
      href: "#",
      hasSubMenu: true,
    },
    { name: "SOS", icon: MdErrorOutline, href: "#", hasSubMenu: true },
    { name: "Medicine", icon: PiTestTubeBold, href: "#", hasSubMenu: true },
    {
      name: "Chat",
      icon: IoChatboxEllipsesOutline,
      href: "#",
      hasSubMenu: true,
    },
    { name: "Content", icon: BiBookContent, href: "#", hasSubMenu: true },
    { name: "Channels", icon: TbLayoutGridAdd, href: "#", hasSubMenu: true },
    {
      name: "Master Data",
      icon: RiInboxUnarchiveLine,
      href: "#",
      hasSubMenu: true,
    },
    { name: "Settings", icon: IoSettingsSharp, href: "#", hasSubMenu: true },
  ];

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-50 bg-white shadow-md p-4 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "w-56 translate-x-0" : "w-20 translate-x-0"}`}
    >
      {/* Logo and Savemom Text */}
      <div className="flex items-center justify-between mb-6 py-2 pr-2">
        <div className="flex items-center overflow-hidden">
          <img
            src={logo}
            alt="Savemom Logo"
            className={`h-8 w-auto transition-all duration-300 ${
              isOpen ? "mr-1" : "mr-0"
            }`}
          />
          <span
            className={`
              font-public-sans font-semibold text-[30px] leading-none tracking-normal
              text-[#384551] transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }
            `}
          >
            savemom
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <a
                href={item.href}
                className={`flex items-center py-2 rounded-md text-sm transition-colors duration-200
                  ${
                    item.current
                      ? "bg-gray-100 text-gray-700 font-semibold"
                      : "text-gray-800 hover:bg-gray-100"
                  }
                  ${isOpen ? "px-3" : "justify-center px-0 mx-auto w-10 h-10"}
                `}
              >
                <item.icon
                  className={`w-5 h-5 ${isOpen ? "mr-3" : "mr-0"} ${
                    item.current ? "text-gray-800" : "text-gray-500"
                  }`}
                />
                <span
                  className={`transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  {item.name}
                </span>
                {item.hasSubMenu && isOpen && (
                  <RiArrowDropRightLine
                    className={`w-6 h-6 ml-auto ${
                      item.current ? "text-indigo-600" : "text-gray-400"
                    }`}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`
          absolute top-6
          right-0
          transform translate-x-1/2
          p-1 rounded-full bg-white shadow-md text-savemom-teal
          hover:bg-gray-100 focus:outline-none 
          flex items-center justify-center transition-transform duration-300
          ${isOpen ? "rotate-0" : "rotate-180"}
          z-50
        `}
      >
        <IoIosArrowDropleftCircle className="w-6 h-6" />
      </button>
    </aside>
  );
};

export default Sidebar;
