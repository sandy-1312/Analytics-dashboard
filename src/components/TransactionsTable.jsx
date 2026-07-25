import { useMemo, useState } from "react";
import { FaSearch, FaSort, FaSortUp, FaSortDown } from "react-icons/fa";
import { transactions, categories, statuses } from "../data/mockData";

const statusStyles = {
  Completed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Failed: "bg-red-100 text-red-700",
};

export default function TransactionsTable() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");
  const [sortConfig, setSortConfig] = useState({ key: "date", direction: "desc" });

  const handleSort = (key) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        return { key, direction: prev.direction === "asc" ? "desc" : "asc" };
      }
      return { key, direction: "asc" };
    });
  };

  const sortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="text-gray-300" size={11} />;
    return sortConfig.direction === "asc" ? (
      <FaSortUp className="text-indigo-600" size={11} />
    ) : (
      <FaSortDown className="text-indigo-600" size={11} />
    );
  };

  const visibleRows = useMemo(() => {
    let rows = [...transactions];

    if (category !== "All") {
      rows = rows.filter((row) => row.category === category);
    }
    if (status !== "All") {
      rows = rows.filter((row) => row.status === status);
    }
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      rows = rows.filter(
        (row) =>
          row.customer.toLowerCase().includes(q) || row.id.toLowerCase().includes(q)
      );
    }

    rows.sort((a, b) => {
      const { key, direction } = sortConfig;
      let valA = a[key];
      let valB = b[key];

      if (typeof valA === "string") {
        valA = valA.toLowerCase();
        valB = valB.toLowerCase();
      }

      if (valA < valB) return direction === "asc" ? -1 : 1;
      if (valA > valB) return direction === "asc" ? 1 : -1;
      return 0;
    });

    return rows;
  }, [search, category, status, sortConfig]);

  const columns = [
    { key: "id", label: "Transaction ID" },
    { key: "customer", label: "Customer" },
    { key: "category", label: "Category" },
    { key: "amount", label: "Amount" },
    { key: "status", label: "Status" },
    { key: "date", label: "Date" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 min-w-0">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
        <h3 className="font-semibold text-gray-900">Recent Transactions</h3>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative w-full sm:w-56">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={13} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer or ID..."
              className="pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="flex-1 sm:flex-none text-sm border border-gray-200 rounded-lg px-2 sm:px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-0"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="flex-1 sm:flex-none text-sm border border-gray-200 rounded-lg px-2 sm:px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-0"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 text-left text-gray-500">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="py-2 px-3 font-medium cursor-pointer select-none whitespace-nowrap"
                >
                  <span className="flex items-center gap-1.5">
                    {col.label}
                    {sortIcon(col.key)}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleRows.map((row) => (
              <tr key={row.id} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="py-2.5 px-3 font-medium text-gray-900 whitespace-nowrap">{row.id}</td>
                <td className="py-2.5 px-3 whitespace-nowrap">{row.customer}</td>
                <td className="py-2.5 px-3 whitespace-nowrap">{row.category}</td>
                <td className="py-2.5 px-3 whitespace-nowrap">${row.amount.toFixed(2)}</td>
                <td className="py-2.5 px-3 whitespace-nowrap">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusStyles[row.status]}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-2.5 px-3 whitespace-nowrap text-gray-500">{row.date}</td>
              </tr>
            ))}

            {visibleRows.length === 0 && (
              <tr>
                <td colSpan={columns.length} className="py-8 text-center text-gray-400">
                  No transactions match your search/filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-gray-400 mt-3">
        Showing {visibleRows.length} of {transactions.length} transactions
      </p>
    </div>
  );
}
