import { BiMessageSquareDots } from "react-icons/bi";
import { MdOutlineGridView } from "react-icons/md";
import { RiUser3Line } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
const KpiCardsSection = () => {
  const stats = [
    {
      title: "Total Users",
      value: "50000",
      icon: RiUser3Line,
      color: "text-savemom-teal",
      bgColor: "bg-kpi-bg",
    },
    {
      title: "Total Roles",
      value: "600",
      icon: RiUser3Line,
      color: "text-savemom-teal",
      bgColor: "bg-kpi-bg",
    },
    {
      title: "Total Category",
      value: "50000",
      icon: MdOutlineGridView,
      color: "text-savemom-teal",
      bgColor: "bg-kpi-bg",
    },
    {
      title: "Total Content",
      value: "600",
      icon: GrDocumentText,
      color: "text-savemom-teal",
      bgColor: "bg-kpi-bg",
    },
    {
      title: "Total WhatsApp Messages",
      value: "50000",
      icon: BiMessageSquareDots,
      color: "text-savemom-teal",
      bgColor: "bg-kpi-bg",
    },
    {
      title: "Total Email",
      value: "600",
      icon: BiMessageSquareDots,
      color: "text-savemom-teal",
      bgColor: "bg-kpi-bg",
    },
    {
      title: "Total Push Notification",
      value: "50000",
      icon: BiMessageSquareDots,
      color: "text-savemom-teal",
      bgColor: "bg-kpi-bg",
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
              <p className="text-2xl font-bold text-gray-900 truncate">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${stat.bgColor}`}>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KpiCardsSection;
