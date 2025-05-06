"use client";
import React, { useState } from "react";
import { Plus } from "lucide-react";
import { employeeData } from "@/utils/constants";
import { Employees, PerformanceIndicator } from "@/utils/types";
import DataTableListing from "../leaves/DataTableListing";

const PerformanceIndicatorPage = () => {
  const [employees] = useState<Employees[]>(employeeData);
  const [sortOption, setSortOption] = useState<string>("");

  const performanceData: PerformanceIndicator[] = employees.map((employee) => {
    const statuses: ('Active' | 'Inactive')[] = ['Active', 'Inactive'];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    
    return {
      id: employee.id,
      designation: employee.designation || "Software Engineer",
      department: employee.department,
      approvedBy: ["Manager", "HR", "Team Lead"][Math.floor(Math.random() * 3)],
      createdDate: new Date(
        Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      status: randomStatus,
    };
  });

  const filteredIndicators = performanceData.sort((a, b) => {
    if (sortOption === "ascending") {
      return a.designation.localeCompare(b.designation);
    }
    return 0;
  });

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Performance Indicator</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:w-auto">
          <button className="flex items-center justify-center text-nowrap xs:justify-start gap-1 px-4 py-2 bg-[#f26522] text-white rounded-md text-sm font-semibold hover:bg-[#e05b1a] transition-colors w-full xs:w-auto">
            <Plus className="h-3 w-3" />
            <span>Add Indicator</span>
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="bg-white p-4 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-semibold">Performance Indicator List</h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <div className="w-full sm:w-36">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option value="">Sort By</option>
                  <option value="ascending">Designation (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <DataTableListing indicators={filteredIndicators} />
      </div>
    </div>
  );
};

export default PerformanceIndicatorPage;