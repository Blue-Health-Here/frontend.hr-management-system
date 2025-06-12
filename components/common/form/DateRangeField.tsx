'use client';

import React, { useState, useEffect } from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    format,
    startOfToday,
    subDays,
    startOfMonth,
    endOfMonth,
    subMonths,
} from 'date-fns';

const rangeOptions = [
    'Today',
    'Yesterday',
    'Last 7 Days',
    'Last 30 Days',
    'This Month',
    'Last Month',
    'Custom Range',
];

interface DateRange {
    startDate: Date;
    endDate: Date;
}

interface DateRangeFieldProps {
    name: string;
    label?: string;
}

export default function DateRangeField({ name, label }: DateRangeFieldProps) {
    const [field, , helpers] = useField(name);
    const { setFieldValue } = useFormikContext();
    const [selectedRange, setSelectedRange] = useState('Last 7 Days');
    const [showCustomPicker, setShowCustomPicker] = useState(false);
    const [startDate, setStartDate] = useState<any>(new Date());
    const [endDate, setEndDate] = useState<Date | null>(null);

    // Initialize default date range
    useEffect(() => {
        handleRangeSelect('Last 7 Days');
    }, []);

    const handleRangeSelect = (option: string) => {
        const today = startOfToday();
        let start: Date;
        let end: Date = today;

        switch (option) {
            case 'Today':
                start = end = today;
                break;
            case 'Yesterday':
                start = end = subDays(today, 1);
                break;
            case 'Last 7 Days':
                start = subDays(today, 6);
                break;
            case 'Last 30 Days':
                start = subDays(today, 29);
                break;
            case 'This Month':
                start = startOfMonth(today);
                end = endOfMonth(today);
                break;
            case 'Last Month':
                const lastMonth = subMonths(today, 1);
                start = startOfMonth(lastMonth);
                end = endOfMonth(lastMonth);
                break;
            case 'Custom Range':
                setShowCustomPicker(true);
                return;
            default:
                return;
        }

        setShowCustomPicker(false);
        setSelectedRange(option);
        updateFormikField(start, end);
    };

    const updateFormikField = (startDate: Date, endDate: Date) => {
        setFieldValue(name, { startDate, endDate });
    };

    const onCustomChange = (dates: [Date | null, Date | null]) => {
        const [start, end] = dates;
        if (start && end) {
            updateFormikField(start, end);
            setStartDate(start);
            setEndDate(end);
            setSelectedRange('Custom Range');
        }
    };

    const value: DateRange = field.value || {
        startDate: startDate,
        endDate: endDate,
    };

    console.log(selectedRange, "selectedRange");

    return (
        <div className="">
            {label && <label className="block font-semibold mb-2">{label}</label>}

            <select
                className="w-full p-2 border rounded"
                value={selectedRange}
                name={field.name}
                id='dateRange'
                onChange={(e) => handleRangeSelect(e.target.value)}
            >
                {rangeOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            {showCustomPicker && (
                // <DatePicker
                //     selectsRange
                //     startDate={startDate}
                //     endDate={endDate}
                //     onChange={onCustomChange}
                //     selected={startDate}
                // />
                <>
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                    />
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                    />
                </>
            )}
        </div>
    );
}
