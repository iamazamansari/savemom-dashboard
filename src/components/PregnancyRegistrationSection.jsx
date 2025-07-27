import { FiAlertTriangle } from "react-icons/fi";
import { MdErrorOutline } from "react-icons/md";
import { BiMessageRoundedError } from "react-icons/bi";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  ArcElement,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  ArcElement,
  Legend
);

const PregnancyRegistrationSection = () => {
  // Area Chart Config
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "New Registrations",
        data: [80, 180, 140, 240, 200, 80, 190],
        fill: true,
        backgroundColor: "#e1fbfb",
        borderColor: "#0D9394",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true },
    },
  };

  const donutData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        data: [300, 300, 900],
        backgroundColor: ["#ec475c", "#f87748", "#49af89"],
        borderWidth: 0,
      },
    ],
  };

  const donutOptions = {
    cutout: "70%",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white p-4 rounded-lg shadow col-span-2 flex flex-col lg:flex-row hover:scale-105 transition-transform duration-200">
        {/* Left: Area Chart */}
        <div className="flex-1 pr-4">
          <h3 className="font-semibold mb-4">New Pregnancy Registration</h3>
          <Line data={lineData} options={lineOptions} />
        </div>

        {/* Vertical Divider */}
        <div className="w-px bg-gray-300 mx-4 hidden lg:block"></div>

        {/* Right: Report Stats */}
        <div className="w-full lg:w-60 pt-6 lg:pt-0 space-y-4">
          <h3 className="font-semibold">Report</h3>
          <p className="text-gray-400 text-sm">Monthly Avg: 150</p>
          <div>
            <h4 className="text-gray-500 text-sm">Total Registrations</h4>
            <div className="text-2xl font-semibold">1000</div>
          </div>
          <div>
            <h4 className="text-gray-500 text-sm">New Registrations Today</h4>
            <div className="flex items-baseline space-x-10">
              <div className="text-2xl font-semibold">25</div>
              <div className="text-green-500 text-sm">▲ + 15</div>
            </div>
          </div>
          <div>
            <h4 className="text-gray-500 text-sm">
              New Registrations This Week
            </h4>
            <div className="flex items-baseline space-x-10">
              <div className="text-2xl font-semibold">156</div>
              <div className="text-green-500 text-sm">▲ + 50</div>
            </div>
          </div>
        </div>
      </div>

      {/* SOS Donut Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md flex flex-col space-y-6 hover:scale-105 transition-transform duration-200">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* Text block */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              SOS Statistics
            </h3>
            <p className="text-gray-400 text-sm">Overall SOS Overview</p>
            <div className="mt-4">
              <div className="text-3xl font-semibold text-gray-900">1500</div>
              <p className="text-sm text-gray-500">Total SOS</p>
            </div>
          </div>

          {/* Chart block */}
          <div className="w-full md:w-40 mx-auto md:mx-0 aspect-square">
            <Doughnut data={donutData} options={donutOptions} />
          </div>
        </div>
        <div className="space-y-4">
          {/* High Priority */}
          <div className="flex items-start justify-between flex-wrap">
            <div className="flex items-start space-x-3">
              <div className="bg-red-100 text-red-500 p-2 rounded-md">
                <FiAlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">High Priority</h4>
                <p className="text-gray-500 text-sm">
                  Immediate doctor alert, emergency action
                </p>
              </div>
            </div>
            <div className="text-gray-800 font-medium mt-2 md:mt-0">300</div>
          </div>

          {/* Medium Priority */}
          <div className="flex items-start justify-between flex-wrap">
            <div className="flex items-start space-x-3">
              <div className="bg-orange-100 text-orange-500 p-2 rounded-md">
                <MdErrorOutline className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Medium Priority</h4>
                <p className="text-gray-500 text-sm">
                  Health Worker alerted, doctor call in few hours
                </p>
              </div>
            </div>
            <div className="text-gray-800 font-medium mt-2 md:mt-0">300</div>
          </div>

          {/* Low Priority */}
          <div className="flex items-start justify-between flex-wrap">
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 text-green-500 p-2 rounded-md">
                <BiMessageRoundedError className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Low Priority</h4>
                <p className="text-gray-500 text-sm">
                  Health worker notified, Advised via app
                </p>
              </div>
            </div>
            <div className="text-gray-800 font-medium mt-2 md:mt-0">900</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PregnancyRegistrationSection;
