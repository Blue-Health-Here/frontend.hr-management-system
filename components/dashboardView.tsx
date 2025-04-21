"use client";
import { Users, CalendarCheck, CalendarX, Clock } from "lucide-react";

import { NavigationProps } from "./types";
import { useRouter } from "next/navigation";

export default function DashboardView() {
  const router = useRouter();
  // Metrics data
  const metrics = [
    {
      title: "Total Employees",
      value: "10",
      icon: <Users className="text-blue-600" size={24} />,
      topBgColor: "bg-blue-100",
      description: "Across all departments",
      onClick: () => router.push('/employees')
    },
    {
      title: "Active Employees",
      value: "7",
      icon: <Users className="text-green-600" size={24} />,
      topBgColor: "bg-green-100",
      description: "Currently working"
    },
    {
      title: "On Leave",
      value: "2",
      icon: <CalendarX className="text-yellow-600" size={24} />,
      topBgColor: "bg-yellow-100",
      description: "Away from work"
    },
    {
      title: "Upcoming Leaves",
      value: "3",
      icon: <CalendarCheck className="text-red-600" size={24} />,
      topBgColor: "bg-red-100",
      description: "Approved leave requests"
    }
  ];

  // Currently on leave data
  const currentlyOnLeave = [
    { 
      name: "Sarah Williams", 
      jobTitle: "Senior Designer",
      image: "https://randomuser.me/api/portraits/women/43.jpg" 
    },
    { 
      name: "Michael Brown", 
      jobTitle: "Sales Representative",
      image: "https://randomuser.me/api/portraits/men/32.jpg" 
    }
  ];

  // Active employees data
  const activeEmployees = [
    { 
      name: "John Doe", 
      jobTitle: "Senior Software Engineer", 
      image: "https://randomuser.me/api/portraits/men/22.jpg" 
    },
    { 
      name: "Jane Smith", 
      jobTitle: "Marketing Manager", 
      image: "https://randomuser.me/api/portraits/women/33.jpg" 
    },
    { 
      name: "Alex Johnson", 
      jobTitle: "HR Coordinator", 
      image: "https://randomuser.me/api/portraits/men/45.jpg" 
    },
    { 
      name: "Emily Davis", 
      jobTitle: "Financial Analyst", 
      image: "https://randomuser.me/api/portraits/women/28.jpg" 
    },
    { 
      name: "Robert Wilson", 
      jobTitle: "Operations Specialist", 
      image: "https://randomuser.me/api/portraits/men/19.jpg" 
    },
    { 
      name: "Lisa Thompson", 
      jobTitle: "Sales Executive", 
      image: "https://randomuser.me/api/portraits/women/65.jpg" 
    },
    { 
      name: "David Lee", 
      jobTitle: "IT Support Engineer", 
      image: "https://randomuser.me/api/portraits/men/67.jpg" 
    }
  ];

  // HR overview data
  const hrOverview = {
    departments: 8,
    shiftsThisWeek: 11,
    pendingLeaveRequests: 2
  };

  // Current week data
  const currentWeek = {
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    dates: ["14", "15", "16", "17", "18", "19", "20"]
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-gray-100 pt-8 -mt-8 pb-2">
        <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
        <hr className="my-6 border-t border-gray-300" />
      </div>
      
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div 
            key={index} 
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
            onClick={metric.onClick || (() => {})}
          >
            <div className={`${metric.topBgColor} px-6 py-3`}>
              <div className="flex justify-between items-center">
                <p className="text-md font-semibold text-gray-800">
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

      {/* First Row Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* This Week's Shift */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">This Week's Shift</h2>
          </div>
          
          <div className="grid grid-cols-7 gap-1 mb-3">
            {currentWeek.days.map((day) => (
              <div key={day} className="text-center text-sm font-[550]">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {currentWeek.dates.map((date) => (
              <div key={date} className="text-center text-md text-gray-800">
                {date === "18" ? (
                  <div className="mx-auto w-8 h-8 flex items-center justify-center rounded-full border-sky-400 bg-sky-100">
                    {date}
                  </div>
                ) : (
                  date
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Currently On Leave */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-1">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Currently On Leave</h2>
          </div>
          <div className="space-y-3">
            {currentlyOnLeave.map((employee, index) => (
              <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded gap-3">
                <img 
                  src={employee.image} 
                  alt={employee.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 truncate">{employee.name}</p>
                  <p className="text-sm text-gray-500 truncate">{employee.jobTitle}</p>
                </div>
                <span className="text-xs font-medium text-yellow-800 whitespace-nowrap px-2 py-1 rounded-full bg-yellow-100">
                  on leave
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Employees */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-2">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Active Employees</h2>
          </div>
          <div className="h-[280px] overflow-y-auto pr-2">
            <div className="space-y-3">
              {activeEmployees.map((employee, index) => (
                <div key={index} className="flex items-center p-3 hover:bg-gray-50 rounded gap-3">
                  <img 
                    src={employee.image} 
                    alt={employee.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 truncate">{employee.name}</p>
                    <p className="text-sm text-gray-500 truncate">{employee.jobTitle}</p>
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap text-green-800 px-2 py-1 rounded-full bg-green-100">
                    active
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* HR Overview */}
        <div className="bg-white rounded-lg shadow-sm p-6 lg:col-span-1 h-fit">
          <div className="flex items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">HR Overview</h2>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Departments</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-1">
                  <div 
                    className="bg-blue-600 h-1" 
                    style={{ width: `${(hrOverview.departments / 10) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-gray-700">{hrOverview.departments}</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Shifts This Week</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-1">
                  <div 
                    className="bg-green-600 h-1" 
                    style={{ width: `${(hrOverview.shiftsThisWeek / 15) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-gray-700">{hrOverview.shiftsThisWeek}</span>
              </div>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-600 mb-1">Pending Leave Requests</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-gray-200 rounded-full h-1">
                  <div 
                    className="bg-yellow-600 h-1" 
                    style={{ width: `${(hrOverview.pendingLeaveRequests / 5) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-gray-700">{hrOverview.pendingLeaveRequests}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}