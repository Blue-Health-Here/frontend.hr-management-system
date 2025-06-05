import React from 'react'

const LeaveChart = () => {
    const chartData = [
        { month: 'Jan', annual: 35, casual: 30, medical: 20, others: 15 },
        { month: 'Feb', annual: 40, casual: 25, medical: 25, others: 10 },
        { month: 'Mar', annual: 30, casual: 35, medical: 20, others: 15 },
        { month: 'Apr', annual: 35, casual: 30, medical: 20, others: 15 },
        { month: 'May', annual: 25, casual: 45, medical: 15, others: 15 },
        { month: 'Jun', annual: 30, casual: 40, medical: 15, others: 15 },
        { month: 'Jul', annual: 35, casual: 35, medical: 20, others: 10 },
        { month: 'Aug', annual: 20, casual: 50, medical: 20, others: 10 },
        { month: 'Sep', annual: 30, casual: 40, medical: 20, others: 10 },
        { month: 'Oct', annual: 35, casual: 35, medical: 20, others: 10 },
        { month: 'Nov', annual: 25, casual: 45, medical: 20, others: 10 },
        { month: 'Dec', annual: 30, casual: 40, medical: 20, others: 10 }
    ];

    const getStackedBarHeight = (value: number, total: number) => {
        return (value / total) * 100;
    };

    const maxValue = 100;

    return (
        <div className="w-full xl:w-1/2 bg-white p-4 sm:p-6 rounded-2xl theme-shadow">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <h2 className="text-lg font-semibold text-gray-900">Leaves</h2>
                </div>
                <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded"></div>
                            <span className="text-sm text-gray-600">Annual</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                            <span className="text-sm text-gray-600">Casual</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-gray-700 rounded"></div>
                            <span className="text-sm text-gray-600">Medical</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-orange-500 rounded"></div>
                            <span className="text-sm text-gray-600">Others</span>
                        </div>
                    </div>
                    <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                        <option>This Year</option>
                        <option>Last Year</option>
                    </select>
                </div>
            </div>

            <div className="h-80">
                <div className="flex items-end justify-between h-full space-x-2">
                    {chartData.map((data, index) => {
                        const total = data.annual + data.casual + data.medical + data.others;
                        return (
                            <div key={index} className="flex flex-col items-center flex-1 h-full">
                                <div className="flex flex-col justify-end h-64 w-full max-w-12 relative">
                                    <div className="w-full bg-gray-200 rounded-t relative">
                                        {/* Stacked bars */}
                                        <div
                                            className="w-full bg-green-500 rounded-t"
                                            style={{ height: `${getStackedBarHeight(data.annual, maxValue) * 2.4}px` }}
                                        ></div>
                                        <div
                                            className="w-full bg-yellow-500"
                                            style={{ height: `${getStackedBarHeight(data.casual, maxValue) * 2.4}px` }}
                                        ></div>
                                        <div
                                            className="w-full bg-gray-700"
                                            style={{ height: `${getStackedBarHeight(data.medical, maxValue) * 2.4}px` }}
                                        ></div>
                                        <div
                                            className="w-full bg-orange-500 rounded-b"
                                            style={{ height: `${getStackedBarHeight(data.others, maxValue) * 2.4}px` }}
                                        ></div>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-600 mt-3">{data.month}</span>
                            </div>
                        );
                    })}
                </div>
                <div className="absolute left-0 h-64 flex flex-col justify-between text-sm text-gray-500 -ml-8">
                    <span>100</span>
                    <span>80</span>
                    <span>60</span>
                    <span>40</span>
                    <span>20</span>
                    <span>0</span>
                </div>
            </div>
        </div>)
}

export default LeaveChart