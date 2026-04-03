import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/sidebar";
import Transaction from "./pages/Transaction";
import Insight from "./pages/Insight";
import Top from "./components/topbar";

function App() {

  const [current, setCurrent] = useState("dashboard");

  return (
    <div className="flex">
      <Sidebar current={current} setCurrent={setCurrent} />
      <div className="w-full">
        <Top current={current} />
        {current === "dashboard" && <Dashboard />}
        {current === "transactions" && <Transaction />}
        {current === "insights" && <Insight />}
      <p className="text-gray-300 py-4 text-sm text-center">Made with love and curiosity by Zarqan</p>
      </div>
    </div>
  );
}

export default App;
