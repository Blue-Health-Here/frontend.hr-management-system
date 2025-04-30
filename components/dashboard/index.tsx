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
import { DashboardHeader } from "./Header";
import EmployeeByDepartment from "./EmployeeByDepartment";
import DahboardCards from "./DahboardCards";
import StatsAndInvoices from "./StatsAndInvoices";
import ProjectsAndTasks from "./ProjectsAndTasks";
import ActivityOverviewCard from "./ActivityOverviewCard";
import { activityData, checkInOutData, invoices, projects } from "@/utils/constants";
import { StatsOverview } from "./StatsOverview";

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
    <div className="">
      <DashboardHeader
        user={{
          name: "Adrian",
          image: "https://randomuser.me/api/portraits/men/32.jpg",
          pendingApprovals: 21,
          leaveRequests: 14,
        }}
      />
      <EmployeeByDepartment />
      <StatsOverview
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
      />
      <DahboardCards />
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
      />
    </div>
  );
}
