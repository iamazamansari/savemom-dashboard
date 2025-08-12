
import { useState } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { Line} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const ChartsSection = () => {
  const [conditionsPage, setConditionsPage] = useState(1);
  

  // Chart.js configuration for line chart
  const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "High Risk Mothers",
        data: [100, 200, 150, 250, 200, 100, 200],
        borderColor: "#14b8a6",
        backgroundColor: "rgba(20, 184, 166, 0.1)",
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "#14b8a6",
        pointBorderColor: "#14b8a6",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const lineChartOptions = {
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
        borderColor: "#14b8a6",
        borderWidth: 1,
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
    },
  };

  // Chart.js configuration for pie chart
 


  // All conditions data organized by pages
  const allConditionsData = {
    1: [
      { condition: "Severe Anemia", count: 122 },
      { condition: "(PIH) / Pre-eclampsia", count: 109 },
      { condition: "Gestational Diabetes Mellitus (GDM)", count: 98 },
      { condition: "HIV/Syphilis/Hepatitis B", count: 71 },
    ],
    2: [
      { condition: "Hypothyroidism", count: 65 },
      { condition: "Previous obstetric history", count: 61 },
      { condition: "Age-based Risk", count: 56 },
      { condition: "Multiple pregnancy", count: 55 },
    ],
    3: [
      { condition: "Abnormal fetal presentation", count: 49 },
      { condition: "History of previous C-section", count: 45 },
      { condition: "Malnutrition", count: 39 },
      { condition: "Sickle Cell", count: 35 },
    ],
    4: [
      { condition: "Malaria/Dengue", count: 35 },
      { condition: "Edeme", count: 26 },
      { condition: "VDLR", count: 22 },
      { condition: "OGTT", count: 19 },
    ],
    5: [{ condition: "Negative Blood Group", count: 17 }],
  };

  

 

  const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex items-center justify-center space-x-1 mt-4">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${
              currentPage === index + 1
                ? "bg-teal-500 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    );
  };

  // Get current page data
  const currentConditionsData = allConditionsData[conditionsPage] || [];

  return (
    <div className="space-y-6">
      {/* First Row - Combined Chart and Report + Conditions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Combined High Risk Mothers Chart and Report */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Left Side - Chart */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  High Risk Mothers Identified
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Yearly Report Overview
                </p>
              </div>

              <div className="h-48">
                <Line data={lineChartData} options={lineChartOptions} />
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="w-px bg-gray-300 mx-4 hidden lg:block absolute"></div>

            {/* Right Side - Report */}
            <div className="space-y-4 lg:pl-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  Report
                </h3>
                <p className="text-sm text-gray-600 mb-4">Monthly Avg. 150</p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Total High Risk Mothers
                  </p>
                  <p className="text-3xl font-bold text-gray-900">1245</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Newly Identified Today
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
                    New Identified This Week
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
          </div>
        </div>

        {/* High Risk Pregnancy Conditions */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            High Risk Pregnancy Conditions
          </h3>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-600 pb-2 border-b border-gray-200">
              <span>CONDITION</span>
              <span className="text-right">COUNT</span>
            </div>

            <div className="min-h-[200px]">
              {currentConditionsData.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 gap-4 py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="text-sm text-gray-700">
                    {item.condition}
                  </span>
                  <span className="text-sm font-semibold text-gray-900 text-right">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>

            <Pagination
              currentPage={conditionsPage}
              totalPages={5}
              onPageChange={setConditionsPage}
            />
          </div>
        </div>
      </div>

      {/* Second Row - Risk Categorization and High Risk Mothers */}
     
    </div>
  );
};

export default ChartsSection;
