import React from 'react';

const EmployeeInformation = ({ selectedEmployee }) => {
  if (!selectedEmployee) {
    return <div className="text-gray-500">Select an employee to view details</div>;
  }

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Employee Information</h2>
      <div className="flex items-center space-x-4">
        <img
          src={selectedEmployee.profile_pic}
          alt={`${selectedEmployee.first_name}'s profile`}
          className="w-24 h-24 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold">{selectedEmployee.first_name} {selectedEmployee.last_name}</h2>
          <p className="text-gray-600">{selectedEmployee.designation}</p>
          <p className="text-sm text-gray-500">{selectedEmployee.status}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Details</h3>
        <p><strong>Address:</strong> {selectedEmployee.address}</p>
        <p><strong>Experience:</strong> {selectedEmployee.experience}</p>
        <p><strong>Date of Joining:</strong> {new Date(selectedEmployee.date_of_joining).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default EmployeeInformation;
