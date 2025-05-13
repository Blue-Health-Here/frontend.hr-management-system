"use client";
import React, { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";
import { employeeData } from "@/utils/constants";
import { Employees, PerformanceIndicator } from "@/utils/types";
import DataTableListing from "../leaves/DataTableListing";
import Link from "next/link";

const PerformanceIndicatorPage = () => {
  const [employees] = useState<Employees[]>(employeeData);
  const [sortOption, setSortOption] = useState<string>("");

  const performanceData: PerformanceIndicator[] = employees.map((employee) => {
    const statuses: ("Active" | "Inactive")[] = ["Active", "Inactive"];
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
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Performance Indicator</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-auto">
          <Link
            href="/performance-indicator/add"
            className="flex items-center justify-center xs:justify-start gap-1 px-4 py-2 bg-[#f26522] text-white rounded-md text-sm font-semibold hover:bg-[#e05b1a] transition-colors w-auto"
          >
            <Plus className="h-3 w-3" />
            <span>Add Indicator</span>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="bg-white p-4 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-semibold">
              Performance Indicator List
            </h2>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
              <div className="relative w-[170px] sm:w-44">
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="block w-full pl-3 pr-7 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md appearance-none bg-white"
                >
                  <option value="">Sort By : Last 7 Days</option>
                  <option value="ascending">A-Z</option>
                </select>
                <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <DataTableListing indicators={filteredIndicators} />
      </div>
    </>
  );
};

export default PerformanceIndicatorPage;