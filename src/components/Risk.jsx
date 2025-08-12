import { useState } from "react";
import { GoEye } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Pie } from "react-chartjs-2";
const Risk = () => {
  const pieChartData = {
    labels: [
      "Diabetes",
      "Underweight",
      "Obesity",
      "Preeclampsia",
      "Anemia",
      "HIV",
    ],
    datasets: [
      {
        data: [23, 18, 17, 16, 15, 14],
        backgroundColor: [
          "#10b981",
          "#3b82f6",
          "#f59e0b",
          "#ef4444",
          "#8b5cf6",
          "#eab308",
        ],
        borderWidth: 0,
      },
    ],
  };
  const [mothersPage, setMothersPage] = useState(1);

  const pieChartOptions = {
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

  const riskData = [
    { name: "Preeclampsia", value: 16, color: "#EC4B3B" },
    { name: "Anemia", value: 15, color: "#C585DF" },
    { name: "Obesity", value: 17, color: "#FFA82D" },
    { name: "Diabetes", value: 16, color: "#82E4D0CC" },
    { name: "Underweight", value: 18, color: "#51ACE8" },
    { name: "HIV", value: 14, color: "#F1C40F" },
  ];
  const mothersData = [
    {
      name: "Lekshmi Nair",
      avatar: "/placeholder.svg?height=32&width=32",
      lastCheckup: "Fri Jul 11 2025",
      time: "10:30 AM - 11:30 AM",
      doctor: "Dr Anusri",
      doctorAvatar: "/placeholder.svg?height=24&width=24",
      gestationWeek: "28 Weeks",
    },
    {
      name: "Anagha Menon",
      avatar: "/placeholder.svg?height=32&width=32",
      lastCheckup: "Thu Jul 10 2025",
      time: "09:30 AM - 10:30 AM",
      doctor: "Dr Divya",
      doctorAvatar: "/placeholder.svg?height=24&width=24",
      gestationWeek: "30 Weeks",
    },
    {
      name: "Maria Thomas",
      avatar: "/placeholder.svg?height=32&width=32",
      lastCheckup: "Mon Jun 07 2025",
      time: "12:30 AM - 01:30 PM",
      doctor: "Dr Ananya",
      doctorAvatar: "/placeholder.svg?height=24&width=24",
      gestationWeek: "22 Weeks",
    },
    {
      name: "Merin Paul",
      avatar: "/placeholder.svg?height=32&width=32",
      lastCheckup: "Tue Jul 01 2025",
      time: "10:30 AM - 11:30 AM",
      doctor: "Dr Tamil",
      doctorAvatar: "/placeholder.svg?height=24&width=24",
      gestationWeek: "27 Weeks",
    },
  ];

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
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Risk Categorization */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Risk Categorization
        </h3>

        <div className="text-center mb-4">
          <p className="text-3xl font-bold text-gray-900">253</p>
          <p className="text-sm text-gray-600">Mothers</p>
          <p className="text-xs text-gray-500 mt-1">All Trimesters</p>
          <p className="text-xs text-gray-500">All Gestation Weeks</p>
        </div>

        <div className="h-40 mb-4 flex justify-center">
          <Pie data={pieChartData} options={pieChartOptions} />
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs">
          {riskData.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-600">
                {item.name}: {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* High Risk Mothers Table */}
      <div className="lg:col-span-2 bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">
            High Risk Mothers
          </h3>
          <button className="flex items-center space-x-1 text-sm text-teal-600 hover:text-teal-700">
            <span>View All</span>
            <MdKeyboardArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm font-medium text-gray-600 border-b border-gray-200">
                <th className="pb-3">MOTHER NAME</th>
                <th className="pb-3">LAST CHECKUP</th>
                <th className="pb-3">ASSIGNED DOCTOR</th>
                <th className="pb-3">GESTATION WEEK</th>
                <th className="pb-3">ACTION</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {mothersData.map((mother, index) => (
                <tr key={index} className="text-sm">
                  <td className="py-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={mother.avatar || "/placeholder.svg"}
                        alt={mother.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="font-medium text-gray-900">
                        {mother.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4">
                    <div>
                      <div className="text-gray-900">{mother.lastCheckup}</div>
                      <div className="text-gray-500 text-xs">{mother.time}</div>
                    </div>
                  </td>
                  <td className="py-4">
                    <div className="flex items-center space-x-2">
                      <img
                        src={mother.doctorAvatar || "/placeholder.svg"}
                        alt={mother.doctor}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <span className="text-gray-900">{mother.doctor}</span>
                    </div>
                  </td>
                  <td className="py-4 text-gray-900">{mother.gestationWeek}</td>
                  <td className="py-4">
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <GoEye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={mothersPage}
          totalPages={4}
          onPageChange={setMothersPage}
        />
      </div>
    </div>
  );
};

export default Risk;
