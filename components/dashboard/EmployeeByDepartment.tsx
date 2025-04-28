import React from "react";
import {
  UserCheck,
  Briefcase,
  Users as Clients,
  CheckSquare,
  DollarSign,
  TrendingUp,
  UserPlus,
} from "lucide-react";
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

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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

const departmentData = {
  labels: ["UI/UX", "Development", "Management", "HR", "Testing", "Marketing"],
  datasets: [
    {
      label: "Number of Employees",
      data: [25, 12, 18, 8, 15, 10],
      backgroundColor: "rgba(243, 116, 56, 0.8)",
      borderColor: "rgba(243, 116, 56, 1)",
      borderWidth: 1,
      borderRadius: 10, // This makes both ends rounded
      borderSkipped: false, // Important for rounding both ends
    },
  ],
};

function EmployeeByDepartment() {
  return (
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
          Employees By Department
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
                  maxBarThickness: 25,
                  categoryPercentage: 0.8,
                  barPercentage: 0.9,
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeByDepartment;