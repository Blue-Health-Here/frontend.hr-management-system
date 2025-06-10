import React, { useEffect, useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const LeaveChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Annual',
                data: [35, 42, 30, 35, 25, 25, 35, 40, 32, 35, 25, 28],
                backgroundColor: '#10B981',
                borderWidth: 0,
            },
            {
                label: 'Casual',
                data: [25, 30, 35, 30, 35, 35, 25, 30, 28, 35, 40, 35],
                backgroundColor: '#F59E0B',
                borderWidth: 0,
            },
            {
                label: 'Medical',
                data: [15, 8, 15, 15, 15, 15, 15, 8, 15, 8, 10, 12],
                backgroundColor: '#1F2937',
                borderWidth: 0,
            },
            {
                label: 'Others',
                data: [25, 20, 20, 20, 25, 25, 25, 22, 25, 22, 25, 25],
                backgroundColor: '#EF4444',
                borderWidth: 0,
            }
        ]
    };

    const options: ChartOptions<"bar"> = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: true,
                text: '📊 Leaves',
                align: 'start',
                font: {
                    size: 16,
                    weight: 'bold'
                },
                color: '#374151'
            },
            legend: {
                display: true,
                position: 'top',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 12
                    },
                    color: '#6B7280'
                }
            },
            tooltip: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#fff',
                bodyColor: '#fff',
                borderColor: '#374151',
                borderWidth: 1
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false
                },
                border: {
                    display: false
                },
                ticks: {
                    color: '#6B7280',
                    font: {
                        size: 12
                    }
                }
            },
            y: {
                stacked: true,
                beginAtZero: true,
                max: 100,
                grid: {
                    color: '#F3F4F6',
                },
                border: {
                    display: false
                },
                ticks: {
                    stepSize: 20,
                    color: '#6B7280',
                    font: {
                        size: 12
                    }
                }
            }
        },
        interaction: {
            mode: 'nearest' as const,
            axis: 'x' as const,
            intersect: false
        }
    };

    return (
        <div className="h-60 md:h-full">
            <Bar data={data} options={options} />
        </div>
    );
};

export default LeaveChart;