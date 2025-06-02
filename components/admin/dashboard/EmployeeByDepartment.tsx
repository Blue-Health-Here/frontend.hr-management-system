import React from "react";
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
import MetricCard from "../../common/MetricCard";
import { metrics } from "@/utils/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const departmentData = {
  labels: ["UI/UX", "Development", "Management", "HR", "Testing", "Marketing"],
  datasets: [
    {
      label: "Number of Employees",
      data: [25, 12, 18, 8, 15, 10],
      backgroundColor: "#16a34a",
      borderWidth: 1,
      borderRadius: 0,
      borderSkipped: false,
    },
  ],
};

function EmployeeByDepartment() {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="lg:w-2/3 bg-white p-4 lg:p-6 rounded-2xl">
        <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">
          Team Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <MetricCard
              key={`metric-${index}`}
              title={metric.title}
              value={metric.value}
              icon={metric.icon}
              percentage={metric.percent}
              percentageColor={metric.percentColor}
              textColor={metric.textColor}
              iconBgColor={metric.iconBgColor}
            />
          ))}
        </div>
      </div>

      <div className="lg:w-1/3 bg-white p-4 lg:p-6 rounded-2xl">
        <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">
          Employees By Department
        </h2>
        <div className="h-64 lg:h-[350px] -mx-2 lg:mx-0">
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
                    text: 'Number of Employees',
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
                    display: false,
                  },
                  grid: {
                    display: false,
                  },
                  ticks: {
                    font: {
                      size: 12
                    }
                  }
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
                  barThickness: 30,
                  maxBarThickness: 25,
                  categoryPercentage: 0.9,
                  barPercentage: 0.9,
                },
              },
              layout: {
                padding: {
                  left: 10,
                  right: 20
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeByDepartment;