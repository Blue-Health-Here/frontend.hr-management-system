import React from 'react'

const MetricCard = ({ title, value, icon }:any) => {
  return (
   <div className="bg-white rounded-2xl shadow-md w-full overflow-hidden">
      <div className="flex items-center mb-4 p-6">
        <div className="bg-gray-100 p-2 rounded-full mr-3">
          {icon}
        </div>
        <span className="text-gray-600 text-sm font-medium">{title}</span>
        <div className="flex items-baseline justify-between mb-2">
          <h2 className="text-4xl font-bold text-gray-800">{value}</h2>
        </div>
      </div>
      <div className="bg-gray-50 px-6 py-3">
        <p className="text-gray-500 text-xs">Increased vs yesterday</p>
      </div>
    </div>
  )
}

export default MetricCard