import React from "react";
import { Check } from "lucide-react";
import { useState } from "react";

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

const activityData = {
  schedules: [
    {
      title: "UI/UX Designer",
      description: "Interview Candidates - UI/UX Designer",
      timeRange: "Thu, 15 Feb 2025 01:00 PM - 02:20 PM",
      candidates: [
        "https://randomuser.me/api/portraits/women/44.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg"
      ]
    }
  ],
  activities: [
    {
      userName: "Matt Morgan",
      action: "Added New Project HRMS Dashboard",
      time: "05:30",
      userImage: "https://randomuser.me/api/portraits/men/75.jpg"
    }
  ],
  birthdays: [
    {
      name: "iOS Developer",
      role: "iOS Developer",
      date: "Today",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ]
};

function DahboardCards() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Add Holidays", completed: false },
    { id: 2, text: "Add Meeting to Client", completed: false },
    { id: 3, text: "Chat with Adrian", completed: false },
    { id: 4, text: "Manage Call", completed: false },
    { id: 5, text: "Add Payroll", completed: false },
    { id: 6, text: "Add Policy for Increment", completed: false },
  ]);

  const toggleTodo = (id: any) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {/* Job Applicants Section */}
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
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
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-gray-800 text-sm lg:text-base truncate">
                      {applicant.name}
                    </p>
                    <span
                      className={`text-xs font-medium text-white px-2 py-1 lg:px-3 lg:py-1 rounded-md flex-shrink-0 ${
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
                  <div className="text-xs text-gray-500 truncate">
                    Exp: {applicant.experience} • {applicant.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Employees Section */}
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Employees</h2>

        <div className="space-y-2">
          {employees.map((employee, index) => (
            <div key={index}>
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-3">
                  <img
                    src={employee.image}
                    alt="Employee"
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-800 text-sm lg:text-base">
                      {employee.name}
                    </p>
                    <p className="text-xs lg:text-sm text-gray-600">{employee.jobTitle}</p>
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
      <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
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
                className={`text-xs lg:text-sm ${
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
  );
}

export default DahboardCards;