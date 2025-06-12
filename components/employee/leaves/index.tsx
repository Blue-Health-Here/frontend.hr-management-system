"use client";
import React, { useEffect, useState } from "react";
import { Users, UserPlus, ChevronDown, Plus } from "lucide-react";
import { employeeData } from "@/utils/constants";
import { Employees, Leave } from "@/utils/types";
import { handleFilterChange } from "@/utils/helper";
import Link from "next/link";
import ExportButton from "../../common/ExportButton";
import Button from "../../common/Button";
import LeavesCard from "@/components/common/leaves/LeavesCard";
import { Field, Form, Formik } from "formik";
import DatePickerField from "@/components/common/form/DatePickerField";
import DataTable from "@/components/common/DataTable";
import { useRouter } from "next/navigation";
import { MdCoPresent } from "react-icons/md";
import { AiFillCalendar, AiFillCloseSquare } from "react-icons/ai";
import { RiPassPendingFill } from "react-icons/ri";

const LeavesView = () => {
    const [employees] = useState<Employees[]>(employeeData);
    const [leavesData, setLeavesData] = useState<Leave[]>([]);

    const [dateRangeFilter, setDateRangeFilter] = useState<string>("04/26/2025 - 05/02/2025");
    const [leaveTypeFilter, setLeaveTypeFilter] = useState<string>("All");
    const [sortOption, setSortOption] = useState<string>("");
    const router = useRouter();
    useEffect(() => {

        const leaveData = employees.map((employee) => ({
            id: employee.id,
            employee: employee.name,
            employeeImage: employee.image,
            leaveType: ["Medical Leave", "Casual Leave", "Annual Leave"][
                Math.floor(Math.random() * 3)
            ],
            from: new Date(
                Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
            ).toLocaleDateString(),
            to: new Date(
                Date.now() - Math.floor(Math.random() * 15) * 24 * 60 * 60 * 1000
            ).toLocaleDateString(),
            days: Math.floor(Math.random() * 10) + 1,
            department: employee.department,
            isPlanned: Math.random() > 0.5,
            isPending: Math.random() > 0.7,
            status: "Approved",
        }));

        setLeavesData(leaveData);
    }, []);

    const filteredLeaves = handleFilterChange({ leaveData: leavesData, dateRangeFilter, leaveTypeFilter, sortOption });

    const initialValues = {
        date: "",
        status: "All",
        department: "All",
        sort: "",
    };
    const applicationData = [
        { id: 1, title: 'Application 1', applicant: 'Ali Raza', status: 'approved' },
        { id: 2, title: 'Application 2', applicant: 'Sara Ahmed', status: 'declined' },
        { id: 3, title: 'Application 3', applicant: 'Usman Shah', status: 'approved' },
    ];


    const applicationColumns = [
        { header: 'ID', accessor: 'id' },
        { header: 'Title', accessor: 'title' },
        { header: 'Applicant', accessor: 'applicant' },
    ];

    const handleEdit = (row: any) => {
        console.log("Editing row:", row);

        if (row && row.id) {
            router.push(`/employee/leaves/${row.id}/edit`);
        } else {
            console.warn('Row is undefined or missing id');
        }
    };

    const metrics = [
        {
            title: "Annual Leaves",
            value: "20",
            color: "blue" as const,
            icon: Users,
            iconColor: "blue" as const,

        },
        {
            title: "Medical Leaves",
            value: "5",
            subtitle: "visitors",
            color: "purple" as const,
            icon: UserPlus,
            iconColor: "purple" as const,
        },
        {
            title: "Casual Leaves",
            value: "3",
            subtitle: "messages",
            color: "green" as const,
            icon: UserPlus,
            iconColor: "green" as const,
        },
        {
            title: "Other Leaves",
            value: "10",
            color: "pink" as const,
            icon: UserPlus,
            iconColor: "pink" as const,
        }
    ];

    const handleDelete = (row: any) => {
        console.log('Delete row:', row);
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
                <h1 className="text-2xl font-bold">Leaves</h1>
                <div className="flex flex-row items-stretch gap-3 w-full sm:w-auto">
                    <ExportButton />

                    <Link href="/employee/leaves/add">
                        <Button
                            label="Add Leave"
                            icon={Plus}
                        >
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6 bg-white rounded-2xl theme-shadow p-4">
                {metrics.map((metric, index) => (
                    <LeavesCard
                        key={index}
                        title={metric.title}
                        value={metric.value}
                        color={metric.color}
                        icon={metric.icon}
                        iconColor={metric.iconColor}
                    />
                ))}
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                <LeavesCard
                    title="Annual Leaves"
                    value={20}
                    icon={Users}
                    iconColor="#03c95a"
                    bgImage="https://smarthr.dreamstechnologies.com/react/template/static/media/bg-green-01.86f2351c2a8fef550174.svg"
                />

                <LeavesCard
                    title="Medical Leaves"
                    value={11}
                    icon={UserPlus}
                    iconColor="#1b84ff"
                    bgImage="https://smarthr.dreamstechnologies.com/react/template/static/media/bg-pink-01.8553968349c8e67b3655.svg"
                />

                <LeavesCard
                    title="Casual Leaves"
                    value={2}
                    icon={UserPlus}
                    iconColor="#f26522"
                    bgImage="https://smarthr.dreamstechnologies.com/react/template/static/media/bg-yellow-01.b8c835230fae6319f237.svg"
                />

                <LeavesCard
                    title="Other Leaves"
                    value={7}
                    icon={UserPlus}
                    iconColor="#ab47bc"
                    bgImage="https://smarthr.dreamstechnologies.com/react/template/static/media/bg-blue-01.260ff81ee2c2594c14d3.svg"
                />
            </div> */}

            {/* Leave Table */}
            <div className="overflow-x-auto bg-white rounded-2xl theme-shadow">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4">
                    <h2 className="text-lg font-semibold">Leave List</h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={() => { }}
                    >
                        {() => (
                            <Form>
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-auto">
                                    <DatePickerField name="date" className="w-60" />

                                    <div className="w-auto sm:w-32 md:w-36">
                                        <div className="relative">
                                            <Field
                                                as="select"
                                                name="leave"
                                                className="block appearance-none w-full pl-3 pr-8 py-2 text-xs sm:text-sm border border-gray-300 focus:outline-none rounded-md"
                                            >
                                                <option value="All">Leave Type</option>
                                                <option value="Medical Leave">Medical Leave</option>
                                                <option value="Casual Leave">Casual Leave</option>
                                                <option value="Annual Leave">Annual Leave</option>
                                            </Field>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full sm:w-36 md:w-40">
                                        <div className="relative">
                                            <Field
                                                as="select"
                                                name="sort"
                                                className="block appearance-none w-full pl-3 pr-8 py-2 text-xs sm:text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                            >
                                                <option value="">Sort By Name</option>
                                                <option value="ascending">Ascending</option>
                                                <option value="descending">Descending</option>
                                            </Field>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-36 md:w-40">
                                        <div className="relative">
                                            <Field
                                                as="select"
                                                name="status"
                                                className="block appearance-none w-full pl-3 pr-8 py-2 text-xs sm:text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
                                            >
                                                <option value="">Select Status</option>
                                                <option value="ascending">Approved</option>
                                                <option value="descending">Declined</option>
                                            </Field>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-28">
                                        <Button label="Submit" type="submit" />
                                    </div>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <DataTable
                    columns={applicationColumns}
                    data={applicationData}
                    showStatus={true}
                    showActions={true}
                    actionsConfig={{
                        onEdit: handleEdit,
                        onDelete: handleDelete
                    }}
                    statusConfig={{
                        type: 'approved-declined',
                        activeClass: 'bg-green-100 text-green-800',
                        inactiveClass: 'bg-red-100 text-red-800'
                    }}
                />
            </div>
        </div>
    );
};

export default LeavesView;