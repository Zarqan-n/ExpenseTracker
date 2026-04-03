import { LayoutDashboard, ArrowLeftRight, Lightbulb } from "lucide-react";

export default function Sidebar({ current = "dashboard", setCurrent }) {
  const menu = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "transactions", label: "Transactions", icon: ArrowLeftRight },
    { id: "insights", label: "Insights", icon: Lightbulb },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-300 px-6 py-6 flex flex-col">
      <h1 className="text-2xl font-bold text-gray-800 mb-10">
        Finance
      </h1>
      <div className="flex flex-col gap-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = current === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setCurrent(item.id)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                ${
                  isActive
                    ? "bg-blue-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
            >
              <Icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
        
      </div>

    </div>
  );
}