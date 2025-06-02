"use client"
import Button from '@/components/common/Button';
import React, { useEffect, useState } from 'react';

const EmployeeTimeCard: React.FC = () => {

    const [isPunchedIn, setIsPunchedIn] = useState(false);
    const [punchInTime, setPunchInTime] = useState<Date | null>(new Date())
    const [punchOutTime, setPunchOutTime] = useState<Date | null>(null)
    const [elapsedTime, setElapsedTime] = useState<string>('00:00:00');
    const [timerInterval, setTimerInterval] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (isPunchedIn && punchInTime) {
            const interval = setInterval(() => {
                const now = new Date();
                const diff = new Date(now.getTime() - punchInTime.getTime());
                const hours = String(diff.getUTCHours()).padStart(2, '0');
                const minutes = String(diff.getUTCMinutes()).padStart(2, '0');
                const seconds = String(diff.getUTCSeconds()).padStart(2, '0');
                setElapsedTime(`${hours}:${minutes}:${seconds}`);
            }, 1000);
            setTimerInterval(interval);

            return () => clearInterval(interval);
        } else {
            if (timerInterval) clearInterval(timerInterval);
        }
    }, [isPunchedIn, punchInTime]);

    const handleClick = () => {
        if (isPunchedIn) {
            setIsPunchedIn(false)
            setPunchOutTime(new Date())
        }
        else {
            setIsPunchedIn(true)
            setPunchInTime(new Date())
            setPunchOutTime(null)
        }
    }

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="bg-white p-4 lg:p-6 rounded-2xl  w-md flex flex-col justify-center items-center">
            <div className="text-center mb-6">
                <h2 className="text-gray-400 text-sm font-medium mb-1">Good Morning, Merry</h2>
                <p className=" text-gray-700 text-lg font-medium">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}, {new Date().toLocaleDateString()}</p>
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

            <div className="bg-orange-500 text-white text-center py-2 w-40 rounded-md mb-4">
                <span className="font-medium text-xs">Production : {elapsedTime} hrs</span>
            </div>

            <div className="flex items-center justify-center mb-4 text-gray-600">
                <div className={`w-2 h-2 rounded-full mr-2 ${isPunchedIn ? 'bg-red-500' : 'bg-green-500'}`}></div>
                <span className="text-sm">{isPunchedIn
                        ? `Punched In at ${punchInTime ? formatTime(punchInTime) : ''}`
                        : `Punched Out at ${punchOutTime ? formatTime(punchOutTime) : ''}`}</span>
            </div>
            <Button label={isPunchedIn ? 'Punch Out' : 'Punch In'} className={`${isPunchedIn ? 'bg-red-500' : 'bg-green-500'}`} onClick={handleClick} />
        </div>
    );
};

export default EmployeeTimeCard;