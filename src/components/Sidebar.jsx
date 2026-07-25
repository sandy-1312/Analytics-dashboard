import { useState } from "react";
import {
  FaChartLine,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaCog,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const navItems = [
  { label: "Overview", icon: FaHome, active: true },
  { label: "Analytics", icon: FaChartLine, active: false },
  { label: "Orders", icon: FaShoppingCart, active: false },
  { label: "Customers", icon: FaUsers, active: false },
  { label: "Settings", icon: FaCog, active: false },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex items-center justify-between bg-[#12172b] px-4 py-3 sticky top-0 z-40">
        <span className="font-bold text-white">Insight</span>
        <button onClick={() => setOpen(true)} aria-label="Open menu" className="text-white">
          <FaBars size={18} />
        </button>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-[#12172b] flex flex-col z-50 transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-bold text-xl text-white">Insight</span>
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes size={16} />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            
              key={label}
              href="#"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-indigo-600 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </nav>

        <div className="px-6 py-5 text-xs text-gray-500 border-t border-white/10">
          Interactive Analytics Dashboard
        </div>
      </aside>
    </>
  );
}
