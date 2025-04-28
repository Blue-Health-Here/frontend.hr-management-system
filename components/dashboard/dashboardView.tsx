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
import { DashboardHeader } from "./Header";
import EmployeeByDepartment from "./EmployeeByDepartment";
import { StatsOverview } from "./StatsOverview";
import DahboardCards from "./DahboardCards";
import StatsAndInvoices from "./StatsAndInvoices";
import ProjectsAndTasks from "./ProjectsAndTasks";
import ActivityOverviewCard from "./ActivityOverviewCard";

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

  const invoices = [
    {
      id: 1,
      employeeName: "John Smith",
      employeeImage: "https://randomuser.me/api/portraits/men/32.jpg",
      amount: "1,250.00",
      status: "paid",
    },
    {
      id: 2,
      employeeName: "Sarah Johnson",
      employeeImage: "https://randomuser.me/api/portraits/women/44.jpg",
      amount: "980.50",
      status: "paid",
    },
    {
      id: 3,
      employeeName: "Michael Chen",
      employeeImage: "https://randomuser.me/api/portraits/men/75.jpg",
      amount: "2,150.00",
      status: "unpaid",
    },
    {
      id: 4,
      employeeName: "Emily Wilson",
      employeeImage: "https://randomuser.me/api/portraits/women/68.jpg",
      amount: "1,750.00",
      status: "paid",
    },
  ];

  const projects = [
    {
      id: "PRJ-001",
      name: "Website Redesign",
      team: [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/women/68.jpg",
      ],
      hours: 15,
      totalHours: 255,
      deadline: "2023-06-15",
      priority: "High" as const,
    },
    {
      id: "PRJ-002",
      name: "API Integration",
      team: [
        "https://randomuser.me/api/portraits/men/75.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
      ],
      hours: 40,
      totalHours: 255,
      deadline: "2023-06-20",
      priority: "Medium" as const,
    },
    {
      id: "PRJ-003",
      name: "Database Migration",
      team: ["https://randomuser.me/api/portraits/men/75.jpg"],
      hours: 70,
      totalHours: 255,
      deadline: "2023-06-25",
      priority: "Low" as const,
    },
    {
      id: "PRJ-004",
      name: "Mobile App Update",
      team: [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/women/68.jpg",
      ],
      hours: 90,
      totalHours: 255,
      deadline: "2023-06-18",
      priority: "High" as const,
    },
  ];

  const taskStats = {
    ongoing: 45,
    onHold: 15,
    overdue: 10,
  };

  // Update your activityData with proper type assertions
  const activityData = {
    schedules: [
      {
        title: "UI/UX Designer Interview",
        description: "Final round interview for senior position",
        timeRange: "Today, 10:00 AM - 11:30 AM",
        candidates: [
          "https://randomuser.me/api/portraits/women/44.jpg",
          "https://randomuser.me/api/portraits/men/32.jpg",
          "https://randomuser.me/api/portraits/women/65.jpg",
        ],
        meetingType: "interview" as const, // Add 'as const' assertion
      },
      {
        title: "Quarterly Business Review",
        description: "Q1 performance review with stakeholders",
        timeRange: "Wed, 15 May 2024 02:00 PM - 03:30 PM",
        candidates: [
          "https://randomuser.me/api/portraits/men/75.jpg",
          "https://randomuser.me/api/portraits/women/68.jpg",
        ],
        meetingType: "review" as const, // Add 'as const' assertion
      },
    ],
    activities: [
      {
        userName: "Sarah Johnson",
        action: "Completed login page redesign",
        time: "10 minutes ago",
        userImage: "https://randomuser.me/api/portraits/women/44.jpg",
        activityType: "task" as const, // Add 'as const' assertion
      },
      {
        userName: "Michael Chen",
        action: "Created new project: Customer Portal 2.0",
        time: "1 hour ago",
        userImage: "https://randomuser.me/api/portraits/men/75.jpg",
        activityType: "project" as const, // Add 'as const' assertion
      },
      {
        userName: "Emily Wilson",
        action: "Commented on API documentation draft",
        time: "2 hours ago",
        userImage: "https://randomuser.me/api/portraits/women/68.jpg",
        activityType: "comment" as const, // Add 'as const' assertion
      },
      {
        userName: "David Kim",
        action: "Updated project timeline for Q2",
        time: "Yesterday, 4:30 PM",
        userImage: "https://randomuser.me/api/portraits/men/30.jpg",
        activityType: "update" as const, // Add 'as const' assertion
      },
      {
        userName: "Alex Morgan",
        action: "Merged PR #1245: Fix navigation bug",
        time: "Yesterday, 3:15 PM",
        userImage: "https://randomuser.me/api/portraits/men/42.jpg",
        activityType: "task" as const, // Add 'as const' assertion
      },
    ],
    birthdays: [
      {
        name: "Jessica Parker",
        role: "iOS Developer",
        date: "May 15, 1990",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        isToday: true,
      },
      {
        name: "Robert Chen",
        role: "DevOps Engineer",
        date: "May 18, 1988",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        isToday: false,
      },
      {
        name: "Lisa Wong",
        role: "Marketing Director",
        date: "May 22, 1985",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        isToday: false,
      },
      {
        name: "James Wilson",
        role: "HR Manager",
        date: "May 25, 1982",
        image: "https://randomuser.me/api/portraits/men/72.jpg",
        isToday: false,
      },
    ],
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

      <DahboardCards />

      <StatsAndInvoices invoices={invoices} />

      <ProjectsAndTasks projects={projects} taskStats={taskStats} />

      <ActivityOverviewCard
        schedules={activityData.schedules}
        activities={activityData.activities}
        birthdays={activityData.birthdays}
      />
    </div>
  );
}
