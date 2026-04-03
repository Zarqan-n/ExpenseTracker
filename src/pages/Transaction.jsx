import { getData } from "../utils/Localstorage";
import Cards from "../components/cards";
import { ArrowDown01, Funnel } from "lucide-react";
import { useState } from "react";

const Transaction = () => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("none");

  let data = [...getData()];

  if (filter !== "All") {
    data = data.filter((t) => t.type === filter);
  }

  if (sort === "asc") {
    data.sort((a, b) => a.amount - b.amount);
  } else if (sort === "desc") {
    data.sort((a, b) => b.amount - a.amount);
  }

  return (
    <div>
      <Cards />

      <div className="relative mx-4 border-b border-gray-400 bg-gray-100 py-2 px-3 flex rounded-t justify-between">
        <p className="font-medium text-[18px]">All Transactions</p>
        <div>
          <button onClick={() => setOpen(!open)}>
            <ArrowDown01 className="cursor-pointer" />
          </button>
          <button onClick={() => setOpen(!open)}>
            <Funnel className="cursor-pointer" />
          </button>
        </div>

        {open && (
          <div className="absolute right-10 top-10 mt-2 w-40 bg-white border rounded-lg shadow-md z-10">
            <p
              onClick={() => {
                setFilter("All");
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              All
            </p>
            <p
              onClick={() => {
                setFilter("Income");
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Income
            </p>
            <p
              onClick={() => {
                setFilter("Expense");
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Expense
            </p>
            <hr />
            <p
              onClick={() => {
                setSort("asc");
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              Low → High
            </p>
            <p
              onClick={() => {
                setSort("desc");
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              High → Low
            </p>
          </div>
        )}
      </div>

      <div className="px-4 ">
        <div className="grid grid-cols-5 bg-gray-100 pl-2 rounded-t border-b border-gray-300 py-2 font-medium">
          <p>Date</p>
          <p>Type</p>
          <p>Amount</p>
          <p>Title</p>
          <p>Category</p>
        </div>

        {data.reverse().map((e) => (
          <div
            key={e.id}
            style={
              e.type === "Income"
                ? { backgroundColor: "#d1fae5" }
                : { backgroundColor: "#fee2e2" }
            }
            className="grid grid-cols-5 pl-2 text-gray-800 py-2 border-b border-gray-300"
          >
            <p>{e.date}</p>
            <p
              style={
                e.type === "Expense"
                  ? { color: "#FB2C36" }
                  : { color: "green" }
              }
            >
              {e.type}
            </p>
            <p
              style={
                e.type === "Expense"
                  ? { color: "#FB2C36" }
                  : { color: "green" }
              }
            >
              {e.type === "Income" ? "+" : "-"}
              {e.amount}
            </p>
            <p>{e.title}</p>
            <p>{e.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transaction;