import { FaDollarSign, FaUsers, FaShoppingBag, FaPercentage } from "react-icons/fa";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import KpiCard from "./components/KpiCard";
import RevenueLineChart from "./components/RevenueLineChart";
import OrdersBarChart from "./components/OrdersBarChart";
import CategoryPieChart from "./components/CategoryPieChart";
import TransactionsTable from "./components/TransactionsTable";
import { kpiData } from "./data/mockData";

const kpiIcons = [FaDollarSign, FaUsers, FaShoppingBag, FaPercentage];

export default function App() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />

      <div className="flex-1 min-w-0">
        <Topbar />

        <main className="px-4 sm:px-6 md:px-8 pb-10 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((kpi, index) => (
              <KpiCard key={kpi.id} {...kpi} icon={kpiIcons[index]} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RevenueLineChart />
            <OrdersBarChart />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1 min-w-0">
              <CategoryPieChart />
            </div>
            <div className="lg:col-span-2 min-w-0">
              <TransactionsTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
