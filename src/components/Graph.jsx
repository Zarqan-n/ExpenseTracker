import { getData } from "../utils/Localstorage"; 
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Summary = () => {
  const tran = getData();
  const groupBalanceByMonth = (data) => {
    const result = {};

    data.forEach((t) => {
      const month = t.month;

      if (!result[month]) {
        result[month] = 0;
      }

      if (t.type === "Income") {
        result[month] += t.amount;
      } else {
        result[month] -= t.amount;
      }
    });




    const monthOrder = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
    return Object.keys(result)
      .sort((a, b) => monthOrder.indexOf(a) - monthOrder.indexOf(b))
      .map((month) => ({
        month,
        balance: result[month],
      }));
  };


  const data = groupBalanceByMonth(tran);
  return (
    <div className="bg-blue-50 p-3 pb-10 rounded-xl  shadow h-80">
      <h3 className="mb-4 font-semibold">Balance Trend</h3>

      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `₹${value}`} />
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#3B82F6"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Summary;