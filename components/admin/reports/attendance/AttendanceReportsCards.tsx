"use client"
import React from "react";
import { attendanceMetrics } from "@/utils/constants";
import MetricCard from "@/components/common/MetricCard";
import AttendanceChart from "./AttendanceChart";
import ExportButton from "@/components/common/ExportButton";
import Link from "next/link";
import Button from "@/components/common/Button";
import { Plus } from "lucide-react";

function AttendanceReportsCards() {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h1 className="text-2xl font-bold">Attendance Reports</h1>
                <div className="w-auto">
                    <ExportButton />
                </div>
            </div>
            <div className="flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2 bg-white p-4 sm:p-6 rounded-2xl theme-shadow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
                        {attendanceMetrics.map((metric, index) => (
                            <MetricCard
                                key={`metric-${index}`}
                                title={metric.title}
                                value={metric.value}
                                icon={metric.icon}
                                percentage={metric.percent}
                                percentageColor={metric.percentColor}
                                textColor={metric.textColor}
                                iconBgColor={metric.iconBgColor}
                                footerText="From last month"
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full xl:w-1/2 bg-white p-4 sm:p-6 rounded-2xl theme-shadow">
                    <AttendanceChart />
                </div>
            </div>
        </>
    );
}

export default AttendanceReportsCards;
