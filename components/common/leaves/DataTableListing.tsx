import { Leave, PerformanceIndicator, Holiday } from "@/utils/types";
import React from "react";
import { User,DataTableProps } from "@/utils/types";

const DataTableListing: React.FC<DataTableProps> = ({ 
  filteredLeaves, 
  indicators,
  holidays,
  filteredUsers
}) => {
  const data = filteredLeaves || indicators || holidays || filteredUsers;
  const isLeavesTable = !!filteredLeaves;
  const isHolidaysTable = !!holidays;
  const isUsersTable = !!filteredUsers;

  if (!data || data.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        {isLeavesTable ? "No leaves found" : 
         isHolidaysTable ? "No holidays found" : 
         isUsersTable ? "No users found" : "No performance indicators found"}
      </div>
    );
  }
  

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-200">
            {isLeavesTable ? (
              <>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Employee
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Leave Type
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  From
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  To
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Days
                </th>
              </>
            ) : isHolidaysTable ? (
              <>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Title
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Date
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Description
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Status
                </th>
              </>
            ) : isUsersTable ? (
              <>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Created Date
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Role
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Status
                </th>
              </>
            ) : (
              <>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Designation
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Department
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Approved By
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Created Date
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Status
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50">
              {isLeavesTable ? (
                <>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          src={(item as Leave).employeeImage}
                          alt={(item as Leave).employee}
                          className="rounded-full h-10 w-10"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-500">
                          {(item as Leave).employee}
                        </div>
                        <div className="text-sm text-gray-500">
                          {(item as Leave).department}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as Leave).leaveType}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as Leave).from}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as Leave).to}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as Leave).days} Days
                  </td>
                </>
              ) : isHolidaysTable ? (
                <>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as Holiday).title}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as Holiday).date}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as Holiday).description}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${(item as Holiday).status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'}`}>
                      {(item as Holiday).status}
                    </span>
                  </td>
                </>
              ) : isUsersTable ? (
                <>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img
                          src={(item as User).image}
                          alt={(item as User).name}
                          className="rounded-full h-10 w-10"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-500">
                          {(item as User).name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as User).email}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as User).createdDate}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as User).role}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${(item as User).status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'}`}>
                      {(item as User).status}
                    </span>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-500">
                    {(item as PerformanceIndicator).designation}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as PerformanceIndicator).department}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as PerformanceIndicator).approvedBy}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {(item as PerformanceIndicator).createdDate}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${(item as PerformanceIndicator).status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'}`}>
                      {(item as PerformanceIndicator).status}
                    </span>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTableListing;