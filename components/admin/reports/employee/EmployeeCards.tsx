import React from 'react'
import { employeeMetrics, statsCards } from '@/utils/constants'
import MetricCard from '@/components/common/MetricCard'
import ExportButton from '@/components/common/ExportButton'
import EmployeeChart from './EmployeeChart'

const EmployeeCards = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h1 className="text-2xl font-bold">Leave Reports</h1>
                <div className="w-auto">
                    <ExportButton />
                </div>
            </div>
            <div className="flex flex-col gap-6 xl:flex-row">
                <div className="w-full xl:w-1/2 bg-white p-4 sm:p-6 rounded-2xl theme-shadow">
                    <div className="h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-4">
                        {employeeMetrics.map((card, index) => (
                            <MetricCard
                                key={`metric-${index}`}
                                title={card.title}
                                value={card.value}
                                icon={card.icon}
                                textColor={card.iconColor}
                                iconBgColor={card.iconBgColor}
                                isShowCradFooter={false}
                            />
                        ))}
                    </div>
                </div>
                <div className="w-full xl:w-1/2 bg-white p-4 sm:p-6 rounded-2xl theme-shadow">
                    <EmployeeChart />
                </div>
            </div></>
    )
}

export default EmployeeCards