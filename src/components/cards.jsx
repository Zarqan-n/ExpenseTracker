import { Wallet, ArrowBigDownDash, ArrowBigUpDash } from "lucide-react";
import { getData } from "../utils/Localstorage";

const Cards = () => {
  let income = 0;
  let tran = getData() || [];
  tran
    .filter((t) => t.type === "Income")
    .forEach((e) => {
      income = income + e.amount;
    });

  let expense = 0;
    tran
    .filter((t) => t.type === "Expense")
    .forEach((e) => {
      expense = expense + e.amount;
    });

  const balance = income - expense;

  return (
    <div className="px-4 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center gap-3 bg-blue-500 p-5 rounded-xl text-white shadow hover:shadow-lg transition">
          <Wallet />
          <div>
            <p className="text-xs opacity-80">Curent Balance</p>
            <p className="text-xl font-bold">₹{balance}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-green-500 p-5 rounded-xl text-white shadow hover:shadow-lg transition">
          <ArrowBigDownDash />
          <div>
            <p className="text-xs opacity-80">Total Income</p>
            <p className="text-xl font-bold">₹{income}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-red-500 p-5 rounded-xl text-white shadow hover:shadow-lg transition">
          <ArrowBigUpDash />
          <div>
            <p className="text-xs opacity-80">Total Expense</p>
            <p className="text-xl font-bold">₹{expense}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
