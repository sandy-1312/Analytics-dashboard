import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { monthlyStats } from "../data/mockData";
import ChartCard from "./ChartCard";

export default function OrdersBarChart() {
  return (
    <ChartCard title="Users vs Orders" subtitle="New users and orders per month">
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={monthlyStats}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar dataKey="users" fill="#6366f1" radius={[4, 4, 0, 0]} name="Users" />
          <Bar dataKey="orders" fill="#10b981" radius={[4, 4, 0, 0]} name="Orders" />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
