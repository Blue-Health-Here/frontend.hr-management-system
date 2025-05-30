import React from 'react';
import { ChevronRight} from 'lucide-react';
import { IoCaretDownCircle } from 'react-icons/io5';
import { RiBillLine } from 'react-icons/ri';

interface AttendanceData {
    totalWorkingDays: number;
    daysPresent: number;
    daysAbsent: number;
    daysLate: number;
    clockInTime: string;
}

interface AlertItem {
    icon: React.ReactNode;
    text: string;
}

interface EmployeeDashboardCardProps {
    title: string;
    type: 'attendance' | 'payslip' | 'alerts';
    attendanceData?: AttendanceData;
    alerts?: AlertItem[];
}

const EmployeeDashboardCard: React.FC<EmployeeDashboardCardProps> = ({
    title,
    type,
    attendanceData,
    alerts = []
}) => {
    if (type === 'attendance') {
        return (
            <div className="bg-white p-4 lg:p-6 rounded-2xl">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    {title}
                </h2>

                <div className="mb-8">
                    <h3 className="text-gray-700 mb-4 ">
                        Summary for current month
                    </h3>

                    <div className="space-y-3 text-sm">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Total Working Days</span>
                            <span className="text-gray-900 font-medium">{attendanceData?.totalWorkingDays}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Days Present</span>
                            <span className="text-gray-900 font-medium">{attendanceData?.daysPresent}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Days Absent</span>
                            <span className="text-gray-900 font-medium">{attendanceData?.daysAbsent}</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Days Late</span>
                            <span className="text-gray-900 font-medium">{attendanceData?.daysLate}</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-gray-700 mb-4 font-medium text-sm">Today</h3>

                    <div className="flex gap-3 text-sm">
                            <IoCaretDownCircle className="w-8 h-8 text-blue-600" />
                        <div>
                            <div className="text-gray-900 font-medium">Clock In</div>
                            <div className="text-gray-700">{attendanceData?.clockInTime}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (type === 'payslip') {
        return (
            <div className="bg-white p-4 lg:p-6 rounded-2xl">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                    {title}
                </h2>

                <div className="border border-gray-200 rounded-lg p-4 mb-6 text-sm">
                    <div className="flex items-center gap-3">
                        <div className="bg-blue-50 p-3 rounded-xl">
                            <RiBillLine className="w-6 h-6  text-blue-600" />
                        </div>
                        <div>
                            <div className="text-gray-900 font-medium text-lg">Latest Payslip</div>
                            <div className="text-gray-600 text-sm">View / Download</div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 text-sm px-2 py-2 rounded">
                    <span className="text-gray-700">Pay History</span>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white p-4 lg:p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {title}
            </h2>

            <div className="space-y-4 text-sm">
                {alerts.map((alert, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <div className="bg-blue-50 p-3 rounded-xl">
                            {alert.icon}
                        </div>
                        <span className="text-gray-700">{alert.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};



export default EmployeeDashboardCard;