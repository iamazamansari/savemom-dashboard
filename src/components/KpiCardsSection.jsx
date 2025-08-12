import { FaArrowTrendDown } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import {
  AncMothersIcon,
  AppointmentIcon,
  AppointTodayIcon,
  BabiesIcon,
  DeliveriesIcon,
  HighRiskIcon,
  NegativeIcon,
  PositiveIcon,
  TotalMotherIcon,
  TotalUsersIcon,
} from "./KpiCardIcons";
const KpiCardsSection = () => {
  const stats = [
    {
      title: "Total Mothers",
      value: "1563",
      icon: TotalMotherIcon,
      change: "+11.3 %",
      changeType: "positive",
    },
    {
      title: "Total Deliveries",
      value: "1469",
      icon: TotalUsersIcon,
      change: "-5.2 %",
      changeType: "negative",
    },
    {
      title: "ANC Mothers",
      value: "38",
      icon: AncMothersIcon,
      change: "+5.2 %",
      changeType: "positive",
    },
    {
      title: "Deliveries This Week",
      value: "38",
      icon: DeliveriesIcon,
      change: "+5.2 %",
      changeType: "positive",
    },
    {
      title: "High Risk Mothers",
      value: "653",
      icon: HighRiskIcon,
      change: "-12 %",
      changeType: "negative",
    },
    {
      title: "Premature Babies",
      value: "38",
      icon: BabiesIcon,
      change: "+5.2 %",
      changeType: "positive",
    },
    {
      title: "Total Appointments",
      value: "789",
      icon: AppointmentIcon,
      change: "+25.3 %",
      changeType: "positive",
    },
    {
      title: "Appointments Today",
      value: "85",
      icon: AppointTodayIcon,
      change: "+25.3 %",
      changeType: "positive",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:scale-105 transition-transform duration-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium text-gray-600 mb-1">
                {stat.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 truncate">
                {stat.value}
              </p>
               <div className="flex items-center space-x-1">
              {stat.changeType === "positive" ? <PositiveIcon /> : <NegativeIcon />}
              <span
                className={`text-sm font-medium ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}
              >
                {stat.change}
              </span>
            </div>
            </div>
            <div className={`p-3 rounded-lg `}>
              <stat.icon className={`h-8 w-8 `} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KpiCardsSection;
