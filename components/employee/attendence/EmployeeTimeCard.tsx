import Button from '@/components/common/Button';
import React from 'react';

const EmployeeTimeCard: React.FC = () => {
    return (
        <div className="bg-white p-4 lg:p-6 rounded-2xl  w-md flex flex-col justify-center items-center">
            <div className="text-center mb-6">
                <h2 className="text-gray-400 text-sm font-medium mb-1">Good Morning, Merry</h2>
                <p className=" text-gray-700 text-lg font-medium">08:35 AM, 11 Mar 2025</p>
            </div>

            <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-blue-400 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                        src="/profile-image.jpg"
                        alt="Adrian"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="bg-orange-500 text-white text-center py-2 w-36 rounded-md mb-4">
                <span className="font-medium text-xs">Production : 3.45 hrs</span>
            </div>

            <div className="flex items-center justify-center mb-4 text-gray-600">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm">Punch In at 10.00 AM</span>
            </div>

            <Button label='Punch Out' />
        </div>
    );
};

export default EmployeeTimeCard;