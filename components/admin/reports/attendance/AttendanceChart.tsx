// AttendanceChart.js
import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    Legend
);

const AttendanceChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        datasets: [
            {
                label: "Present",
                data: [30, 60, 70, 75, 80, 95, 100, 75, 70],
                borderColor: "#28a745",
                backgroundColor: "rgba(40, 167, 69, 0.1)",
                tension: 0.4,
                fill: false,
            },
            {
                label: "Absent",
                data: [30, 55, 60, 65, 55, 70, 80, 60, 68],
                borderColor: "#e83e8c",
                backgroundColor: "rgba(232, 62, 140, 0.1)",
                tension: 0.4,
                fill: false,
            },
        ],
    };

    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 120,
            },
        },
    };

    return (
        <>
            <Line data={data} options={options} />
        </>
    );
};

export default AttendanceChart;
