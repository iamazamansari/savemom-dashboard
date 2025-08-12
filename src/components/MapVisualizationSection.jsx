import { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";

const MapVisualizationSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedMother, setExpandedMother] = useState(null);
  const [selectedMother, setSelectedMother] = useState(null);
  const [mapInstance, setMapInstance] = useState(null);
  useEffect(() => {
    if (mapInstance) {
      setTimeout(() => {
        mapInstance.invalidateSize();
      }, 100);
    }
  }, [mapInstance]);

  const mothers = [
    {
      id: 1,
      name: "Nila",
      avatar: "/placeholder.svg?height=32&width=32",
      location: "Kochi",
      coordinates: [9.9312, 76.2673],
      details: "28 weeks pregnant, High Risk",
      riskLevel: "high",
    },
    {
      id: 2,
      name: "Yazhini",
      avatar: "/placeholder.svg?height=32&width=32",
      location: "Salem",
      coordinates: [11.664, 78.146],
      details: "32 weeks pregnant, Normal",
      riskLevel: "low",
    },
    {
      id: 3,
      name: "Vidhya",
      avatar: "/placeholder.svg?height=32&width=32",
      location: "Coimbatore",
      coordinates: [11.0168, 76.9558],
      details: "24 weeks pregnant, High Risk",
      riskLevel: "high",
    },
    {
      id: 4,
      name: "Kavya",
      avatar: "/placeholder.svg?height=32&width=32",
      location: "Madurai",
      coordinates: [9.9252, 78.1198],
      details: "30 weeks pregnant, Normal",
      riskLevel: "medium",
    },
    {
      id: 5,
      name: "Meera",
      avatar: "/placeholder.svg?height=32&width=32",
      location: "Thrissur",
      coordinates: [10.5276, 76.2144],
      details: "26 weeks pregnant, High Risk",
      riskLevel: "high",
    },
    {
      id: 6,
      name: "Tharani",
      avatar: "/placeholder.svg?height=32&width=32",
      location: "Kollam",
      coordinates: [8.8932, 76.6141],
      details: "35 weeks pregnant, Normal",
      riskLevel: "low",
    },
    {
      id: 7,
      name: "Ananya",
      avatar: "/placeholder.svg?height=32&width=32",
      location: "Mysuru",
      coordinates: [12.2958, 76.6394],
      details: "22 weeks pregnant, High Risk",
      riskLevel: "high",
    },
    {
      id: 8,
      name: "Ilaakiya",
      avatar: "/placeholder.svg?height=32&width=32",
      location: "Tiruvannamalai",
      coordinates: [12.2253, 79.0747],
      details: "29 weeks pregnant, Normal",
      riskLevel: "medium",
    },
  ];

  const filteredMothers = mothers.filter((mother) =>
    mother.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleExpanded = (motherId) => {
    setExpandedMother(expandedMother === motherId ? null : motherId);
  };

  const getMarkerColor = (riskLevel) => {
    switch (riskLevel) {
      case "high":
        return "#ef4444";
      case "medium":
        return "#f97316";
      case "low":
        return "#eab308";
      default:
        return "#6b7280";
    }
  };

  const getMarkerRadius = (riskLevel) => {
    switch (riskLevel) {
      case "high":
        return 12;
      case "medium":
        return 8;
      case "low":
        return 6;
      default:
        return 6;
    }
  };

  const getRiskBadgeClass = (riskLevel) => {
    switch (riskLevel) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-orange-100 text-orange-800";
      case "low":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const focusOnMother = (mother) => {
    if (mapInstance) {
      mapInstance.setView(mother.coordinates, 12);
      setSelectedMother(mother);
    }
  };

  // Custom marker component for mothers
  const MotherMarker = ({ mother }) => {
    return (
      <CircleMarker
        center={mother.coordinates}
        radius={getMarkerRadius(mother.riskLevel)}
        pathOptions={{
          color: getMarkerColor(mother.riskLevel),
          fillColor: getMarkerColor(mother.riskLevel),
          fillOpacity: 0.7,
          weight: 2,
        }}
        eventHandlers={{
          click: () => setSelectedMother(mother),
        }}
      >
        <Popup>
          <div className="p-2 min-w-[200px]">
            <div className="flex items-center space-x-3 mb-2">
              <img
                src={mother.avatar || "/placeholder.svg"}
                alt={mother.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{mother.name}</h4>
                <p className="text-sm text-gray-600">{mother.location}</p>
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-2">{mother.details}</p>
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskBadgeClass(
                mother.riskLevel
              )}`}
            >
              {mother.riskLevel.charAt(0).toUpperCase() +
                mother.riskLevel.slice(1)}{" "}
              Risk
            </span>
          </div>
        </Popup>
      </CircleMarker>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Map Visualization
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-96">
          {/* Left Sidebar - Mother Search and List */}
          <div className="lg:col-span-1 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search Mother by Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Mothers List */}
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {filteredMothers.map((mother) => (
                <div
                  key={mother.id}
                  className="border border-gray-200 rounded-lg"
                >
                  <button
                    onClick={() => toggleExpanded(mother.id)}
                    className="w-full flex items-center justify-between p-3 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={mother.avatar || "/placeholder.svg"}
                        alt={mother.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {mother.name}
                      </span>
                    </div>
                    <MdOutlineKeyboardArrowDown
                      className={`h-4 w-4 text-gray-400 transition-transform ${
                        expandedMother === mother.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedMother === mother.id && (
                    <div className="px-3 pb-3 border-t border-gray-100">
                      <div className="text-xs text-gray-600 mt-2">
                        <div>Location: {mother.location}</div>
                        <div className="mt-1">{mother.details}</div>
                        <button
                          onClick={() => focusOnMother(mother)}
                          className="mt-2 text-teal-600 hover:text-teal-700 font-medium"
                        >
                          View on Map
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Leaflet Map */}
          <div className="lg:col-span-3 relative rounded-lg overflow-hidden border-2 border-gray-200">
            <div className="w-full h-[384px]">
              <MapContainer
                center={[10.8505, 76.2711]}
                zoom={12}
                style={{ height: "100%", width: "100%" }}
                className="h-full w-full"
                whenCreated={setMapInstance}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Mother Markers */}
                {mothers.map((mother) => (
                  <MotherMarker key={mother.id} mother={mother} />
                ))}
              </MapContainer>
            </div>

            {/* Legend */}
            <div className="absolute top-4 right-4 bg-white bg-opacity-95 p-3 rounded-lg shadow-lg z-[1000]">
              <div className="text-xs font-medium text-gray-700 mb-2">
                Risk Levels
              </div>
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">High Risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Medium Risk</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="text-xs text-gray-600">Low Risk</span>
                </div>
              </div>
            </div>

            {/* Selected Mother Info */}
            {selectedMother && (
              <div className="absolute top-4 left-4 bg-white bg-opacity-95 p-4 rounded-lg shadow-lg max-w-xs z-[1000]">
                <div className="flex items-center space-x-3 mb-2">
                  <img
                    src={selectedMother.avatar || "/placeholder.svg"}
                    alt={selectedMother.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {selectedMother.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {selectedMother.location}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedMother(null)}
                    className="text-gray-400 hover:text-gray-600 text-lg"
                  >
                    ×
                  </button>
                </div>
                <p className="text-sm text-gray-700 mb-2">
                  {selectedMother.details}
                </p>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskBadgeClass(
                    selectedMother.riskLevel
                  )}`}
                >
                  {selectedMother.riskLevel.charAt(0).toUpperCase() +
                    selectedMother.riskLevel.slice(1)}{" "}
                  Risk
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapVisualizationSection;
