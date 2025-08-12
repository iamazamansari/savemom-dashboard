import { useState } from "react";
import { GoEye } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const HealthInsightsSection = () => {
  const [selectedCondition, setSelectedCondition] =
    useState("Select Condition");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const conditions = [
    "All Conditions",
    "Preeclampsia",
    "Obesity",
    "Underweight",
    "Anemia",
    "Diabetes",
    "HIV",
  ];

  // Health Insights Bar Chart Data
  const healthInsightsData = {
    labels: [
      "Preeclampsia",
      "Obesity",
      "Underweight",
      "Anemia",
      "Diabetes",
      "HIV",
    ],
    datasets: [
      {
        data: [110, 115, 125, 112, 110, 120],
        backgroundColor: [
          "#0D9394",
          "#16BDBE",
          "#176D6E",
          "#6EC5D9",
          "#1BA0AC",
          "#0D7094",
        ],
        borderRadius: 8,
        barThickness: 80,
      },
    ],
  };

  const healthInsightsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 130,
        grid: {
          display: true,
          color: "#f0f0f0",
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
          stepSize: 30,
        },
      },
    },
  };

  // New Pregnancy Registration Line Chart Data
  const pregnancyRegistrationData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [150, 140, 200, 160, 200, 140, 200],
        borderColor: "#0ea5e9",
        backgroundColor: "rgba(14, 165, 233, 0.1)",
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointBackgroundColor: "#0ea5e9",
        pointBorderColor: "#0ea5e9",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const pregnancyRegistrationOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        callbacks: {
          afterBody: (context) => {
            if (context[0].label === "Mar") {
              return "March highlighted";
            }
            return "";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true,
          color: "#f0f0f0",
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
        },
      },
      y: {
        beginAtZero: true,
        max: 250,
        grid: {
          display: true,
          color: "#f0f0f0",
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#666",
          font: {
            size: 12,
          },
          stepSize: 50,
        },
      },
    },
  };

  const recentRegistrations = [
    {
      name: "Lekshmi Nair",
      avatar: "/placeholder.svg?height=32&width=32",
      eddDate: "Jan 22 2026",
    },
    {
      name: "Anagha Menon",
      avatar: "/placeholder.svg?height=32&width=32",
      eddDate: "Dec 25 2025",
    },
    {
      name: "Maria Thomas",
      avatar: "/placeholder.svg?height=32&width=32",
      eddDate: "Oct 20 2025",
    },
    {
      name: "Merin Paul",
      avatar: "/placeholder.svg?height=32&width=32",
      eddDate: "Nov 12 2025",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Health Insights Bar Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Health Insights
            </h3>
            <p className="text-sm text-gray-600">
              Condition prevalence across different regions.
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <span className="text-sm text-gray-700">{selectedCondition}</span>
              <MdOutlineKeyboardArrowDown
                className={`h-4 w-4 text-gray-400 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {conditions.map((condition) => (
                  <button
                    key={condition}
                    onClick={() => {
                      setSelectedCondition(condition);
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {condition}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="h-64">
          <Bar data={healthInsightsData} options={healthInsightsOptions} />
        </div>
      </div>

      {/* Bottom Row - New Pregnancy Registration, Report, and Recent Registrations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* New Pregnancy Registration */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              New Pregnancy Registration
            </h3>
            <p className="text-sm text-gray-600">Yearly Report Overview</p>
          </div>
          <div className="h-48">
            <Line
              data={pregnancyRegistrationData}
              options={pregnancyRegistrationOptions}
            />
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">150</span>
            <span className="text-sm text-gray-500">March</span>
          </div>
        </div>

        {/* Report */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Report</h3>
            <p className="text-sm text-gray-600">Monthly Avg. 150</p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Registrations</p>
              <p className="text-3xl font-bold text-gray-900">1245</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">
                New Registrations Today
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-semibold text-gray-900">25</p>
                <span className="text-sm text-green-600 font-medium">
                  ▲ + 15
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">
                New Registrations This Week
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-semibold text-gray-900">156</p>
                <span className="text-sm text-green-600 font-medium">
                  ▲ + 50
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Registrations */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Registrations
            </h3>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-600 pb-2 border-b border-gray-200">
              <span>NAME</span>
              <span>EDD DATE</span>
              <span>ACTION</span>
            </div>
            {recentRegistrations.map((registration, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center py-2"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={registration.avatar || "/placeholder.svg"}
                    alt={registration.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {registration.name}
                  </span>
                </div>
                <span className="text-sm text-gray-700">
                  {registration.eddDate}
                </span>
                <button className="p-2 text-gray-800 hover:text-gray-400 w-fit">
                  <GoEye className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInsightsSection;
