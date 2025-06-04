// import { leaveApplications } from "@/utils/constants";
// import { useState } from "react";

// const LeaveApplicationStatus = () => {
//     const [selectedButtons, setSelectedButtons] = useState<Record<string, string>>({});
//     const handleButtonClick = (applicationId: string, action: string) => {
//         setSelectedButtons(prev => ({
//             ...prev,
//             [applicationId]: action
//         }));
//     };
//     return (
//         <div className="bg-white p-4 lg:p-6 rounded-2xl w-1/2">
//             <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-base lg:text-lg font-semibold text-gray-800">
//                     Leave Application Status
//                 </h2>
//                 <div className="flex gap-4">
//                     <button className="text-sm text-gray-600 hover:text-gray-800">Today</button>
//                     <button className="text-sm text-gray-600 hover:text-gray-800">This Week</button>
//                     <button className="text-sm text-gray-600 hover:text-gray-800">All</button>
//                 </div>
//             </div>

//             <div className="space-y-4">
//                 {leaveApplications.map((application) => (
//                     <div key={application.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border-b border-gray-100 last:border-b-0">
//                         <div className="mb-2 sm:mb-0">
//                             <p className="font-medium text-gray-800">{application.name}</p>
//                             <p className="text-sm text-gray-600">{application.type}</p>
//                         </div>
//                         <div className="flex gap-2 mb-2 sm:mb-0">
//                             <button
//                                 className={`px-3 py-1 rounded-md text-sm ${selectedButtons[application.id] === 'approve'
//                                     ? 'bg-green-600 text-white'
//                                     : 'bg-green-100 text-green-800 hover:bg-green-200'
//                                     }`}
//                                 onClick={() => handleButtonClick(application.id, 'approve')}
//                             >
//                                 Approve
//                             </button>
//                             <button
//                                 className={`px-3 py-1 rounded-md text-sm ${selectedButtons[application.id] === 'reject'
//                                     ? 'bg-red-600 text-white'
//                                     : 'bg-red-100 text-red-800 hover:bg-red-200'
//                                     }`}
//                                 onClick={() => handleButtonClick(application.id, 'reject')}
//                             >
//                                 Reject
//                             </button>
//                         </div>
//                         <div className="text-sm text-gray-500 mt-1">
//                             <p className="font-medium text-gray-600 mb-1">Recent Approvals</p>
//                             <div className="space-y-1">
//                                 {application.recentApprovals.map((approval, index) => (
//                                     <div key={index}>
//                                         <p>{approval.name}</p>
//                                         <p className="text-xs">{approval.date}</p>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// };

// export default LeaveApplicationStatus;



import React, { useState } from 'react';
import { BiCheckCircle, BiXCircle } from 'react-icons/bi';
import { BsCheckCircle, BsXCircle } from 'react-icons/bs';
import { CiClock2 } from 'react-icons/ci';
import { FaRegCalendar } from 'react-icons/fa';
// import { Calendar, Clock, CheckCircle, XCircle, User, Filter } from 'lucide-react';

const LeaveApplicationCard = () => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [activeTab, setActiveTab] = useState('pending');

    // Sample data for pending requests
    const pendingRequests = [
        {
            id: 1,
            employee: 'Sarah Johnson',
            department: 'Marketing',
            leaveType: 'Annual Leave',
            startDate: '2025-06-02',
            endDate: '2025-06-06',
            days: 5,
            reason: 'Family vacation',
            appliedDate: '2025-05-25',
            avatar: 'SJ'
        },
        {
            id: 2,
            employee: 'Mike Chen',
            department: 'Engineering',
            leaveType: 'Sick Leave',
            startDate: '2025-06-01',
            endDate: '2025-06-01',
            days: 1,
            reason: 'Medical appointment',
            appliedDate: '2025-05-28',
            avatar: 'MC'
        },
        {
            id: 3,
            employee: 'Emily Davis',
            department: 'HR',
            leaveType: 'Personal Leave',
            startDate: '2025-06-10',
            endDate: '2025-06-12',
            days: 3,
            reason: 'Personal matters',
            appliedDate: '2025-05-27',
            avatar: 'ED'
        }
    ];

    // Sample data for recent approvals/rejections
    const recentActions = [
        {
            id: 4,
            employee: 'John Smith',
            department: 'Sales',
            leaveType: 'Annual Leave',
            startDate: '2025-05-30',
            endDate: '2025-05-31',
            days: 2,
            status: 'approved',
            actionDate: '2025-05-29',
            avatar: 'JS'
        },
        {
            id: 5,
            employee: 'Lisa Wong',
            department: 'Finance',
            leaveType: 'Sick Leave',
            startDate: '2025-05-28',
            endDate: '2025-05-30',
            days: 3,
            status: 'rejected',
            actionDate: '2025-05-28',
            avatar: 'LW'
        },
        {
            id: 6,
            employee: 'David Brown',
            department: 'Operations',
            leaveType: 'Emergency Leave',
            startDate: '2025-05-27',
            endDate: '2025-05-27',
            days: 1,
            status: 'approved',
            actionDate: '2025-05-27',
            avatar: 'DB'
        }
    ];

    const handleApprove = (id: string) => {
        console.log(`Approved leave request ${id}`);
        // Handle approval logic here
    };

    const handleReject = (id: string) => {
        console.log(`Rejected leave request ${id}`);
        // Handle rejection logic here
    };

    const getFilteredData = (data: any) => {
        const today = new Date();
        const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

        switch (activeFilter) {
            case 'Today':
                return data.filter((item: any) => {
                    const appliedDate = new Date(item.appliedDate || item.actionDate);
                    return appliedDate.toDateString() === today.toDateString();
                });
            case 'This Week':
                return data.filter((item: any) => {
                    const appliedDate = new Date(item.appliedDate || item.actionDate);
                    return appliedDate >= oneWeekAgo;
                });
            default:
                return data;
        }
    };

    const filteredPending = getFilteredData(pendingRequests);
    const filteredRecent = getFilteredData(recentActions);

    return (
        <div className="bg-white rounded-2xl p-4 sm:p-6 w-full space-y-4 theme-shadow">
            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">
                <h2 className="text-base lg:text-lg font-semibold text-gray-800">
                    Leave Application Status
                </h2>

                {/* Filter Buttons */}
                <div className="flex items-center flex-wrap gap-2">
                    {['Today', 'This Week', 'All'].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm  font-medium cursor-pointer transition-colors ${activeFilter === filter
                                ? 'bg-blue-100 text-blue-700'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Navigation */}
            <div className="flex items-center justify-between flex-wrap gap-4 bg-gray-100 rounded-xl p-2">
                <button
                    onClick={() => setActiveTab('pending')}
                    type='button'
                    className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-medium cursor-pointer transition-colors ${activeTab === 'pending'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    Pending Requests ({filteredPending.length})
                </button>
                <button
                    onClick={() => setActiveTab('recent')}
                    type='button'
                    className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-medium cursor-pointer transition-colors ${activeTab === 'recent'
                        ? 'bg-white text-blue-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                        }`}
                >
                    Recent Actions ({filteredRecent.length})
                </button>
            </div>

            {/* Content */}
            <div className="space-y-4">
                {activeTab === 'pending' ? (
                    filteredPending.length > 0 ? (
                        filteredPending.map((request: any) => (
                            <div key={request.id} className="border border-gray-200 rounded-2xl p-4 hover:shadow-md transition-shadow cursor-pointer">
                                <div className="flex items-start justify-between flex-wrap gap-4">
                                    <div className="flex flex-col md:flex-row items-start gap-4 flex-1">
                                        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                                            {request.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h3 className="font-medium text-gray-900">{request.employee}</h3>
                                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                                                    {request.department}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                                                <div>
                                                    <span className="font-medium">Leave Type:</span> {request.leaveType}
                                                </div>
                                                <div>
                                                    <span className="font-medium">Duration:</span> {request.days} day{request.days > 1 ? 's' : ''}
                                                </div>
                                                <div>
                                                    <span className="font-medium">From:</span> {request.startDate}
                                                </div>
                                                <div>
                                                    <span className="font-medium">To:</span> {request.endDate}
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">
                                                <span className="font-medium">Reason:</span> {request.reason}
                                            </p>
                                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                                <CiClock2 className="w-5 h-5" />
                                                Applied on {request.appliedDate}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-2 flex-wrap">
                                        <button
                                            onClick={() => handleReject(request.id)}
                                            className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors flex items-center gap-1 text-sm font-medium"
                                        >
                                            <BsXCircle className="w-4 h-4" />
                                            Reject
                                        </button>
                                        <button
                                            onClick={() => handleApprove(request.id)}
                                            className="px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors flex items-center gap-1 text-sm font-medium"
                                        >
                                            <BsCheckCircle className="w-4 h-4" />
                                            Approve
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500">
                            <FaRegCalendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                            <p className="text-lg font-medium mb-1">No pending requests</p>
                            <p className="text-sm">All leave applications have been processed</p>
                        </div>
                    )
                ) : (
                    filteredRecent.length > 0 ? (
                        filteredRecent.map((action: any) => (
                            <div key={action.id} className="border border-gray-200 rounded-2xl p-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white font-medium text-sm">
                                        {action.avatar}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <div className="flex items-center gap-2">
                                                <h3 className="font-medium text-gray-900">{action.employee}</h3>
                                                <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                                                    {action.department}
                                                </span>
                                            </div>
                                            <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${action.status === 'approved'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                                }`}>
                                                {action.status === 'approved' ? (
                                                    <BsCheckCircle className="w-3 h-3" />
                                                ) : (
                                                    <BiXCircle className="w-3 h-3" />
                                                )}
                                                {action.status.charAt(0).toUpperCase() + action.status.slice(1)}
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                                            <div>
                                                <span className="font-medium">Leave Type:</span> {action.leaveType}
                                            </div>
                                            <div>
                                                <span className="font-medium">Duration:</span> {action.days} day{action.days > 1 ? 's' : ''}
                                            </div>
                                            <div>
                                                <span className="font-medium">From:</span> {action.startDate}
                                            </div>
                                            <div>
                                                <span className="font-medium">To:</span> {action.endDate}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-xs text-gray-500">
                                            <CiClock2 className="w-5 h-5" />
                                            Action taken on {action.actionDate}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-gray-500">
                            <BsCheckCircle className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                            <p className="text-lg font-medium mb-1">No recent actions</p>
                            <p className="text-sm">No leave applications have been processed recently</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default LeaveApplicationCard;