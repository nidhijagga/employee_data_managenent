import React from 'react';
import { EmployeeList } from 'components/EmployeeList';
import { EmployeeInformation } from 'components/EmployeeInformation';

const Employee = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-6 p-4 bg-gray-50 border rounded-lg shadow-lg'>
      <div className="col-span-1 lg:col-span-1 bg-white p-4 rounded-lg shadow">
        <EmployeeList />
      </div>
      <div className="col-span-1 lg:col-span-2 bg-white p-4 rounded-lg shadow">
        <EmployeeInformation />
      </div>
    </div>
  );
}

export default Employee;
