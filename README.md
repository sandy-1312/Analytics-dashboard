# Interactive Analytics Dashboard

A React + Tailwind CSS dashboard built for the Frontend Development internship project.
Displays KPIs, charts (Recharts), and an interactive transactions table with
search, filter, and sort.

## Features
- 4 KPI summary cards (Revenue, Users, Orders, Conversion Rate)
- Line chart: revenue trend over 12 months
- Bar chart: users vs orders per month
- Pie chart: sales by category
- Transactions table with:
  - Live search (by customer name or transaction ID)
  - Category and status filter dropdowns
  - Click-to-sort on every column
- Fully responsive layout (sidebar collapses into a mobile drawer)

## Tech stack
- React 18 (Vite)
- Tailwind CSS
- Recharts (charting library)
- react-icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173) in your browser.

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder, which you can deploy to Vercel, Netlify,
or GitHub Pages.

## Project structure

```
src/
  components/
    Sidebar.jsx           - left navigation, collapses on mobile
    Topbar.jsx             - page header
    KpiCard.jsx             - single KPI stat card
    ChartCard.jsx           - reusable card wrapper for charts
    RevenueLineChart.jsx    - line chart (Recharts)
    OrdersBarChart.jsx      - bar chart (Recharts)
    CategoryPieChart.jsx    - pie chart (Recharts)
    TransactionsTable.jsx   - interactive table (search/filter/sort)
  data/
    mockData.js             - all mock data used by the dashboard
  App.jsx                   - assembles the layout
  main.jsx
  index.css
```
