import React from 'react'
import { GoArrowUp } from 'react-icons/go'

const MetricCard = ({ title, value, icon, percentage, percentageColor, textColor }: any) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm w-full overflow-hidden">
      <div className="p-4 md:p-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-green-100 p-1.5 rounded-full">
            {icon}
          </div>
          <span className="text-gray-700 text-sm font-medium">{title}</span>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-bold text-gray-800">{value}</h2>
          <div className={`${percentageColor} px-3 py-1 rounded-full flex gap-x-2 items-center`}>
            <span className={`${textColor} text-xs font-medium flex items-center`}>
              <GoArrowUp />
              {percentage} %
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-3">
        <p className="text-gray-500 text-xs">Increased vs yesterday</p>
      </div>
    </div>
  )
}

export default MetricCard