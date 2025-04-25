"use client";

import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

interface Employee {
  name: string;
  image: string;
  time: string;
  status: string;
  type: string;
  jobTitle: string;
}

interface AttendanceData {
  present: number;
  late: number;
  permission: number;
  absent: number;
}

interface TopPerformer {
  name: string;
  image: string;
  jobTitle: string;
  performance: string;
}

interface StatsOverviewProps {
  attendanceData: AttendanceData;
  checkInOutData: Employee[];
  topPerformer: TopPerformer;
}

export function StatsOverview({
  attendanceData,
  checkInOutData,
  topPerformer,
}: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Employee Status Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Employee Status
        </h2>

        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-700 mb-2">
            Total Employees
          </h3>
          <p className="text-3xl font-bold text-gray-800">78</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Full Time</p>
            <p className="text-xl font-bold text-blue-600">65%</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Contract</p>
            <p className="text-xl font-bold text-purple-600">20%</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">Probation</p>
            <p className="text-xl font-bold text-yellow-600">10%</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600">WFH</p>
            <p className="text-xl font-bold text-green-600">5%</p>
          </div>
        </div>

        <div>
          <h3 className="text-md font-medium text-gray-700 mb-3">
            Top Performer
          </h3>
          <div className="flex items-center gap-4">
            <img
              src={topPerformer.image}
              alt="Top Performer"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-800">{topPerformer.name}</p>
              <p className="text-sm text-gray-600">{topPerformer.jobTitle}</p>
              <p className="text-sm font-medium text-green-600">
                Performance: {topPerformer.performance}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Overview Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Attendance Overview
        </h2>

        <div className="h-48 flex justify-center mb-6">
          <div className="w-48 relative">
            <Doughnut
              data={{
                labels: ["Present", "Late", "Permission", "Absent"],
                datasets: [
                  {
                    data: [
                      attendanceData.present,
                      attendanceData.late,
                      attendanceData.permission,
                      attendanceData.absent,
                    ],
                    backgroundColor: [
                      "#055160",
                      "#ffc107",
                      "#069f58",
                      "#ef182c",
                    ],
                    borderColor: [
                      "#055160",
                      "#ffc107",
                      "#069f58",
                      "#ef182c",
                    ],
                    borderWidth: 1,
                    circumference: 180,
                    rotation: 270,
                  },
                ],
              }}
              options={{
                cutout: "60%",
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      boxWidth: 12,
                      padding: 20,
                    },
                  },
                  tooltip: {
                    callbacks: {
                      label: function (context) {
                        return `${context.label}: ${context.raw}%`;
                      },
                    },
                  },
                },
              }}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-3xl font-bold text-gray-800">
                {attendanceData.present}%
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="text-md font-medium text-gray-700">
            Total Attendance
          </h3>
          <p className="text-3xl font-bold text-gray-800">120</p>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-[#055160] rounded-full mr-2"></span>
              <span className="text-sm font-medium text-gray-600">Present</span>
            </div>
            <span className="text-sm font-bold text-gray-800">
              {attendanceData.present}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-[#ffc107] rounded-full mr-2"></span>
              <span className="text-sm font-medium text-gray-600">Late</span>
            </div>
            <span className="text-sm font-bold text-gray-800">
              {attendanceData.late}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-[#069f58] rounded-full mr-2"></span>
              <span className="text-sm font-medium text-gray-600">
                Permission
              </span>
            </div>
            <span className="text-sm font-bold text-gray-800">
              {attendanceData.permission}%
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-[#ef182c] rounded-full mr-2"></span>
              <span className="text-sm font-medium text-gray-600">Absent</span>
            </div>
            <span className="text-sm font-bold text-gray-800">
              {attendanceData.absent}%
            </span>
          </div>
        </div>
      </div>

      {/* Check In/Out Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Check In/Out
        </h2>

        <div className="space-y-4">
          {checkInOutData.map((employee, index) => (
            <div
              key={index}
              className="p-3 border border-dashed border-gray-300 rounded-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={employee.image}
                    alt="Employee"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800">{employee.name}</p>
                    <p className="text-xs text-gray-500">{employee.jobTitle}</p>
                  </div>
                </div>
                <span
                  className={`text-sm font-medium ${
                    employee.type === "success"
                      ? "text-green-600"
                      : employee.type === "error"
                      ? "text-red-600"
                      : "text-blue-600"
                  }`}
                >
                  {employee.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}