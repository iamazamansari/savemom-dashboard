import {  MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VaccinationSection = () => {
  // Mother's Vaccinations Bar Chart Data
  const mothersVaccinationData = {
    labels: ["TT1", "TT2", "Influenza", "Tdap"],
    datasets: [
      {
        data: [37, 40, 33, 33],
        backgroundColor: "#14b8a6",
        borderRadius: 4,
        barThickness: 40,
      },
    ],
  };

  const mothersVaccinationOptions = {
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
          label: (context) => `${context.parsed.y} vaccinations`,
        },
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
        max: 40,
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
          stepSize: 10,
        },
      },
    },
  };

  // Baby's Vaccinations Bar Chart Data - First Row
  const babysVaccinationData1 = {
    labels: ["At Birth", "6 Weeks", "10 Weeks"],
    datasets: [
      {
        data: [600, 550, 450],
        backgroundColor: "#3b82f6",
        borderRadius: 4,
        barThickness: 40,
      },
    ],
  };

  // Baby's Vaccinations Bar Chart Data - Second Row
  const babysVaccinationData2 = {
    labels: ["14 Weeks", "6 Months", "9 Months", "12 Months"],
    datasets: [
      {
        data: [550, 450, 400, 400],
        backgroundColor: "#3b82f6",
        borderRadius: 4,
        barThickness: 40,
      },
    ],
  };

  const babysVaccinationOptions = {
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
          label: (context) => `${context.parsed.y} vaccinations`,
        },
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
        max: 600,
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
    },
  };

  // Progress Bar Component
  const ProgressBar = ({ label, percentage, color = "teal" }) => {
    const colorClasses = {
      teal: "bg-teal-500",
      blue: "bg-blue-500",
    };

    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{label}</span>
          <span className="text-sm font-semibold text-gray-900">
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full ${colorClasses[color]}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    );
  };

  const motherVaccinationStatus = [
    { label: "TT1 Completed", percentage: 92 },
    { label: "TT2 Completed", percentage: 95 },
    { label: "TT Booster Completed", percentage: 89 },
  ];

  const babyVaccinationStatus = [
    { label: "Birth Vaccines Completed", percentage: 100 },
    { label: "6 Weeks Completed", percentage: 99 },
    { label: "10 Weeks Completed", percentage: 95 },
    { label: "14 Weeks Completed", percentage: 94 },
    { label: "6 Months Completed", percentage: 94 },
    { label: "9 Months Completed", percentage: 90 },
    { label: "12 Months Completed", percentage: 90 },
  ];

  return (
    <div className="space-y-6">
      {/* Top Row - Mother's Vaccinations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Mother's Vaccinations Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Mother's Vaccinations
            </h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">365</div>
              <div className="text-sm text-gray-600">Vaccinations</div>
              <button className="flex items-center space-x-1 text-sm text-teal-600 hover:text-teal-700 mt-1">
                <span>View All</span>
                <MdOutlineKeyboardArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>
          <div className="h-48">
            <Bar
              data={mothersVaccinationData}
              options={mothersVaccinationOptions}
            />
          </div>
        </div>

        {/* Mother's Vaccination Status */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Vaccination Status
          </h3>
          <div className="space-y-4">
            {motherVaccinationStatus.map((status, index) => (
              <ProgressBar
                key={index}
                label={status.label}
                percentage={status.percentage}
                color="teal"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row - Baby's Vaccinations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Baby's Vaccinations Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Baby's Vaccinations
            </h3>
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">1260</div>
              <div className="text-sm text-gray-600">Vaccinations</div>
              <button className="flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-700 mt-1">
                <span>View All</span>
                <MdOutlineKeyboardArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-32">
              <Bar
                data={babysVaccinationData1}
                options={babysVaccinationOptions}
              />
            </div>
            <div className="h-32">
              <Bar
                data={babysVaccinationData2}
                options={babysVaccinationOptions}
              />
            </div>
          </div>
        </div>

        {/* Baby's Vaccination Status */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-6">
            Baby's Vaccination Status
          </h3>
          <div className="space-y-3">
            {babyVaccinationStatus.map((status, index) => (
              <ProgressBar
                key={index}
                label={status.label}
                percentage={status.percentage}
                color="blue"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccinationSection;
