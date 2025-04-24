"use client";
import {
  Users,
  CalendarCheck,
  CalendarX,
  Clock,
  Download,
  Calendar,
  FileText,
  Sheet,
  Plus,
  UserCheck,
  Briefcase,
  Users as Clients,
  CheckSquare,
  DollarSign,
  TrendingUp,
  UserPlus,
  Check,
  Clock4,
  Phone,
  MessageSquare,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
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
  const [todos, setTodos] = useState([
    { id: 1, text: "Add Holidays", completed: false },
    { id: 2, text: "Add Meeting to Client", completed: false },
    { id: 3, text: "Chat with Adrian", completed: false },
    { id: 4, text: "Manage Call", completed: false },
    { id: 5, text: "Add Payroll", completed: false },
    { id: 6, text: "Add Policy for Increment", completed: false },
  ]);

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Sample data for the bar chart (horizontal bars)
  const departmentData = {
    labels: [
      "UI/UX",
      "Development",
      "Management",
      "HR",
      "Testing",
      "Marketing",
    ],
    datasets: [
      {
        label: "Number of Employees",
        data: [25, 12, 18, 8, 15, 10],
        backgroundColor: "rgba(243, 116, 56, 0.8)",
        borderColor: "rgba(243, 116, 56, 1)",
        borderWidth: 1,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 10,
          bottomRight: 10,
        },
      },
    ],
  };

  const metrics = [
    [
      {
        title: "Attendance",
        value: "95%",
        icon: <UserCheck className="text-blue-600" size={24} />,
        change: "+2% from last week",
      },
      {
        title: "Total Projects",
        value: "24",
        icon: <Briefcase className="text-green-600" size={24} />,
        change: "5 ongoing",
      },
      {
        title: "Total Clients",
        value: "48",
        icon: <Clients className="text-purple-600" size={24} />,
        change: "+3 this month",
      },
      {
        title: "Total Tasks",
        value: "127",
        icon: <CheckSquare className="text-orange-600" size={24} />,
        change: "32 completed",
      },
    ],
    [
      {
        title: "Earnings",
        value: "$24,500",
        icon: <DollarSign className="text-indigo-600" size={24} />,
        change: "+12% from last month",
      },
      {
        title: "Profit This Week",
        value: "$3,200",
        icon: <TrendingUp className="text-teal-600" size={24} />,
        change: "+$450 from last week",
      },
      {
        title: "Job Applicants",
        value: "14",
        icon: <UserPlus className="text-pink-600" size={24} />,
        change: "3 interviews scheduled",
      },
      {
        title: "New Hire",
        value: "2",
        icon: <UserPlus className="text-amber-600" size={24} />,
        change: "1 this week",
      },
    ],
  ];

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

  // Job applicants data
  const jobApplicants = [
    {
      name: "Alex Johnson",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      jobTitle: "Senior Developer",
      experience: "5+ years",
      location: "USA",
      opening: "Frontend Engineer",
    },
    {
      name: "Maria Garcia",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      jobTitle: "UX Designer",
      experience: "3+ years",
      location: "Canada",
      opening: "UI/UX Designer",
    },
    {
      name: "David Kim",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      jobTitle: "DevOps Engineer",
      experience: "4+ years",
      location: "UK",
      opening: "Cloud Architect",
    },
    {
      name: "Sarah Williams",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      jobTitle: "Product Manager",
      experience: "6+ years",
      location: "Australia",
      opening: "Product Lead",
    },
  ];

  // Employees data
  const employees = [
    {
      name: "Robert Chen",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      department: "Development",
      jobTitle: "Full Stack Developer",
    },
    {
      name: "Lisa Wong",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      department: "Marketing",
      jobTitle: "Digital Marketer",
    },
    {
      name: "James Wilson",
      image: "https://randomuser.me/api/portraits/men/72.jpg",
      department: "HR",
      jobTitle: "HR Manager",
    },
    {
      name: "Sophia Martinez",
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      department: "UI/UX",
      jobTitle: "UI Designer",
    },
    {
      name: "Michael Johnson",
      image: "https://randomuser.me/api/portraits/men/42.jpg",
      department: "Testing",
      jobTitle: "QA Engineer",
    },
  ];

  // Attendance data
  const attendanceData = {
    present: 59,
    late: 21,
    permission: 2,
    absent: 15,
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* Header with export dropdown and calendar button */}
      <div className="flex justify-between items-center bg-gray-100 pb-2">
        <h1 className="text-2xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>

        <div className="flex items-center gap-3">
          {/* Export Dropdown */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
                <Download className="h-4 w-4" />
                Export
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } flex items-center w-full px-3 py-2 text-sm`}
                      >
                        <FileText className="mr-2 h-4 w-4" />
                        Export as PDF
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                        } flex items-center w-full px-3 py-2 text-sm`}
                      >
                        <Sheet className="mr-2 h-4 w-4" />
                        Export as Excel
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Calendar Button */}
          <button className="inline-flex items-center gap-0.5 rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
            <Calendar className="h-3.5 w-3.5" />
            2025
          </button>
        </div>
      </div>

      {/* Welcome section with action buttons */}
      <div className="flex justify-between items-center mb-8 bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-bold text-[#212529]">
              Welcome Back, Adrian
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              You have 21 Pending Approvals & 14 Leave Requests
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Add Project Button */}
          <button className="inline-flex items-center gap-2 rounded-md bg-[#3b7080] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none">
            <span className="inline-flex items-center justify-center w-3 h-3 border border-white rounded-sm">
              <Plus className="h-2 w-2 text-white  " />
            </span>
            Add Project
          </button>

          {/* Add Requests Button */}
          <button className="inline-flex items-center gap-2 rounded-md bg-[#f26522] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none">
            <span className="inline-flex items-center justify-center w-3 h-3 border border-white rounded-sm">
              <Plus className="h-2 w-2" />
            </span>
            Add Requests
          </button>
        </div>
      </div>

      {/* Combined Metrics and Chart Section */}
      <div className="flex flex-col lg:flex-row gap-6 mb-8">
        {/* Metrics Grid - Now takes 2/3 width */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.flat().map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {metric.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">
                    {metric.value}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{metric.change}</p>
                </div>
                <div className="p-2 rounded-md bg-gray-100">{metric.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Employee By Department Chart - Now takes 1/3 width */}
        <div className="lg:w-1/3 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Employee By Department
          </h2>
          <div className="h-80">
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
                      display: true,
                      font: {
                        weight: "bold",
                      },
                    },
                    grid: {
                      display: false,
                    },
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
                    barThickness: 10,
                    maxBarThickness: 15,
                    categoryPercentage: 0.8,
                    barPercentage: 0.9,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>

      {/* New Three Section Layout */}
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
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Top Performer"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-800">Sarah Johnson</p>
                <p className="text-sm text-gray-600">iOS Developer</p>
                <p className="text-sm font-medium text-green-600">
                  Performance: 99%
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

          {/* Semi-circular doughnut chart */}
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
                        "#055160", // Present - Green
                        "#ffc107", // Late - Dark Gray
                        "#069f58", // Permission - Yellow
                        "#ef182c", // Red for Absent
                      ],
                      borderColor: [
                        "#055160", // Present - Green
                        "#ffc107", // Late - Dark Gray
                        "#069f58", // Permission - Yellow
                        "#ef182c", // Red for Absent
                      ],
                      borderWidth: 1,
                      circumference: 180, // 180 degrees for semi-circle
                      rotation: 270, // Rotate to start from bottom
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
                <span className="text-sm font-medium text-gray-600">
                  Present
                </span>
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
                <span className="text-sm font-medium text-gray-600">
                  Absent
                </span>
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
                      <p className="font-medium text-gray-800">
                        {employee.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {employee.jobTitle}
                      </p>
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

      {/* New Three Section Layout - Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Job Applicants Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Job Applicants
          </h2>

          <div className="space-y-4">
            {jobApplicants.map((applicant, index) => (
              <div key={index} className="p-1">
                <div className="flex items-center gap-3">
                  <img
                    src={applicant.image}
                    alt="Applicant"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full">
                      <p className="font-medium text-gray-800">
                        {applicant.name}
                      </p>
                      <span
                        className={`text-xs font-medium text-white px-3 py-1 rounded-md ${
                          applicant.jobTitle.includes("Developer")
                            ? "bg-blue-500"
                            : applicant.jobTitle.includes("Designer")
                            ? "bg-purple-500"
                            : applicant.jobTitle.includes("Engineer")
                            ? "bg-green-500"
                            : "bg-orange-500"
                        }`}
                      >
                        {applicant.jobTitle}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Exp: {applicant.experience} • {applicant.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Employees Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Employees
          </h2>

          <div className="space-y-2">
            {employees.map((employee, index) => (
              <div key={index}>
                <div className="flex items-center justify-between py-1">
                  <div className="flex items-center gap-3">
                    <img
                      src={employee.image}
                      alt="Employee"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {employee.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {employee.jobTitle}
                      </p>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${
                      employee.department === "Development"
                        ? "bg-blue-100 text-blue-800"
                        : employee.department === "Marketing"
                        ? "bg-purple-100 text-purple-800"
                        : employee.department === "HR"
                        ? "bg-green-100 text-green-800"
                        : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {employee.department}
                  </span>
                </div>
                {index !== employees.length - 1 && (
                  <div className="border-t border-gray-100 my-1"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Todo List Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Todo</h2>

          <div className="space-y-2">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center p-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
              >
                {/* Nine dots icon */}
                <div className="mr-2 text-gray-400 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                    <circle cx="5" cy="12" r="1" />
                    <circle cx="19" cy="12" r="1" />
                    <circle cx="5" cy="5" r="1" />
                    <circle cx="19" cy="5" r="1" />
                    <circle cx="5" cy="19" r="1" />
                    <circle cx="19" cy="19" r="1" />
                  </svg>
                </div>

                {/* Smaller checkbox */}
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-4 h-4 rounded mr-2 flex items-center justify-center ${
                    todo.completed ? "bg-green-500" : "border border-gray-300"
                  }`}
                >
                  {todo.completed && <Check className="w-3 h-3 text-white" />}
                </button>

                {/* Smaller text */}
                <span
                  className={`text-sm ${
                    todo.completed
                      ? "line-through text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {todo.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
