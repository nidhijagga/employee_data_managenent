import React, { useEffect, useState } from "react";
import EmployeeList from "components/EmployeeList";
import EmployeeInformation from "components/EmployeeInformation";
import employees from "../data.json";

const Employee = () => {
  const [employeeList, setEmployeeList] = useState(employees);
  const [selectedEmployee, setSelectedEmployee] = useState();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-6 p-4 bg-gray-50 border rounded-lg shadow-lg">
      <div className="col-span-1 lg:col-span-1 bg-white p-4 rounded-lg shadow">
        <EmployeeList
          setSelectedEmployee={setSelectedEmployee}
          employeeList={employeeList}
          setEmployeeList={setEmployeeList}
        />
      </div>
      <div className="col-span-1 lg:col-span-2 bg-white p-4 rounded-lg shadow">
        <EmployeeInformation
          selectedEmployee={selectedEmployee}
          setSelectedEmployee={setSelectedEmployee}
          employeeList={employeeList}
          setEmployeeList={setEmployeeList}
        />
      </div>
    </div>
  );
};

export default Employee;
