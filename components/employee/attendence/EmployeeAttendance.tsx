import React from 'react'
import { timeTrackingData } from '@/utils/constants'
import EmployeeTimeCard from './EmployeeTimeCard'
import WorkingHoursTimeline from './WorkingHoursTimeline'
import GenericTable from '../../common/GenericTable'
import MetricCard from '@/components/common/MetricCard'

const EmployeeAttendance = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-6">
        <EmployeeTimeCard />
        <div className="flex-1 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeTrackingData.map((item, index) => (
              <MetricCard
                key={index}
                icon={item.icon}
                value={item.value}
                target={item.target}
                iconBgColor={item.iconColor} />
            ))}
          </div>
          <WorkingHoursTimeline />
        </div>
      </div>
      <GenericTable />
    </div>

  )
}

export default EmployeeAttendance