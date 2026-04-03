import { useState } from "react";
import { X } from "lucide-react";
import { addTransaction } from "../utils/Localstorage";

const TransactionForm = ({ onAdd, tranForm, setTranForm }) => {
  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "Expense",
    title: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getMonthFromDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months[date.getMonth()];
  };

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);
    return `${day}-${month}-${year}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.date || !form.amount || !form.category || !form.title) return;

    const formattedDate = formatDate(form.date);
    const month = getMonthFromDate(form.date);

    const newTransaction = {
      id: Date.now(),
      date: formattedDate,
      month: month,
      amount: Number(form.amount),
      category: form.category,
      type: form.type,
      title: form.title,
    };

    addTransaction(newTransaction);

    if (onAdd) {
      onAdd(newTransaction);
    }

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "Expense",
      title: "",
    });

    setTranForm(false);
  };

  return (
    <div className="z-50 absolute flex justify-center items-center bg-gray-400/50 top-0 bottom-0 left-0 right-0 ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-xl shadow space-y-4 max-w-md"
      >
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Add Transaction</h2>
          <button
            onClick={() => setTranForm(false)}
            className="bg-gray-300/40 cursor-pointer rounded-4xl p-1"
          >
            <X />
          </button>
        </div>

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option value="Expense">Expense</option>
          <option value="Income">Income</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;