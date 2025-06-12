import React from "react";
import MetricCard from "../../common/MetricCard";
import { employeesCardData } from "@/utils/constants";


const EmployeeDashboard = () => {
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
    //   <div className="bg-white p-4 lg:p-6 rounded-2xl ">
    //     <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-3 lg:mb-4">
    //       Personal Leave Stats
    //     </h2>
    //     <div className="grid grid-cols-1 gap-4">
    //       {employeeLeavesStats.map((stats, index) => (
    //         <MetricCard
    //           key={`stats-${index}`}
    //           title={stats.title}
    //           subtitles={stats.subtitles}
    //           icon={stats.icon}
    //           iconBgColor={stats.iconBgColor} variant="compact"
    //         />
    //       ))}
    //     </div>
    //     {/* <Button type="submit" label="Apply for leave" className='mt-4' /> */}
    //   </div>
    //   <EmployeeDashboardCard
    //     title="Attendance History"
    //     type="attendance"
    //     attendanceData={attendanceData}
    //   />

    //   <EmployeeDashboardCard
    //     title="Payslip Access"
    //     type="payslip"
    //   />

    //   <EmployeeDashboardCard
    //     title="Alerts & Pending Actions"
    //     type="alerts"
    //     alerts={alertsData}
    //   />
    // </div>
    <div className="theme-shadow bg-white p-4 lg:p-6 rounded-2xl">
      <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-4">
        Attendance History
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {employeesCardData.map((metric, index) => (
          <MetricCard
            key={`metric-${index}`}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
            textColor={metric.textColor}
            iconBgColor={metric.iconBgColor}
          />
        ))}
      </div>
    </div>
  )
}

export default EmployeeDashboard