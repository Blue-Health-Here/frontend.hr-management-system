"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
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

type Invoice = {
  id: number;
  employeeName: string;
  employeeImage: string;
  amount: string;
  status: string;
};

type StatsAndInvoicesProps = {
  invoices: Invoice[];
};

export default function StatsAndInvoices({ invoices }: StatsAndInvoicesProps) {
  // Chart data
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40, 78, 90, 100, 75, 85],
        backgroundColor: "rgb(243,116,56)",
        borderColor: "rgb(243,116,56)",
        borderWidth: 1,
        barPercentage: 0.8,
      },
    ],
  };

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          drawTicks: false,
          color: "rgba(0, 0, 0, 0.1)",
        },
        ticks: {
          stepSize: 20,
          callback: function(value) {
            const ticks = [0, 20, 40, 60, 80, 100, 120];
            return ticks.includes(Number(value)) ? value : "";
          },
        },
        max: 120,
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          boxWidth: 12,
        }
      },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 mt-8">
      {/* Stats Overview Chart - 3/5 space */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h2>
        <div className="h-64 w-full">
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Invoices Section - 2/5 space with three internal columns */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Invoices</h2>
        <div className="space-y-4">
          {invoices.map((invoice) => (
            <div key={invoice.id} className="grid grid-cols-12 gap-2 p-3 hover:bg-gray-50 rounded-md transition-colors">
              {/* Employee Info - 5/12 width */}
              <div className="col-span-5 flex items-center gap-3">
                <img
                  src={invoice.employeeImage}
                  alt={invoice.employeeName}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <p className="font-medium text-gray-800 truncate">{invoice.employeeName}</p>
              </div>
              
              {/* Payment - 3/12 width */}
              <div className="col-span-3 flex flex-col items-end pr-2">
                <p className="text-xs text-gray-500">Payment</p>
                <p className="text-sm font-medium text-gray-800">${invoice.amount}</p>
              </div>
              
              {/* Status - 4/12 width */}
              <div className="col-span-4 flex items-center justify-end">
                <span
                  className={`text-xs font-medium px-2 py-1 rounded-full ${
                    invoice.status === "paid"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {invoice.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}