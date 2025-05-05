import { Leave } from "./types";

export const handleFilterChange = ({ leaveData, dateRangeFilter, leaveTypeFilter, sortOption }: any): Leave[] => {
    let filteredLeaves = [...leaveData];

    // Apply date range filter
    if (dateRangeFilter === "Today") {
        const today = new Date().toLocaleDateString();
        filteredLeaves = filteredLeaves.filter(
            (leave) => leave.from === today || leave.to === today
        );
    } else if (dateRangeFilter === "Yesterday") {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toLocaleDateString();
        filteredLeaves = filteredLeaves.filter(
            (leave) => leave.from === yesterdayStr || leave.to === yesterdayStr
        );
    } else if (dateRangeFilter === "Last 7 Days") {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        filteredLeaves = filteredLeaves.filter((leave) => {
            const fromDate = new Date(leave.from);
            const toDate = new Date(leave.to);
            return fromDate >= sevenDaysAgo || toDate >= sevenDaysAgo;
        });
    } else if (dateRangeFilter === "Last 30 Days") {
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
        filteredLeaves = filteredLeaves.filter((leave) => {
            const fromDate = new Date(leave.from);
            const toDate = new Date(leave.to);
            return fromDate >= thirtyDaysAgo || toDate >= thirtyDaysAgo;
        });
    } else if (dateRangeFilter === "This Month") {
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        filteredLeaves = filteredLeaves.filter((leave) => {
            const fromDate = new Date(leave.from);
            const toDate = new Date(leave.to);
            return fromDate >= firstDay || toDate >= firstDay;
        });
    } else if (dateRangeFilter === "Last Month") {
        const now = new Date();
        const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
        const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        filteredLeaves = filteredLeaves.filter((leave) => {
            const fromDate = new Date(leave.from);
            const toDate = new Date(leave.to);
            return (fromDate >= firstDayLastMonth && fromDate <= lastDayLastMonth) ||
                (toDate >= firstDayLastMonth && toDate <= lastDayLastMonth);
        });
    }

    if (leaveTypeFilter !== "All") {
        filteredLeaves = filteredLeaves.filter(
            (leave) => leave.leaveType === leaveTypeFilter
        );
    }

    if (sortOption === "ascending") {
        filteredLeaves.sort((a, b) => a.employee.localeCompare(b.employee));
    } else if (sortOption === "last7days") {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        filteredLeaves = filteredLeaves.filter((leave) => {
            const fromDate = new Date(leave.from);
            return fromDate >= sevenDaysAgo;
        });
    }

    return filteredLeaves;
};