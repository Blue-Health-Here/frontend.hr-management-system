"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type Project = {
  id: string;
  name: string;
  team: string[];
  hours: number;
  totalHours: number;
  deadline: string;
  priority: "High" | "Medium" | "Low";
};

type TaskStats = {
  ongoing: number;
  onHold: number;
  overdue: number;
};

type ProjectsAndTasksProps = {
  projects: Project[];
  taskStats: TaskStats;
};

export default function ProjectsAndTasks({ projects, taskStats }: ProjectsAndTasksProps) {
  // Task Statistics Chart Data
  const taskStatsData = {
    labels: ["Ongoing", "On Hold", "Overdue"],
    datasets: [
      {
        data: [taskStats.ongoing, taskStats.onHold, taskStats.overdue],
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(255, 99, 132, 0.7)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "right" as const,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 mt-6">
      {/* Projects Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Projects</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deadline</th>
                <th className="px-3 sm:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Priority</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {projects.map((project) => {
                const progressPercentage = Math.min((project.hours / project.totalHours) * 100, 100);
                
                return (
                  <tr key={project.id}>
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">{project.id}</td>
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{project.name}</td>
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap">
                      <div className="flex -space-x-2">
                        {project.team.slice(0, 3).map((member, index) => (
                          <div 
                            key={index}
                            className="relative inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-300 border-2 border-white"
                          >
                            {member.startsWith('http') ? (
                              <img 
                                src={member} 
                                alt="Team member" 
                                className="w-full h-full rounded-full object-cover"
                              />
                            ) : (
                              <span className="text-xs font-medium text-gray-600">
                                {member.charAt(0).toUpperCase()}
                              </span>
                            )}
                          </div>
                        ))}
                        {project.team.length > 3 && (
                          <div className="relative inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-100 border-2 border-white">
                            <span className="text-xs font-medium text-gray-600">+{project.team.length - 3}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500">
                          {project.hours}/{project.totalHours} Hrs
                        </span>
                        <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                          <div 
                            className="bg-[#f26522] h-1.5 rounded-full" 
                            style={{ width: `${progressPercentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm text-gray-500">{project.deadline}</td>
                    <td className="px-3 sm:px-4 py-3 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.priority === "High" ? "bg-red-100 text-red-800" :
                        project.priority === "Medium" ? "bg-yellow-100 text-yellow-800" :
                        "bg-green-100 text-green-800"
                      }`}>
                        {project.priority}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Task Statistics Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Task Statistics</h2>
        <div className="flex flex-col items-center h-64">
          <div className="w-full h-48">
            <Doughnut data={taskStatsData} options={options} />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-4">
            {taskStatsData.labels.map((label, index) => (
              <div key={label} className="flex items-center">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: taskStatsData.datasets[0].backgroundColor[index] }}
                />
                <span className="text-sm text-gray-600">{label}: {taskStatsData.datasets[0].data[index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}