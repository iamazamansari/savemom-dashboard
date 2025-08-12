// import { FilterIcon } from "./KpiCardIcons";

// const FilterSection = () => {
//   return (
//     <div className="bg-white rounded-xl shadow-sm p-5 flex items-center gap-6 w-full ">
//       {/* Left: Icon + Label */}
//       <div className="flex flex-col items-center gap-1 min-w-[80px]">
//         <FilterIcon />
//         <span className="text-gray-700 text-2xl font-bold">Filters</span>
//       </div>

//       {/* Dropdowns */}
//       <div className="flex flex-wrap items-center gap-12">
//         {/* Trimester Filter */}
//         <div>
//           <label className="block text-sm text-gray-700 mb-1 font-bold">
//             Trimester
//           </label>
//           <select className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
//             <option>All Trimesters</option>
//             <option>First</option>
//             <option>Second</option>
//             <option>Third</option>
//           </select>
//         </div>

//         {/* Gestational Week Filter */}
//         <div>
//           <label className="block text-sm text-gray-700 mb-1 font-bold">
//             Gestational Week
//           </label>
//           <select className="border border-gray-300 rounded-md px-2 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
//             <option>All Weeks</option>
//             <option>Week 1–4</option>
//             <option>Week 5–8</option>
//             <option>Week 9–12</option>
//             {/* Add more as needed */}
//           </select>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;

import { useState, useRef, useEffect } from "react";
import { FilterIcon } from "./KpiCardIcons";
import { MdKeyboardArrowDown } from "react-icons/md";
const FiltersSection = () => {
  const [trimesterOpen, setTrimesterOpen] = useState(false);
  const [gestationalOpen, setGestationalOpen] = useState(false);
  const [selectedTrimesters, setSelectedTrimesters] = useState([]);
  const [selectedWeeks, setSelectedWeeks] = useState([]);

  const trimesterRef = useRef(null);
  const gestationalRef = useRef(null);

  const trimesters = [
    { id: "first", label: "First Trimester" },
    { id: "second", label: "Second Trimester" },
    { id: "third", label: "Third Trimester" },
  ];

  const weeks = [
    { id: "week12", label: "Week 12" },
    { id: "week13", label: "Week 13" },
    { id: "week14", label: "Week 14" },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        trimesterRef.current &&
        !trimesterRef.current.contains(event.target)
      ) {
        setTrimesterOpen(false);
      }
      if (
        gestationalRef.current &&
        !gestationalRef.current.contains(event.target)
      ) {
        setGestationalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTrimesterChange = (trimesterId) => {
    setSelectedTrimesters((prev) =>
      prev.includes(trimesterId)
        ? prev.filter((id) => id !== trimesterId)
        : [...prev, trimesterId]
    );
  };

  const handleWeekChange = (weekId) => {
    setSelectedWeeks((prev) =>
      prev.includes(weekId)
        ? prev.filter((id) => id !== weekId)
        : [...prev, weekId]
    );
  };

  const selectAllTrimesters = () => {
    setSelectedTrimesters(trimesters.map((t) => t.id));
  };

  const deselectAllTrimesters = () => {
    setSelectedTrimesters([]);
  };

  const selectAllWeeks = () => {
    setSelectedWeeks(weeks.map((w) => w.id));
  };

  const deselectAllWeeks = () => {
    setSelectedWeeks([]);
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center flex-col space-y-2">
            <div className="w-12 h-12  rounded-lg flex items-center justify-center">
              <FilterIcon />
            </div>
            <span className="text-lg font-semibold text-gray-800">Filters</span>
          </div>

          <div className="flex items-center space-x-6">
            {/* Trimester Dropdown */}
            <div className="relative" ref={trimesterRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Trimester
              </label>
              <button
                onClick={() => setTrimesterOpen(!trimesterOpen)}
                className="w-48 px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none   flex items-center justify-between"
              >
                <span className="text-gray-700">All Trimesters</span>
                <MdKeyboardArrowDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    trimesterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {trimesterOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <div className="p-3 border-b border-gray-200">
                    <div className="flex space-x-4">
                      <button
                        onClick={selectAllTrimesters}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Select All
                      </button>
                      <button
                        onClick={deselectAllTrimesters}
                        className="text-sm text-gray-700 hover:text-gray-900 font-medium"
                      >
                        Deselect All
                      </button>
                    </div>
                  </div>
                  <div className="p-2">
                    {trimesters.map((trimester) => (
                      <label
                        key={trimester.id}
                        className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedTrimesters.includes(trimester.id)}
                          onChange={() => handleTrimesterChange(trimester.id)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-700">
                          {trimester.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Gestational Week Dropdown */}
            <div className="relative" ref={gestationalRef}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gestational Week
              </label>
              <button
                onClick={() => setGestationalOpen(!gestationalOpen)}
                className="w-48 px-4 py-2 text-left bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none  flex items-center justify-between"
              >
                <span className="text-gray-700">All Weeks</span>
                <MdKeyboardArrowDown
                  className={`h-4 w-4 text-gray-400 transition-transform ${
                    gestationalOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {gestationalOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                  <div className="p-3 border-b border-gray-200">
                    <div className="flex space-x-4">
                      <button
                        onClick={selectAllWeeks}
                        className="text-sm text-gray-500 hover:text-gray-700"
                      >
                        Select All
                      </button>
                      <button
                        onClick={deselectAllWeeks}
                        className="text-sm text-gray-700 hover:text-gray-900 font-medium"
                      >
                        Deselect All
                      </button>
                    </div>
                  </div>
                  <div className="p-2">
                    {weeks.map((week) => (
                      <label
                        key={week.id}
                        className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedWeeks.includes(week.id)}
                          onChange={() => handleWeekChange(week.id)}
                          className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                        />
                        <span className="text-sm text-gray-700">
                          {week.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
