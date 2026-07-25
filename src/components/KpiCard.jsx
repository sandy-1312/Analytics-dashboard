import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const accentStyles = {
  indigo: "bg-indigo-100 text-indigo-600",
  emerald: "bg-emerald-100 text-emerald-600",
  amber: "bg-amber-100 text-amber-600",
  rose: "bg-rose-100 text-rose-600",
};

export default function KpiCard({ label, value, change, trend, icon: Icon, accent }) {
  const isUp = trend === "up";
  const accentClass = accentStyles[accent] || accentStyles.indigo;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 flex flex-col gap-3 min-w-0">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs sm:text-sm text-gray-500 font-medium truncate">{label}</p>
        {Icon && (
          <span
            className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center ${accentClass}`}
          >
            <Icon size={15} />
          </span>
        )}
      </div>
      <p className="text-xl sm:text-2xl font-bold text-gray-900 truncate">{value}</p>
      <div
        className={`flex items-center flex-wrap gap-1 text-xs sm:text-sm font-medium ${
          isUp ? "text-green-600" : "text-red-500"
        }`}
      >
        {isUp ? <FaArrowUp size={11} /> : <FaArrowDown size={11} />}
        <span>{change}</span>
        <span className="text-gray-400 font-normal">vs last month</span>
      </div>
    </div>
  );
}
