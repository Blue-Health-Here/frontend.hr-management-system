"use client";

import { Users, CalendarCheck, CalendarX, Clock } from "lucide-react";

export default function Dashboard() {
  const metrics = [
    {
      title: "Total Employees",
      value: "124",
      icon: <Users className="text-blue-600" size={24} />,
      topBgColor: "bg-blue-100",
      description: "Across all departments",
    },
    {
      title: "Active Employees",
      value: "112",
      icon: <Users className="text-green-600" size={24} />,
      topBgColor: "bg-green-100",
      description: "Currently working",
    },
    {
      title: "On Leave",
      value: "8",
      icon: <CalendarX className="text-yellow-600" size={24} />,
      topBgColor: "bg-yellow-100",
      description: "Away from work",
    },
    {
      title: "Upcoming Leaves",
      value: "4",
      icon: <CalendarCheck className="text-red-600" size={24} />,
      topBgColor: "bg-red-100",
      description: "Approved leave requests",
    },
  ];

  const currentlyOnLeave = [
    { name: "Sarah Williams", department: "Design" },
    { name: "Michael Brown", department: "Sales" }
  ];

  const activeEmployees = [
    { name: "John Doe", department: "Engineering", status: "Working" },
    { name: "Jane Smith", department: "Marketing", status: "In Office" },
    { name: "Alex Johnson", department: "HR", status: "Remote" },
    { name: "Emily Davis", department: "Finance", status: "In Office" },
    { name: "Robert Wilson", department: "Operations", status: "Remote" },
    { name: "Lisa Thompson", department: "Sales", status: "In Office" },
    { name: "David Lee", department: "IT", status: "Remote" }
  ];

  const hrOverview = {
    newHires: 3,
    terminations: 1,
    promotions: 2
  };

  const currentWeek = {
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    dates: ["14", "15", "16", "17", "18", "19", "20"]
  };

  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
      <hr className="my-6 border-t border-gray-300" />
      
      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <div className={`${metric.topBgColor} px-6 py-4`}>
              <div className="flex justify-between items-center">
                <p className="text-sm font-medium text-gray-600">
                  {metric.title}
                </p>
                <div className="p-2 rounded-full bg-white bg-opacity-80">
                  {metric.icon}
                </div>
              </div>
            </div>
            <div className="p-6">
              <p className="text-3xl font-bold text-gray-800 mb-1">
                {metric.value}
              </p>
              <p className="text-xs text-gray-500">
                {metric.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* First Row of Bottom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* This Week's Shift */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">This Week's Shift</h2>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-1">
            {currentWeek.days.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {currentWeek.dates.map((date) => (
              <div key={date} className="text-center text-lg font-bold text-gray-800">
                {date}
              </div>
            ))}
          </div>
        </div>

        {/* Currently On Leave */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-1">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Currently On Leave ({currentlyOnLeave.length})</h2>
          </div>
          <div className="space-y-3">
            {currentlyOnLeave.map((employee, index) => (
              <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded">
                <div>
                  <p className="font-medium text-gray-800">{employee.name}</p>
                  <p className="text-sm text-gray-500">{employee.department}</p>
                </div>
                <span className="text-xs font-medium text-yellow-600">
                  On Leave
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row of Bottom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Employees - Scrollable */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Active Employees ({activeEmployees.length})</h2>
          </div>
          <div className="max-h-64 overflow-y-auto pr-2">
            <div className="space-y-3">
              {activeEmployees.map((employee, index) => (
                <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded">
                  <div>
                    <p className="font-medium text-gray-800">{employee.name}</p>
                    <p className="text-sm text-gray-500">{employee.department}</p>
                  </div>
                  <span className={`text-xs font-medium ${
                    employee.status === "Remote" ? "text-purple-600" : "text-green-600"
                  }`}>
                    {employee.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HR Overview - Fixed Height */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-1 h-fit">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">HR Overview</h2>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3">
              <span className="text-sm font-medium text-gray-600">New Hires</span>
              <span className="text-lg font-bold text-blue-600">{hrOverview.newHires}</span>
            </div>
            <div className="flex justify-between items-center p-3">
              <span className="text-sm font-medium text-gray-600">Terminations</span>
              <span className="text-lg font-bold text-red-600">{hrOverview.terminations}</span>
            </div>
            <div className="flex justify-between items-center p-3">
              <span className="text-sm font-medium text-gray-600">Promotions</span>
              <span className="text-lg font-bold text-green-600">{hrOverview.promotions}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}