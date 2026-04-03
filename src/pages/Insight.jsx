import { getData } from "../utils/Localstorage";
import { TrendingUp, Wallet, Calendar } from "lucide-react";

const Insights = () => {
  const tran = getData();

  const getTopCategory = () => {
    const map = {};

    tran.forEach((t) => {
      if (t.type == "Expense") {
        map[t.category] = (map[t.category] || 0) + t.amount;
      }
    });

    let maxCat = "";
    let maxVal = 0;

    for (let key in map) {
      if (map[key] > maxVal) {
        maxVal = map[key];
        maxCat = key;
      }
    }

    return { maxCat, maxVal };
  };

  const getMonthlyComparison = () => {
    const result = {};

    tran.forEach((t) => {
      if (!result[t.month]) {
        result[t.month] = { income: 0, expense: 0 };
      }

      if (t.type === "Income") {
        result[t.month].income += t.amount;
      } else {
        result[t.month].expense += t.amount;
      }
    });

    return Object.entries(result).map(([month, val]) => ({
      month,
      ...val,
    }));
  };

  const getSavings = () => {
    let income = 0;
    let expense = 0;

    tran.forEach((t) => {
      if (t.type === "Income") income += t.amount;
      else expense += t.amount;
    });

    return income - expense;
  };

  const top = getTopCategory();
  const monthly = getMonthlyComparison();
  const savings = getSavings();

  return (
    <div className="p-6 space-y-6">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <div className="flex items-center gap-4 bg-red-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="bg-red-100 p-3 rounded-lg text-red-500">
            <TrendingUp size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Top Spending</p>
            <h2 className="text-lg font-semibold">{top.maxCat}</h2>
            <p className="text-red-500 text-sm">₹{top.maxVal}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-green-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="bg-green-100 p-3 rounded-lg text-green-500">
            <Wallet size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total Savings</p>
            <h2 className="text-lg font-semibold">₹{savings}</h2>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-blue-50 p-5 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="bg-blue-100 p-3 rounded-lg text-blue-500">
            <Calendar size={20} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Months Tracked</p>
            <h2 className="text-lg font-semibold">{monthly.length}</h2>
          </div>
        </div>

      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-4">Monthly Comparison</h3>

        <div className="space-y-3">
          {monthly.map((m, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg"
            >
              <span className="font-medium">{m.month}</span>
              <span className="text-green-500 text-sm">+₹{m.income}</span>
              <span className="text-red-500 text-sm">-₹{m.expense}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white p-5 rounded-xl shadow-sm">
        <h3 className="font-semibold mb-4">Insights</h3>

        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• You spend the most on <b>{top.maxCat}</b></li>
          <li>• Your total savings is ₹{savings}</li>
          <li>• You tracked {monthly.length} months of data</li>
        </ul>
      </div>

    </div>
  );
};

export default Insights;