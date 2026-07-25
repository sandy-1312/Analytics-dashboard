import { FaUserCircle, FaBell } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between gap-3 px-4 sm:px-6 md:px-8 py-4 md:py-5">
      <div className="min-w-0">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 truncate">
          Overview
        </h1>
        <p className="hidden sm:block text-sm text-gray-500">
          Welcome back — here's what's happening today.
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <FaBell size={16} className="text-gray-500" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2">
          <FaUserCircle size={26} className="text-gray-400" />
          <span className="hidden sm:inline text-sm font-medium text-gray-700">Admin</span>
        </div>
      </div>
    </div>
  );
}
