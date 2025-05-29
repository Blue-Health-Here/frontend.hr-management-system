import React from 'react'
import { GoArrowUp } from 'react-icons/go'

const MetricCard = ({ title, value, icon, percentage, percentageColor, textColor, iconBgColor, isShowCradFooter = true }: any) => {
  return (
    <div className="bg-white rounded-2xl w-full overflow-hidden border border-gray-200">
      <div className={`${isShowCradFooter ? 'p-4 md:px-5 md:py-6' : 'p-6'} `}>
        <div className="flex items-center gap-2 mb-5">
          <div className={`${iconBgColor} ${isShowCradFooter ? 'p-1.5' : 'p-3'} rounded-full`}>
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
      {isShowCradFooter && (
        <div className="bg-gray-50 px-6 py-3">
          <p className="text-gray-500 text-xs">Increased vs yesterday</p>
        </div>
      )}
    </div>
  )
}

export default MetricCard