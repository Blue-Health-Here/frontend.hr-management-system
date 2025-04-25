"use client";
import { useRouter } from "next/navigation";
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
import { DashboardHeader } from "./dashboard/Header";
import EmployeeByDepartment from "./dashboard/EmployeeByDepartment";
import { StatsOverview } from "./dashboard/StatsOverview";
import DahboardCards from "./dashboard/DahboardCards";


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
  const router = useRouter();
 
  // Check-in/out employee data
  const checkInOutData = [
    {
      name: "John Smith",
      time: "9:05 AM",
      status: "Checked In",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      type: "success",
      jobTitle: "Frontend Developer",
    },
    {
      name: "Sarah Johnson",
      time: "8:55 AM",
      status: "Checked In",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      type: "success",
      jobTitle: "iOS Developer",
    },
    {
      name: "Michael Chen",
      time: "Not Checked In",
      status: "Not Checked In",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      type: "error",
      jobTitle: "Backend Engineer",
    },
    {
      name: "Emily Wilson",
      time: "WFH",
      status: "Remote",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      type: "info",
      jobTitle: "UX Designer",
    },
  ];

  // Attendance data
  const attendanceData = {
    present: 59,
    late: 21,
    permission: 2,
    absent: 15,
  };

  // Top performer data
  const topPerformer = {
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    jobTitle: "iOS Developer",
    performance: "99%",
  };


  return (
    <div className="p-8 bg-gray-100">
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
        attendanceData={attendanceData}
        checkInOutData={checkInOutData}
        topPerformer={topPerformer}
      />

      <DahboardCards/>

      
    </div>
  );
}