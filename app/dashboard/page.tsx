// HRDashboard.tsx
"use client";
import { useState } from "react";
import DashboardView from "@/components/dashboardView";
import EmployeeView from "@/components/employeeView";

export default function HRDashboard() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'employees'>("dashboard");

  const navigateTo = (view: 'dashboard' | 'employees') => {
    setCurrentView(view);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {currentView === "dashboard" ? (
        <DashboardView navigateTo={navigateTo} />
      ) : (
        <EmployeeView navigateTo={navigateTo} />
      )}
    </div>
  );
}