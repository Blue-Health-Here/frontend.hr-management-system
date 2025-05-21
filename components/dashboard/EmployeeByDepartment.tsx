import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import MetricCard from "../common/MetricCard";
import { metrics } from "@/utils/constants";
import { FiUserCheck, FiUserX, FiClock } from "react-icons/fi"; // Import icons

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const departmentData = {
  labels: ["UI/UX", "Development", "Management", "HR", "Testing", "Marketing"],
  datasets: [
    {
      label: "Number of Employees",
      data: [25, 12, 18, 8, 15, 10],
      backgroundColor: "#16a34a",
      borderWidth: 1,
      borderRadius: 0,
      borderSkipped: false,
    },
  ],
};

function EmployeeByDepartment() {
  const [selectedButtons, setSelectedButtons] = useState<Record<string, string>>({});

  const handleButtonClick = (applicationId: string, action: string) => {
    setSelectedButtons(prev => ({
      ...prev,
      [applicationId]: action
    }));
  };

  const leaveApplications = [
    {
      id: "1",
      name: "Madeline Brooks",
      type: "Vacation Leave",
      recentApprovals: [
        { name: "Amelia Taylor", date: "Apr 24" },
        { name: "Daniel Green", date: "Apr 22" }
      ]
    },
    {
      id: "2",
      name: "John Smith",
      type: "Sick Leave (Apr 25-Apr 28)",
      recentApprovals: [
        { name: "Sarah Johnson", date: "Apr 20" },
        { name: "Michael Brown", date: "Apr 18" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Team Overview and Employees By Department section */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:w-2/3 bg-white p-4 lg:p-6 rounded-2xl shadow-md">
          <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">
            Team Overview
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard
                key={`metric-${index}`}
                title={metric.title}
                value={metric.value}
                icon={metric.icon}
                percentage={metric.percent}
                percentageColor={metric.percentColor}
                textColor={metric.textColor}
                iconBgColor={metric.iconBgColor}
              />
            ))}
          </div>
        </div>

        <div className="lg:w-1/3 bg-white p-4 lg:p-6 rounded-2xl shadow-md">
          <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">
            Employees By Department
          </h2>
          <div className="h-64 lg:h-[350px] -mx-2 lg:mx-0">
            <Bar
              data={departmentData}
              options={{
                indexAxis: "y",
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  x: {
                    beginAtZero: true,
                    title: {
                      display: true,
                      text: 'Number of Employees',
                      font: {
                        weight: "bold",
                      },
                    },
                    grid: {
                      display: false,
                    },
                  },
                  y: {
                    title: {
                      display: false,
                    },
                    grid: {
                      display: false,
                    },
                    ticks: {
                      font: {
                        size: 12
                      }
                    }
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        return `${context.parsed.x} employees`;
                      },
                    },
                  },
                },
                datasets: {
                  bar: {
                    barThickness: 30,
                    maxBarThickness: 25,
                    categoryPercentage: 0.9,
                    barPercentage: 0.9,
                  },
                },
                layout: {
                  padding: {
                    left: 10,
                    right: 20
                  }
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Attendance Summary section */}
      <div className="bg-white p-4 lg:p-6 rounded-2xl shadow-md">
        <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">
          Attendance Summary
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col">
              <span className="text-gray-600 mb-2">Present Today</span>
              <span className="text-xl font-bold text-gray-800">100</span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col">
              <span className="text-gray-600 mb-2">Absent</span>
              <span className="text-xl font-bold text-gray-800">7</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col">
              <span className="text-gray-600 mb-2">On Leave</span>
              <span className="text-xl font-bold text-gray-800">5</span>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col">
              <span className="text-gray-600 mb-2">Early Departures Count</span>
              <span className="text-xl font-bold text-gray-800">2</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-base text-gray-800 mb-2">
            Today's Shifts Summary
          </h3>
        </div>
      </div>

      {/* Leave Application Status and Attendance Summary side by side */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Leave Application Status section */}
        <div className="lg:w-2/3 bg-white p-4 lg:p-6 rounded-2xl shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-base lg:text-lg font-semibold text-gray-800">
              Leave Application Status
            </h2>
            <div className="flex gap-4">
              <button className="text-sm text-gray-600 hover:text-gray-800">Today</button>
              <button className="text-sm text-gray-600 hover:text-gray-800">This Week</button>
              <button className="text-sm text-gray-600 hover:text-gray-800">All</button>
            </div>
          </div>

          <div className="space-y-4">
            {leaveApplications.map((application) => (
              <div key={application.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-100 last:border-b-0">
                <div className="mb-2 sm:mb-0">
                  <p className="font-medium text-gray-800">{application.name}</p>
                  <p className="text-sm text-gray-600">{application.type}</p>
                </div>
                <div className="flex gap-2 mb-2 sm:mb-0">
                  <button
                    className={`px-3 py-1 rounded-md text-sm ${
                      selectedButtons[application.id] === 'approve'
                        ? 'bg-green-600 text-white'
                        : 'bg-green-100 text-green-800 hover:bg-green-200'
                    }`}
                    onClick={() => handleButtonClick(application.id, 'approve')}
                  >
                    Approve
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm ${
                      selectedButtons[application.id] === 'reject'
                        ? 'bg-red-600 text-white'
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}
                    onClick={() => handleButtonClick(application.id, 'reject')}
                  >
                    Reject
                  </button>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  <p className="font-medium text-gray-600 mb-1">Recent Approvals</p>
                  <div className="space-y-1">
                    {application.recentApprovals.map((approval, index) => (
                      <div key={index}>
                        <p>{approval.name}</p>
                        <p className="text-xs">{approval.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        <div className="lg:w-1/3 bg-white p-4 lg:p-6 rounded-2xl shadow-md sm:h-80">
          <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">
            Attendance Summary
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <FiUserCheck className="text-green-500 mr-3 text-lg" />
                <span className="text-gray-600">Present Today</span>
              </div>
              <span className="font-bold text-gray-800">100</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <FiUserX className="text-red-500 mr-3 text-lg" />
                <span className="text-gray-600">Absent (Without Leave)</span>
              </div>
              <span className="font-bold text-gray-800">7</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <FiClock className="text-yellow-500 mr-3 text-lg" />
                <span className="text-gray-600">On Leave</span>
              </div>
              <span className="font-bold text-gray-800">5</span>
            </div>
          </div>
          
          <div className="mt-6">
            <h3 className="text-base text-gray-800 mb-2">
              Today's Shift Summary
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeByDepartment;