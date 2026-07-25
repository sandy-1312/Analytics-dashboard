import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function KpiCard({ label, value, change, trend }) {
  const isUp = trend === "up";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 flex flex-col gap-2 min-w-0">
      <p className="text-xs sm:text-sm text-gray-500 font-medium truncate">{label}</p>
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
