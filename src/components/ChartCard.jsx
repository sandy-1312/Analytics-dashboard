// A reusable wrapper that gives every chart the same white card styling,
// title, and optional subtitle. `children` is the actual chart component.
export default function ChartCard({ title, subtitle, children }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5 min-w-0">
      <div className="mb-4">
        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{title}</h3>
        {subtitle && <p className="text-xs sm:text-sm text-gray-500">{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}
