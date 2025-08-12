import { BiMessage } from "react-icons/bi";
import { FiPhone } from "react-icons/fi";
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
  ArcElement,
} from "chart.js";
import { Line, Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const PregnancyAnalyticsSection = () => {
  // Pregnancy by Trimester Pie Chart Data
  const trimesterData = {
    labels: ["1st Trimester", "2nd Trimester", "3rd Trimester"],
    datasets: [
      {
        data: [36, 39, 25],
        backgroundColor: ["#10b981", "#f97316", "#ef4444"],
        borderWidth: 0,
        cutout: "0%",
      },
    ],
  };

  const trimesterOptions = {
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
          label: (context) => `${context.label}: ${context.parsed}%`,
        },
      },
    },
  };

  // Gestational Week Distribution Line Chart Data
  const gestationalWeekData = {
    labels: [
      "Week 15",
      "Week 16",
      "Week 17",
      "Week 18",
      "Week 19",
      "Week 20",
      "Week 21",
      "Week 22",
      "Week 23",
      "Week 24",
    ],
    datasets: [
      {
        data: [95, 109, 105, 100, 115, 102, 110, 105, 108, 125],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#3b82f6",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const gestationalWeekOptions = {
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
          label: (context) => `${context.parsed} Mothers`,
          title: (context) => context[0].label,
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
            size: 11,
          },
        },
      },
      y: {
        beginAtZero: false,
        min: 70,
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

  // ANC Visits Horizontal Bar Chart Data
  const ancVisitsData = {
    labels: ["1 Visit", "2 Visit", "3 Visit", "4 Visit", ">4 Visit"],
    datasets: [
      {
        data: [802, 721, 601, 595, 480],
        backgroundColor: [
          "#14b8a6",
          "#0ea5e9",
          "#22c55e",
          "#6b7280",
          "#f97316",
        ],
        borderRadius: 6,
        barThickness: 30,
      },
    ],
  };

  const ancVisitsOptions = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleColor: "#fff",
        bodyColor: "#fff",
        callbacks: {
          label: (context) => `${context.parsed.x} Mothers`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 800,
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
          stepSize: 200,
        },
      },
      y: {
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
    },
  };

  const trimesterStats = [
    { label: "1st Trimester", count: 310, percentage: 36, color: "#10b981" },
    { label: "2nd Trimester", count: 460, percentage: 39, color: "#f97316" },
    { label: "3rd Trimester", count: 485, percentage: 25, color: "#ef4444" },
  ];

  const ancCoverageStats = [
    { label: "ANC 12+ Visits", percentage: 92 },
    { label: "ANC 8+ Visits", percentage: 96 },
    { label: "ANC 4+ Visits", percentage: 99.1 },
    { label: "1st Trimester ANC", percentage: 99.5 },
  ];

  return (
    <div className="space-y-6">
      {/* Top Row - Pregnancy by Trimester and Gestational Week Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pregnancy by Trimester */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Pregnancy by Trimester
          </h3>

          <div className="flex items-center justify-between">
            <div className="w-48 h-48">
              <Pie data={trimesterData} options={trimesterOptions} />
            </div>

            <div className="space-y-4">
              {trimesterStats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: stat.color }}
                  ></div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">
                      {stat.label}: {stat.count}
                    </div>
                    <div
                      className="text-2xl font-bold"
                      style={{ color: stat.color }}
                    >
                      {stat.percentage}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gestational Week Distribution */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Gestational Week Distribution
          </h3>

          <div className="h-64">
            <Line data={gestationalWeekData} options={gestationalWeekOptions} />
          </div>
        </div>
      </div>

      {/* Bottom Row - ANC Visits and Combined ANC Coverage + Delivery Due */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Antenatal Care (ANC) Visits */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Antenatal Care (ANC) Visits
            </h3>
            <p className="text-sm text-gray-600">
              Number of mothers by completed visits.
            </p>
          </div>

          <div className="h-64">
            <Bar data={ancVisitsData} options={ancVisitsOptions} />
          </div>
        </div>

        {/* Combined ANC Coverage and Delivery Due This Week */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          {/* ANC Coverage Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              ANC Coverage
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {ancCoverageStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-xs text-gray-600 mb-1">ANC</div>
                  <div className="text-sm font-medium text-gray-800 mb-2">
                    {stat.label.includes("12+")
                      ? "12+ Visits"
                      : stat.label.includes("8+")
                      ? "8+ Visits"
                      : stat.label.includes("4+")
                      ? "4+ Visits"
                      : "1st Trimester"}
                  </div>
                  <div className="text-2xl font-bold text-teal-600">
                    {stat.percentage}%
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Due This Week Section */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Delivery Due This Week
            </h3>

            <div className="grid grid-cols-3 gap-4 items-center">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">45</div>
                <div className="text-sm text-gray-600">Due this Week</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center space-x-2 mb-2">
                  <div className=" rounded-lg flex items-center justify-center">
                    <BiMessage className="h-8 w-8 text-teal-600" />
                  </div>
                  <div className=" rounded-lg flex items-center justify-center">
                    <FiPhone className="h-8 w-8 text-teal-600" />
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-600">
                  123 Notifications Sent
                </div>
              </div>

              <div className="text-center">
                <div className="relative inline-flex items-center justify-center w-16 h-16 mb-2">
                  <svg
                    className="w-16 h-16 transform -rotate-90"
                    viewBox="0 0 64 64"
                  >
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#14b8a6"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      strokeDashoffset="0"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-teal-900">
                      100%
                    </span>
                  </div>
                </div>
                <div className="text-xs text-gray-600">Coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancyAnalyticsSection;
