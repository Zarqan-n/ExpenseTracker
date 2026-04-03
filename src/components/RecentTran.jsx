import { getData } from "../utils/Localstorage";

const RecentTran = () => {

  const tran = getData();

  return (
    <div className="bg-blue-100 rounded-xl mx-4 shadow px-4 py-4 mb-6">
      <div className="flex border-b border-gray-400 pb-2 justify-between items-center">
        <p className="font-semibold">Recent Transaction</p>
      </div>
      <div>
        <div className="grid grid-cols-4 border-b border-gray-300 py-2 font-medium">
          <p>Date</p>
          <p>Type</p>
          <p>Amount</p>
          <p>Category</p>
        </div>
        {tran.slice(-5).reverse().map((e)=>(
          <div key={e.id} className="grid grid-cols-4 text-gray-800 py-2 border-b border-gray-300">
          <p>{e.date}</p>
          <p>{e.type}</p>
          <p>{e.amount}</p>
          <p>{e.category}</p>
        </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTran;
