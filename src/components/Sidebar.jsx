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

// Left sidebar navigation. Collapses into a slide-out drawer on mobile,
// controlled by a hamburger button that only appears on small screens.
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar with hamburger toggle */}
      <div className="md:hidden flex items-center justify-between bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-40">
        <span className="font-bold text-brand-600">Insight</span>
        <button onClick={() => setOpen(true)} aria-label="Open menu">
          <FaBars size={18} />
        </button>
      </div>

      {/* Overlay behind the mobile drawer */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-100 flex flex-col z-50 transition-transform duration-200
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <span className="font-bold text-xl text-brand-600">Insight</span>
          <button className="md:hidden" onClick={() => setOpen(false)} aria-label="Close menu">
            <FaTimes size={16} />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1">
          {navItems.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-brand-50 text-brand-700"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </nav>

        <div className="px-6 py-5 text-xs text-gray-400 border-t border-gray-100">
          Interactive Analytics Dashboard
        </div>
      </aside>
    </>
  );
}
