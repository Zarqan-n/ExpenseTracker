import Cards from "../components/cards";
import Graph from "../components/Graph";
import PieChart from "../components/PieChart";
import RecentTran from "../components/RecentTran";

const Dashboard = () => {
  return (
    <div>
      <Cards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-4">
        <Graph />
        <PieChart />
      </div>
      <RecentTran/>
    </div>
  );
};

export default Dashboard;
