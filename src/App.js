import AddEmployeePopup from "components/AddEmployeePopup";
import Employee from "components/Employee";
import { useState } from "react";
import employees from "./data.json";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [employeeList, setEmployeeList] = useState(employees);

  const handleAddEmployee = () => {
    setIsOpen(true);
  };

  return (
    <div className="App bg-gray-50 min-h-screen p-6">
      <div className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">
          Employee Database Management
        </h1>
        <button
          className="bg-slate-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-slate-100 hover:text-slate-800 transition duration-300"
          onClick={handleAddEmployee}
        >
          Add Employee
        </button>
      </div>
      <Employee employeeList={employeeList} setEmployeeList={setEmployeeList} />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-65">
          <AddEmployeePopup
            setIsOpen={setIsOpen}
            employeeList={employeeList}
            setEmployeeList={setEmployeeList}
          />
        </div>
      )}
    </div>
  );
}

export default App;
