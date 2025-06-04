const AttendanceSummary = () => {
    return (
        <div className="bg-white p-4 lg:p-6 rounded-2xl w-full xl:w-1/2">
            <h2 className="text-base lg:text-lg font-semibold text-gray-800 mb-3 lg:mb-4">
                Attendance Summary
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-4 lg:mb-6">
                <div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
                    <p className="text-xs lg:text-sm text-gray-600">Present Today</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">100</p>
                </div>
                <div className="bg-purple-50 p-3 lg:p-4 rounded-lg">
                    <p className="text-xs lg:text-sm text-gray-600">Absent</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-purple-600">7</p>
                </div>
                <div className="bg-yellow-50 p-3 lg:p-4 rounded-lg">
                    <p className="text-xs lg:text-sm text-gray-600">On Leaves</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-600">5</p>
                </div>
                <div className="bg-blue-50 p-3 lg:p-4 rounded-lg">
                    <p className="text-xs lg:text-sm text-gray-600">Late entries count</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">10</p>
                </div>
                <div className="bg-purple-50 p-3 lg:p-4 rounded-lg">
                    <p className="text-xs lg:text-sm text-gray-600">Early Departures Count</p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-purple-600">7</p>
                </div>
            </div>
        </div>
    )
};

export default AttendanceSummary;
