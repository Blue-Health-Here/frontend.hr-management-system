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
import EmployeeByDepartment from "./EmployeeByDepartment";
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
      </div>
    </div>
  );
}
