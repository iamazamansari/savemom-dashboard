import React, { useRef } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import { BsBrightnessHigh } from "react-icons/bs";

const Header = () => {
  const searchInputRef = useRef(null);

   // Focus the search input when search icon is clicked
  const focusSearchInput = () => {
    searchInputRef.current.focus();
  };

   // Placeholder for future profile dropdown or routing
  const handleProfileClick = () => {
    // console.log("Profile icon clicked!");
    // Add navigation or dropdown logic here
  };

  return (
    <header className="flex flex-wrap items-center justify-between p-4 bg-gray-100 shadow-sm">
      <div className="flex items-center w-full">
        {/* Search bar with integrated icons */}
        <div className="relative flex-1 mr-4">
          <button
            onClick={focusSearchInput}
            className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 text-xl z-10"
          >
            <CiSearch />
          </button>
          <input
            ref={searchInputRef}
            type="text"
            className="w-full py-5 pl-10 pr-24 md:pr-[120px] text-gray-700 bg-white shadow-sm rounded-md
                         focus:border-savemom-teal focus:ring-1 focus:ring-savemom-teal focus:outline-none text-base"
            placeholder="Search [CTRL + K]"
          />
          {/* Right side icons within the input's absolute positioning context */}
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-1 sm:space-x-2 text-gray-600">
            <button className="p-1 sm:p-1.5 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
              <BsBrightnessHigh className="h-5 w-5 sm:h-6 sm:w-6 text-lg sm:text-xl" />
            </button>
            <button className="p-1 sm:p-1.5 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100 relative">
              <IoMdNotificationsOutline className="h-5 w-5 sm:h-6 sm:w-6 text-lg sm:text-xl" />
              {/* Notification badge */}
              <span className="absolute -top-0.5 right-0 inline-flex items-center justify-center px-1 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full transform translate-x-1/2 -translate-y-1/2">
                1
              </span>
            </button>
            <button
              onClick={handleProfileClick}
              className="p-1 sm:p-1.5 rounded-full hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            >
              <CgProfile className="h-5 w-5 sm:h-6 sm:w-6 text-lg sm:text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
