// PayRollChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

const PayRollChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Payroll',
        data: [22, 22, 30, 45, 55, 45, 20, 70, 70, 30, 10, 30],
        fill: false,
        borderColor: '#FF7043',
        borderWidth: 4,
        stepped: true,
        tension: 0,
        pointRadius: 0,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
        title: {
          display: true,
          text: 'Payroll Report',
          font: {
            size: 18,
          },
        },
      legend: {
        display: false
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default PayRollChart;
