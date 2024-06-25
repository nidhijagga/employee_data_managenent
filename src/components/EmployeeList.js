import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/solid";

const EmployeeList = ({
  setSelectedEmployee,
  employeeList,
  setEmployeeList,
}) => {
  // const [deletedEmployee, setDeletedEmployee] = useState([]);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    setEmployeeList(employeeList.filter((employee) => employee.id !== id));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Employee List</h2>
      <div className="h-96 overflow-y-scroll">
        <ul className="space-y-2">
          {employeeList.map((employee, index) => (
            <li
              key={index}
              className="flex items-center justify-between p-2 bg-gray-100 rounded-lg shadow cursor-pointer"
              onClick={() => setSelectedEmployee(employee)}
            >
              <div>
                <h3 className="text-lg font-semibold">{employee.first_name}</h3>
                <p className="text-sm text-gray-600">{employee.designation}</p>
              </div>
              <button
                onClick={(e) => handleDelete(e, employee.id)}
                className="ml-4 p-2 text-red-500 hover:text-red-700"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeList;
