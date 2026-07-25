import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { monthlyStats } from "../data/mockData";
import ChartCard from "./ChartCard";

export default function RevenueLineChart() {
  return (
    <ChartCard title="Revenue Trend" subtitle="Monthly revenue, in USD">
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={monthlyStats}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]} />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#6366f1"
            strokeWidth={2.5}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
