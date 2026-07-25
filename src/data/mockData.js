// Mock data standing in for what would normally come from a backend API.
// In a real project you'd replace these with fetch() calls to your server.

// Monthly revenue & user growth (used in the line/bar charts)
export const monthlyStats = [
  { month: "Jan", revenue: 4200, users: 240, orders: 120 },
  { month: "Feb", revenue: 5100, users: 310, orders: 145 },
  { month: "Mar", revenue: 4800, users: 290, orders: 132 },
  { month: "Apr", revenue: 6300, users: 380, orders: 178 },
  { month: "May", revenue: 7200, users: 420, orders: 205 },
  { month: "Jun", revenue: 6900, users: 405, orders: 198 },
  { month: "Jul", revenue: 8400, users: 490, orders: 240 },
  { month: "Aug", revenue: 9100, users: 540, orders: 265 },
  { month: "Sep", revenue: 8700, users: 520, orders: 250 },
  { month: "Oct", revenue: 9600, users: 580, orders: 288 },
  { month: "Nov", revenue: 10400, users: 630, orders: 310 },
  { month: "Dec", revenue: 11800, users: 700, orders: 350 },
];

// Sales split by category (used in the pie chart)
export const categoryBreakdown = [
  { name: "Electronics", value: 4200 },
  { name: "Clothing", value: 3100 },
  { name: "Home & Garden", value: 2400 },
  { name: "Sports", value: 1800 },
  { name: "Books", value: 900 },
];

export const PIE_COLORS = ["#6366f1", "#10b981", "#f59e0b", "#f43f5e", "#8b5cf6"];

// KPI summary cards at the top of the dashboard
export const kpiData = [
  { id: 1, label: "Total Revenue", value: "$86,400", change: "+12.4%", trend: "up", accent: "indigo" },
  { id: 2, label: "Active Users", value: "5,210", change: "+8.1%", trend: "up", accent: "emerald" },
  { id: 3, label: "Total Orders", value: "2,381", change: "-2.3%", trend: "down", accent: "amber" },
  { id: 4, label: "Conversion Rate", value: "3.42%", change: "+0.6%", trend: "up", accent: "rose" },
];

// Table of recent transactions — supports the searching/sorting/filtering feature
export const transactions = [
  { id: "TXN-1001", customer: "Ava Thompson", category: "Electronics", amount: 249.99, status: "Completed", date: "2026-07-01" },
  { id: "TXN-1002", customer: "Liam Chen", category: "Clothing", amount: 89.5, status: "Pending", date: "2026-07-02" },
  { id: "TXN-1003", customer: "Sofia Martinez", category: "Books", amount: 34.0, status: "Completed", date: "2026-07-03" },
  { id: "TXN-1004", customer: "Noah Patel", category: "Sports", amount: 120.75, status: "Failed", date: "2026-07-04" },
  { id: "TXN-1005", customer: "Emma Wilson", category: "Home & Garden", amount: 310.2, status: "Completed", date: "2026-07-05" },
  { id: "TXN-1006", customer: "Oliver Kim", category: "Electronics", amount: 599.0, status: "Completed", date: "2026-07-06" },
  { id: "TXN-1007", customer: "Isabella Garcia", category: "Clothing", amount: 45.99, status: "Pending", date: "2026-07-07" },
  { id: "TXN-1008", customer: "Ethan Brown", category: "Books", amount: 18.5, status: "Completed", date: "2026-07-08" },
  { id: "TXN-1009", customer: "Mia Rodriguez", category: "Sports", amount: 76.25, status: "Failed", date: "2026-07-09" },
  { id: "TXN-1010", customer: "Lucas Davis", category: "Home & Garden", amount: 152.4, status: "Completed", date: "2026-07-10" },
  { id: "TXN-1011", customer: "Amelia Lopez", category: "Electronics", amount: 899.99, status: "Completed", date: "2026-07-11" },
  { id: "TXN-1012", customer: "Mason Lee", category: "Clothing", amount: 62.0, status: "Pending", date: "2026-07-12" },
  { id: "TXN-1013", customer: "Charlotte Walker", category: "Sports", amount: 210.0, status: "Completed", date: "2026-07-13" },
  { id: "TXN-1014", customer: "James Hall", category: "Books", amount: 27.99, status: "Failed", date: "2026-07-14" },
  { id: "TXN-1015", customer: "Harper Young", category: "Home & Garden", amount: 445.6, status: "Completed", date: "2026-07-15" },
];

export const categories = ["All", "Electronics", "Clothing", "Home & Garden", "Sports", "Books"];
export const statuses = ["All", "Completed", "Pending", "Failed"];
