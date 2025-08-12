import { GoEye } from "react-icons/go";
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
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const DeliveriesAppointmentsSection = () => {
  // Deliveries Line Chart Data
  const deliveriesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [180, 100, 52, 95, 120, 50, 140],
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointBackgroundColor: "#3b82f6",
        pointBorderColor: "#3b82f6",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const deliveriesOptions = {
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
          label: (context) => `${context.parsed.y} Deliveries`,
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

  // Appointments Line Chart Data
  const appointmentsData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [120, 125, 122, 140, 150, 145, 200],
        borderColor: "#14b8a6",
        backgroundColor: "rgba(20, 184, 166, 0.1)",
        borderWidth: 3,
        fill: false,
        tension: 0.4,
        pointBackgroundColor: "#14b8a6",
        pointBorderColor: "#14b8a6",
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const appointmentsOptions = {
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
          label: (context) => `${context.parsed.y} Appointments`,
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

  const deliveryList = [
    {
      name: "Tamilselvi T",
      avatar: "/placeholder.svg?height=32&width=32",
      deliveryType: "Normal",
    },
    {
      name: "Elakiya S",
      avatar: "/placeholder.svg?height=32&width=32",
      deliveryType: "C-Section",
    },
    {
      name: "Maria Thomas",
      avatar: "/placeholder.svg?height=32&width=32",
      deliveryType: "C-Section",
    },
    {
      name: "Merin Paul",
      avatar: "/placeholder.svg?height=32&width=32",
      deliveryType: "Normal",
    },
  ];

  const todaysAppointments = [
    {
      name: "Tamilselvi T",
      avatar: "/placeholder.svg?height=32&width=32",
      doctor: "Dr Anusri",
      doctorAvatar: "/placeholder.svg?height=24&width=24",
    },
    {
      name: "Elakiya S",
      avatar: "/placeholder.svg?height=32&width=32",
      doctor: "Dr Divya",
      doctorAvatar: "/placeholder.svg?height=24&width=24",
    },
    {
      name: "Maria Thomas",
      avatar: "/placeholder.svg?height=32&width=32",
      doctor: "Dr Ananya",
      doctorAvatar: "/placeholder.svg?height=24&width=24",
    },
    {
      name: "Merin Paul",
      avatar: "/placeholder.svg?height=32&width=32",
      doctor: "Dr Tamil",
      doctorAvatar: "/placeholder.svg?height=24&width=24",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Deliveries Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Deliveries Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Deliveries
            </h3>
            <p className="text-sm text-gray-600">Yearly Report Overview</p>
          </div>
          <div className="h-48">
            <Line data={deliveriesData} options={deliveriesOptions} />
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600">52</span>
            <span className="text-sm text-gray-500">March</span>
          </div>
        </div>

        {/* Deliveries Report */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Report</h3>
            <p className="text-sm text-gray-600">Monthly Avg. 150</p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Deliveries</p>
              <p className="text-3xl font-bold text-gray-900">1956</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">New Deliveries Today</p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-semibold text-gray-900">46</p>
                <span className="text-sm text-green-600 font-medium">
                  ▲ + 15
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">
                New Deliveries This Week
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-semibold text-gray-900">116</p>
                <span className="text-sm text-green-600 font-medium">
                  ▲ + 50
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery List */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Delivery List
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-600 pb-2 border-b border-gray-200">
              <span>MOTHER NAME</span>
              <span>DELIVERY TYPE</span>
              <span>ACTION</span>
            </div>
            {deliveryList.map((delivery, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center py-2"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={delivery.avatar || "/placeholder.svg"}
                    alt={delivery.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {delivery.name}
                  </span>
                </div>
                <span className="text-sm text-gray-700">
                  {delivery.deliveryType}
                </span>
                <button className="p-2 text-gray-800 hover:text-gray-400 w-fit">
                  <GoEye className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appointments Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Appointments Chart */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Appointments
            </h3>
            <p className="text-sm text-gray-600">Yearly Report Overview</p>
          </div>
          <div className="h-48">
            <Line data={appointmentsData} options={appointmentsOptions} />
          </div>
          <div className="mt-4 flex items-center space-x-2">
            <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
            <span className="text-sm text-gray-600">122</span>
            <span className="text-sm text-gray-500">March</span>
          </div>
        </div>

        {/* Appointments Report */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Report</h3>
            <p className="text-sm text-gray-600">Monthly Avg. 150</p>
          </div>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Appointments</p>
              <p className="text-3xl font-bold text-gray-900">2650</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">
                New Appointments Today
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-semibold text-gray-900">39</p>
                <span className="text-sm text-green-600 font-medium">
                  ▲ + 15
                </span>
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">
                New Appointments This Week
              </p>
              <div className="flex items-center space-x-2">
                <p className="text-2xl font-semibold text-gray-900">121</p>
                <span className="text-sm text-green-600 font-medium">
                  ▲ + 50
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Today's Appointments */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Today's Appointments
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 text-sm font-medium text-gray-600 pb-2 border-b border-gray-200">
              <span>MOTHER NAME</span>
              <span>ASSIGNED DOCTOR</span>
              <span>ACTION</span>
            </div>
            {todaysAppointments.map((appointment, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 items-center py-2"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={appointment.avatar || "/placeholder.svg"}
                    alt={appointment.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium text-gray-900">
                    {appointment.name}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src={appointment.doctorAvatar || "/placeholder.svg"}
                    alt={appointment.doctor}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-sm text-gray-700">
                    {appointment.doctor}
                  </span>
                </div>
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

export default DeliveriesAppointmentsSection;
