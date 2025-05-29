"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
// import { DashboardHeader } from "./Header";
import EmployeeByDepartment from "./EmployeeByDepartment";
// import DahboardCards from "./DahboardCards";
// import StatsAndInvoices from "./StatsAndInvoices";
// import ProjectsAndTasks from "./ProjectsAndTasks";
// import ActivityOverviewCard from "./ActivityOverviewCard";
// import { activityData, checkInOutData, invoices, leaveApplications, projects } from "@/utils/constants";
// import { StatsOverview } from "./StatsOverview";
// import { FiClock, FiUserCheck, FiUserX } from "react-icons/fi";
// import { useState } from "react";
// import LeaveApplicationStatus from "./LeaveApplicationStatus";
import AttendanceSummary from "./AttendanceSummary";
import LeaveApplicationCard from "./LeaveApplicationStatus";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function DashboardView() {
  return (
    <div className="space-y-6">
      <EmployeeByDepartment />
      <div className="flex flex-col lg:flex-row gap-6">
        <AttendanceSummary />
        <LeaveApplicationCard />

        {/* <div className="lg:w-1/3 bg-white p-4 lg:p-6 rounded-2xl shadow-md sm:h-80">
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
        </div> */}
      </div>
      {/* <StatsOverview
        attendanceData={{
          present: 59,
          late: 21,
          permission: 2,
          absent: 15,
        }}
        checkInOutData={checkInOutData}
        topPerformer={{
          name: "Sarah Johnson",
          image: "https://randomuser.me/api/portraits/women/44.jpg",
          jobTitle: "iOS Developer",
          performance: "99%",
        }}
      /> */}
      {/* <DahboardCards />
      <StatsAndInvoices invoices={invoices} />
      <ProjectsAndTasks projects={projects} taskStats={{
        ongoing: 45,
        onHold: 15,
        overdue: 10,
      }} />
      <ActivityOverviewCard
        schedules={activityData.schedules}
        activities={activityData.activities}
        birthdays={activityData.birthdays}
      /> */}
    </div>
  );
}
