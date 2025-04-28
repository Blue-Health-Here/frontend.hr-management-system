"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const EmployeesView = () => {
  const [employees, setEmployees] = useState([
    {
      id: 'EMP001',
      name: 'John Doe',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      designation: 'Software Engineer',
      department: 'Engineering',
      joiningDate: '2022-03-15',
      status: 'Active'
    },
    {
      id: 'EMP002',
      name: 'Jane Smith',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      email: 'jane.smith@example.com',
      phone: '+1 (555) 987-6543',
      designation: 'Product Manager',
      department: 'Product',
      joiningDate: '2021-07-22',
      status: 'Active'
    },
    {
      id: 'EMP003',
      name: 'Robert Johnson',
      image: 'https://randomuser.me/api/portraits/men/22.jpg',
      email: 'robert.j@example.com',
      phone: '+1 (555) 456-7890',
      designation: 'UX Designer',
      department: 'Design',
      joiningDate: '2023-01-10',
      status: 'Active'
    },
    {
      id: 'EMP004',
      name: 'Emily Davis',
      image: 'https://randomuser.me/api/portraits/women/63.jpg',
      email: 'emily.d@example.com',
      phone: '+1 (555) 111-2222',
      designation: 'Marketing Specialist',
      department: 'Marketing',
      joiningDate: '2022-11-05',
      status: 'Active'
    },
    {
      id: 'EMP005',
      name: 'Michael Brown',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
      email: 'michael.b@example.com',
      phone: '+1 (555) 333-4444',
      designation: 'HR Manager',
      department: 'Human Resources',
      joiningDate: '2021-05-18',
      status: 'Active'
    },
    {
      id: 'EMP006',
      name: 'Sarah Wilson',
      image: 'https://randomuser.me/api/portraits/women/28.jpg',
      email: 'sarah.w@example.com',
      phone: '+1 (555) 555-6666',
      designation: 'Financial Analyst',
      department: 'Finance',
      joiningDate: '2023-03-30',
      status: 'Active'
    },
    {
      id: 'EMP007',
      name: 'David Lee',
      image: 'https://randomuser.me/api/portraits/men/19.jpg',
      email: 'david.lee@example.com',
      phone: '+1 (555) 777-8888',
      designation: 'Operations Manager',
      department: 'Operations',
      joiningDate: '2020-09-12',
      status: 'Active'
    },
    {
      id: 'EMP008',
      name: 'Lisa Taylor',
      image: 'https://randomuser.me/api/portraits/women/65.jpg',
      email: 'lisa.t@example.com',
      phone: '+1 (555) 999-0000',
      designation: 'Sales Executive',
      department: 'Sales',
      joiningDate: '2023-06-25',
      status: 'Active'
    },
    // 12 Additional Employees
    {
      id: 'EMP009',
      name: 'James Wilson',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
      email: 'james.w@example.com',
      phone: '+1 (555) 123-7890',
      designation: 'Frontend Developer',
      department: 'Engineering',
      joiningDate: '2023-02-14',
      status: 'Active'
    },
    {
      id: 'EMP010',
      name: 'Olivia Martinez',
      image: 'https://randomuser.me/api/portraits/women/29.jpg',
      email: 'olivia.m@example.com',
      phone: '+1 (555) 456-1234',
      designation: 'Executive',
      department: 'Management',
      joiningDate: '2020-11-30',
      status: 'Active'
    },
    {
      id: 'EMP011',
      name: 'William Anderson',
      image: 'https://randomuser.me/api/portraits/men/47.jpg',
      email: 'william.a@example.com',
      phone: '+1 (555) 789-4561',
      designation: 'Backend Developer',
      department: 'Engineering',
      joiningDate: '2022-08-17',
      status: 'Active'
    },
    {
      id: 'EMP012',
      name: 'Sophia Thomas',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      email: 'sophia.t@example.com',
      phone: '+1 (555) 321-6549',
      designation: 'Executive',
      department: 'Sales',
      joiningDate: '2021-04-22',
      status: 'Active'
    },
    {
      id: 'EMP013',
      name: 'Benjamin Jackson',
      image: 'https://randomuser.me/api/portraits/men/52.jpg',
      email: 'benjamin.j@example.com',
      phone: '+1 (555) 654-9873',
      designation: 'DevOps Engineer',
      department: 'Engineering',
      joiningDate: '2023-01-05',
      status: 'Active'
    },
    {
      id: 'EMP014',
      name: 'Ava White',
      image: 'https://randomuser.me/api/portraits/women/35.jpg',
      email: 'ava.w@example.com',
      phone: '+1 (555) 987-3216',
      designation: 'Content Writer',
      department: 'Marketing',
      joiningDate: '2022-07-19',
      status: 'Active'
    },
    {
      id: 'EMP015',
      name: 'Mason Harris',
      image: 'https://randomuser.me/api/portraits/men/61.jpg',
      email: 'mason.h@example.com',
      phone: '+1 (555) 147-2583',
      designation: 'QA Engineer',
      department: 'Engineering',
      joiningDate: '2023-05-11',
      status: 'Active'
    },
    {
      id: 'EMP016',
      name: 'Charlotte Clark',
      image: 'https://randomuser.me/api/portraits/women/42.jpg',
      email: 'charlotte.c@example.com',
      phone: '+1 (555) 369-2581',
      designation: 'Executive',
      department: 'HR',
      joiningDate: '2021-09-27',
      status: 'Active'
    },
    {
      id: 'EMP017',
      name: 'Ethan Lewis',
      image: 'https://randomuser.me/api/portraits/men/28.jpg',
      email: 'ethan.l@example.com',
      phone: '+1 (555) 258-1473',
      designation: 'Mobile Developer',
      department: 'Engineering',
      joiningDate: '2022-12-08',
      status: 'Active'
    },
    {
      id: 'EMP018',
      name: 'Amelia Walker',
      image: 'https://randomuser.me/api/portraits/women/51.jpg',
      email: 'amelia.w@example.com',
      phone: '+1 (555) 753-1596',
      designation: 'Executive',
      department: 'Finance',
      joiningDate: '2020-10-15',
      status: 'Active'
    },
    {
      id: 'EMP019',
      name: 'Lucas Hall',
      image: 'https://randomuser.me/api/portraits/men/39.jpg',
      email: 'lucas.h@example.com',
      phone: '+1 (555) 951-3578',
      designation: 'Data Scientist',
      department: 'Engineering',
      joiningDate: '2023-04-03',
      status: 'Active'
    },
    {
      id: 'EMP020',
      name: 'Mia Young',
      image: 'https://randomuser.me/api/portraits/women/37.jpg',
      email: 'mia.y@example.com',
      phone: '+1 (555) 357-1598',
      designation: 'Executive Assistant',
      department: 'Management',
      joiningDate: '2022-01-25',
      status: 'Active'
    }
  ]);

  const handleDesignationChange = (id, newDesignation) => {
    setEmployees(employees.map(employee => 
      employee.id === id ? { ...employee, designation: newDesignation } : employee
    ));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Employee Directory</h1>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Emp ID</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Employee</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Email</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Phone</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Designation</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Joining Date</th>
              <th className="py-3 px-6 text-left text-xs font-medium text-gray-900 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id} className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-500">{employee.id}</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <Image 
                        src={employee.image} 
                        alt={employee.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                        unoptimized
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-500">{employee.name}</div>
                      <div className="text-sm text-gray-500">{employee.department}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{employee.email}</td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{employee.phone}</td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                  <select
                    value={employee.designation}
                    onChange={(e) => handleDesignationChange(employee.id, e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  >
                    <option value="Developer">Developer</option>
                    <option value="Executive">Executive</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="UX Designer">UX Designer</option>
                    <option value="Marketing Specialist">Marketing Specialist</option>
                    <option value="HR Manager">HR Manager</option>
                    <option value="Financial Analyst">Financial Analyst</option>
                    <option value="Operations Manager">Operations Manager</option>
                    <option value="Sales Executive">Sales Executive</option>
                  </select>
                </td>
                <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">{employee.joiningDate}</td>
                <td className="py-4 px-6 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    employee.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {employee.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeesView;