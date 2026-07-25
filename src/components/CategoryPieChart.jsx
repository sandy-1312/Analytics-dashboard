import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { categoryBreakdown, PIE_COLORS } from "../data/mockData";
import ChartCard from "./ChartCard";

export default function CategoryPieChart() {
  return (
    <ChartCard title="Sales by Category" subtitle="Share of total revenue">
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={categoryBreakdown}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius="70%"
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
            labelLine={false}
          >
            {categoryBreakdown.map((entry, index) => (
              <Cell key={entry.name} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </ChartCard>
  );
}
