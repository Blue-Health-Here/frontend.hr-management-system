import React from 'react'

const AddPerformanceIndicator: React.FC = () => {
  // Designation options
  const designations = [
    { id: 1, name: 'Web Designer' },
    { id: 2, name: 'Web Developer' },
    { id: 3, name: 'IOS Developer' },
    // Add more designations as needed
  ];

  return (
    <div className="container mx-auto">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Add New Indicator</h1>
      
      {/* Designation Dropdown */}
      <div className="mb-6">
        <label htmlFor="designation" className="block text-sm font-medium text-gray-700 mb-2">
          Designation
        </label>
        <select
          id="designation"
          className="block w-full md:w-1/2 lg:w-2/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#f26522] focus:border-[#f26522] focus:ring-2"
        >
          <option value="">Select</option>
          {designations.map((designation) => (
            <option key={designation.id} value={designation.id}>
              {designation.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default AddPerformanceIndicator;