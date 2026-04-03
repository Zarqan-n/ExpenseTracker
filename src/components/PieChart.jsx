import tran from "../data/transactions.json";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
  "#3B82F6", // blue
  "#22C55E", // green
  "#EF4444", // red
  "#F59E0B", // yellow
  "#8B5CF6", // purple
];

const PieChartComponent = () => {
  // Group expenses by category
  const groupByCategory = (data) => {
    const result = {};

    data.forEach((t) => {
      if (t.type === "Expense") {
        if (!result[t.category]) {
          result[t.category] = 0;
        }
        result[t.category] += t.amount;
      }
    });

    return Object.keys(result).map((key) => ({
      name: key,
      value: result[key],
    }));
  };

  const data = groupByCategory(tran);

  return (
    <div className="flex h-80 bg-amber-100 items-center px-10 rounded-xl py-5">
      <div className="flex-col gap-3 hidden lg:flex">
        <div className="flex gap-2 items-center">
          <div className="bg-[#3B82F6] w-5 h-5 rounded-4xl"></div>
          <p>Food</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#22C55E] w-5 h-5 rounded-4xl"></div>
          <p>Transport</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#EF4444] w-5 h-5 rounded-4xl"></div>
          <p>Rent</p>
        </div>
        <div className="flex gap-2 items-center">
          <div className="bg-[#F59E0B] w-5 h-5 rounded-4xl"></div>
          <p>Other</p>
        </div>
      </div>
      <div className=" text-center h-70 w-100">
        <h3 className="mb-4 font-semibold">Spending Breakdown</h3>

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              outerRadius={90}
              label
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip formatter={(value) => `₹${value}`} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PieChartComponent;
