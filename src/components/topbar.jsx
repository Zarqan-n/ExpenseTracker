import { useState } from "react";
import { Plus } from "lucide-react";
import TranForm from './TranForm';

const topbar = ({ current }) => {
  const [user, setUser] = useState("Viewer");
  const [tranForm, setTranForm] = useState(false)

  return (
    <div className="border-b border-gray-300 w-full flex justify-between items-center px-6 py-4">
      {tranForm && <TranForm onAdd={()=>{}} tranForm={tranForm} setTranForm={setTranForm}/>}
      <p className="capitalize font-semibold text-xl">{current}</p>
      <div className="flex items-center gap-3 ">
        {user === "Viewer" ? (
          <span></span>
        ) : (
          <button 
          onClick={(e)=>{
            setTranForm(true)
          }}
          className="bg-gray-200 rounded cursor-pointer py-1 px-2 flex items-center">
            <Plus size={18} />
            <span>Add</span>
          </button>
        )}
        <select
          onClick={(e) => {
            setUser(e.target.value);
          }}
          name="Viewer"
          id=""
          className="border text-sm py-1 px-2 text-gray-800 border-gray-400 rounded bg-blue-50"
        >
          <option value="Viewer">Viewer</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default topbar;
