import { Holiday } from "./types";
import { LuLayoutDashboard } from "react-icons/lu";
import {
    FaUsers, FaCalendarAlt, FaUserCheck, FaChartLine,
    FaUmbrellaBeach, FaUserCog, FaCog
} from "react-icons/fa";
import {
    Briefcase, CheckCircle, CheckSquare,
    UserPlus, Users, XCircle, Calendar, Clock,
    Grid3x3, Volume2
} from "lucide-react";
import { RiDashboardHorizontalFill, RiPlayCircleLine, RiPresentationFill, RiTeamLine } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { MdAppRegistration } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import Dropdown from "@/components/common/form/DropDown";
import { ImPaypal} from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";

export const employeeData = [
    {
        id: "EMP001",
        name: "John Doe",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        email: "john.doe@example.com",
        phone: "+1 (555) 123-4567",
        designation: "Software Engineer",
        department: "Engineering",
        joiningDate: "2022-03-15",
        status: "Active",
    },
    {
        id: "EMP002",
        name: "Jane Smith",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        email: "jane.smith@example.com",
        phone: "+1 (555) 987-6543",
        designation: "Product Manager",
        department: "Product",
        joiningDate: "2021-07-22",
        status: "Active",
    },
    {
        id: "EMP003",
        name: "Robert Johnson",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        email: "robert.j@example.com",
        phone: "+1 (555) 456-7890",
        designation: "UX Designer",
        department: "Design",
        joiningDate: "2023-01-10",
        status: "Active",
    },
    {
        id: "EMP004",
        name: "Emily Davis",
        image: "https://randomuser.me/api/portraits/women/63.jpg",
        email: "emily.d@example.com",
        phone: "+1 (555) 111-2222",
        designation: "Marketing Specialist",
        department: "Marketing",
        joiningDate: "2022-11-05",
        status: "Active",
    },
    {
        id: "EMP005",
        name: "Michael Brown",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        email: "michael.b@example.com",
        phone: "+1 (555) 333-4444",
        designation: "HR Manager",
        department: "Human Resources",
        joiningDate: "2021-05-18",
        status: "Active",
    },
    {
        id: "EMP006",
        name: "Sarah Wilson",
        image: "https://randomuser.me/api/portraits/women/28.jpg",
        email: "sarah.w@example.com",
        phone: "+1 (555) 555-6666",
        designation: "Financial Analyst",
        department: "Finance",
        joiningDate: "2023-03-30",
        status: "Active",
    },
    {
        id: "EMP007",
        name: "David Lee",
        image: "https://randomuser.me/api/portraits/men/19.jpg",
        email: "david.lee@example.com",
        phone: "+1 (555) 777-8888",
        designation: "Operations Manager",
        department: "Operations",
        joiningDate: "2020-09-12",
        status: "Active",
    },
    {
        id: "EMP008",
        name: "Lisa Taylor",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        email: "lisa.t@example.com",
        phone: "+1 (555) 999-0000",
        designation: "Sales Executive",
        department: "Sales",
        joiningDate: "2023-06-25",
        status: "Active",
    },
    {
        id: "EMP009",
        name: "James Wilson",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
        email: "james.w@example.com",
        phone: "+1 (555) 123-7890",
        designation: "Frontend Developer",
        department: "Engineering",
        joiningDate: "2023-02-14",
        status: "Active",
    },
    {
        id: "EMP010",
        name: "Olivia Martinez",
        image: "https://randomuser.me/api/portraits/women/29.jpg",
        email: "olivia.m@example.com",
        phone: "+1 (555) 456-1234",
        designation: "Executive",
        department: "Management",
        joiningDate: "2020-11-30",
        status: "Active",
    },
    {
        id: "EMP011",
        name: "William Anderson",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        email: "william.a@example.com",
        phone: "+1 (555) 789-4561",
        designation: "Backend Developer",
        department: "Engineering",
        joiningDate: "2022-08-17",
        status: "Active",
    },
    {
        id: "EMP012",
        name: "Sophia Thomas",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        email: "sophia.t@example.com",
        phone: "+1 (555) 321-6549",
        designation: "Executive",
        department: "Sales",
        joiningDate: "2021-04-22",
        status: "Active",
    },
    {
        id: "EMP013",
        name: "Benjamin Jackson",
        image: "https://randomuser.me/api/portraits/men/52.jpg",
        email: "benjamin.j@example.com",
        phone: "+1 (555) 654-9873",
        designation: "DevOps Engineer",
        department: "Engineering",
        joiningDate: "2023-01-05",
        status: "Active",
    },
    {
        id: "EMP014",
        name: "Ava White",
        image: "https://randomuser.me/api/portraits/women/35.jpg",
        email: "ava.w@example.com",
        phone: "+1 (555) 987-3216",
        designation: "Content Writer",
        department: "Marketing",
        joiningDate: "2022-07-19",
        status: "Active",
    },
    {
        id: "EMP015",
        name: "Mason Harris",
        image: "https://randomuser.me/api/portraits/men/61.jpg",
        email: "mason.h@example.com",
        phone: "+1 (555) 147-2583",
        designation: "QA Engineer",
        department: "Engineering",
        joiningDate: "2023-05-11",
        status: "Active",
    },
    {
        id: "EMP016",
        name: "Charlotte Clark",
        image: "https://randomuser.me/api/portraits/women/42.jpg",
        email: "charlotte.c@example.com",
        phone: "+1 (555) 369-2581",
        designation: "Executive",
        department: "HR",
        joiningDate: "2021-09-27",
        status: "Active",
    },
    {
        id: "EMP017",
        name: "Ethan Lewis",
        image: "https://randomuser.me/api/portraits/men/28.jpg",
        email: "ethan.l@example.com",
        phone: "+1 (555) 258-1473",
        designation: "Mobile Developer",
        department: "Engineering",
        joiningDate: "2022-12-08",
        status: "Active",
    },
    {
        id: "EMP018",
        name: "Amelia Walker",
        image: "https://randomuser.me/api/portraits/women/51.jpg",
        email: "amelia.w@example.com",
        phone: "+1 (555) 753-1596",
        designation: "Executive",
        department: "Finance",
        joiningDate: "2020-10-15",
        status: "Active",
    },
    {
        id: "EMP019",
        name: "Lucas Hall",
        image: "https://randomuser.me/api/portraits/men/39.jpg",
        email: "lucas.h@example.com",
        phone: "+1 (555) 951-3578",
        designation: "Data Scientist",
        department: "Engineering",
        joiningDate: "2023-04-03",
        status: "Active",
    },
    {
        id: "EMP020",
        name: "Mia Young",
        image: "https://randomuser.me/api/portraits/women/37.jpg",
        email: "mia.y@example.com",
        phone: "+1 (555) 357-1598",
        designation: "Executive Assistant",
        department: "Management",
        joiningDate: "2022-01-25",
        status: "Inactive",
    },
];

export const sidebarNav = [
    {
        icon: LuLayoutDashboard,
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        icon: FaUsers,
        label: "Employees",
        href: "/employees"
    },
    {
        icon: FaCalendarAlt,
        label: "Leaves",
        href: "/leaves"
    },
    {
        icon: FaUserCheck,
        label: "Attendance",
        href: "/attendance-report"
    },
    {
        icon: FaChartLine,
        label: "Performance",
        href: "/performance-indicator"
    },
    {
        icon: FaUmbrellaBeach,
        label: "Holidays",
        href: "/holidays"
    },
    {
        icon: FaUserCog,
        label: "Users",
        href: "/users"
    },
    {
        icon: FaCog,
        label: "Settings",
        href: "/settings"
    }
];

export const adminSidebarItems = [
    {
        icon: RiDashboardHorizontalFill,
        label: "Dashboard",
        href: "/admin/dashboard",
        hasDropdown: false
    },
    {
        icon: FaPeopleGroup,
        label: "Employees",
        href: "/admin/employees",
        hasDropdown: true,
        subItems: [
            { label: "Employees List", href: "" }, // /admin/employees (empty href = parent route)
            { label: "Add Employees", href: "/add" },
        ]
    },
    {
        icon: FaCalendarAlt,
        label: "Leaves",
        href: "/admin/leaves",
        hasDropdown: false,
    },
    {
        icon: FaUserCheck,
        label: "Attendance",
        href: "/admin/attendance-report",
        hasDropdown: false,
    },
    {
        icon: FaChartLine,
        label: "Performance",
        href: "/admin/performance-indicator",
        hasDropdown: true,
        subItems: [
            { label: "Performance Indicators", href: "" },
            { label: "Add Indicator", href: "/add" },
        ]
    },
    {
        icon: ImPaypal,
        label: "Payroll",
        href: "/admin/payroll",
        hasDropdown: true,
        subItems: [
            { label: "Payroll Items", href: "" },
            { label: "Employee Salary", href: "/employee-salary" },
            { label: "Payslip", href: "/payslip" },
        ]
    },
    {
        icon: FaUsers,
        label: "Users",
        href: "/admin/users",
        hasDropdown: true,
        subItems: [
            { label: "All Users", href: "" },
            { label: "Add New User", href: "/add" },
            { label: "Roles", href: "/roles" },
        ]
    },
    {
        icon: FaUmbrellaBeach,
        label: "Holidays",
        href: "/admin/holidays",
        hasDropdown: true,
        subItems: [
            { label: "All Holidays", href: "" },
            { label: "Add Holiday", href: "/add" },
        ]
    },
    {
        icon: FaUserCog,
        label: "Shift Management",
        href: "/admin/shift-management",
        hasDropdown: true,
        subItems: [
            { label: "Shift Timings", href: "" },
            { label: "Assign Shifts", href: "/assign-shifts" },
            // { label: "Rotate Shifts", href: "/rotate-shifts" },
        ]
    },
    {
        icon: FaCog,
        label: "Settings",
        href: "/admin/settings",
        hasDropdown: true,
        subItems: [
            { label: "General", href: "" },
            { label: "Company Settings", href: "/company" },
            { label: "Localization", href: "/localization" },
            { label: "Theme Settings", href: "/theme" }
        ]
    }
];

export const employeeSidebarItems = [
    {
        icon: LuLayoutDashboard,
        label: "Dashboard",
        href: "/employee/dashboard",
        hasDropdown: false
    },
    {
        icon: FaUserCheck,
        label: "Attendance",
        href: "/employee/attendance",
        hasDropdown: false,
    },
]

export const checkInOutData = [
    {
        name: "John Smith",
        time: "9:05 AM",
        status: "Checked In",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        type: "success",
        jobTitle: "Frontend Developer",
    },
    {
        name: "Sarah Johnson",
        time: "8:55 AM",
        status: "Checked In",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        type: "success",
        jobTitle: "iOS Developer",
    },
    {
        name: "Michael Chen",
        time: "Not Checked In",
        status: "Not Checked In",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        type: "error",
        jobTitle: "Backend Engineer",
    },
    {
        name: "Emily Wilson",
        time: "WFH",
        status: "Remote",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        type: "info",
        jobTitle: "UX Designer",
    },
];

export const activityData = {
    schedules: [
        {
            title: "UI/UX Designer Interview",
            description: "Final round interview for senior position",
            timeRange: "Today, 10:00 AM - 11:30 AM",
            candidates: [
                "https://randomuser.me/api/portraits/women/44.jpg",
                "https://randomuser.me/api/portraits/men/32.jpg",
                "https://randomuser.me/api/portraits/women/65.jpg",
            ],
            meetingType: "interview" as const, // Add 'as const' assertion
        },
        {
            title: "Quarterly Business Review",
            description: "Q1 performance review with stakeholders",
            timeRange: "Wed, 15 May 2024 02:00 PM - 03:30 PM",
            candidates: [
                "https://randomuser.me/api/portraits/men/75.jpg",
                "https://randomuser.me/api/portraits/women/68.jpg",
            ],
            meetingType: "review" as const, // Add 'as const' assertion
        },
    ],
    activities: [
        {
            userName: "Sarah Johnson",
            action: "Completed login page redesign",
            time: "10 minutes ago",
            userImage: "https://randomuser.me/api/portraits/women/44.jpg",
            activityType: "task" as const, // Add 'as const' assertion
        },
        {
            userName: "Michael Chen",
            action: "Created new project: Customer Portal 2.0",
            time: "1 hour ago",
            userImage: "https://randomuser.me/api/portraits/men/75.jpg",
            activityType: "project" as const, // Add 'as const' assertion
        },
        {
            userName: "Emily Wilson",
            action: "Commented on API documentation draft",
            time: "2 hours ago",
            userImage: "https://randomuser.me/api/portraits/women/68.jpg",
            activityType: "comment" as const, // Add 'as const' assertion
        },
        {
            userName: "David Kim",
            action: "Updated project timeline for Q2",
            time: "Yesterday, 4:30 PM",
            userImage: "https://randomuser.me/api/portraits/men/30.jpg",
            activityType: "update" as const, // Add 'as const' assertion
        },
        {
            userName: "Alex Morgan",
            action: "Merged PR #1245: Fix navigation bug",
            time: "Yesterday, 3:15 PM",
            userImage: "https://randomuser.me/api/portraits/men/42.jpg",
            activityType: "task" as const, // Add 'as const' assertion
        },
    ],
    birthdays: [
        {
            name: "Jessica Parker",
            role: "iOS Developer",
            date: "May 15, 1990",
            image: "https://randomuser.me/api/portraits/women/68.jpg",
            isToday: true,
        },
        {
            name: "Robert Chen",
            role: "DevOps Engineer",
            date: "May 18, 1988",
            image: "https://randomuser.me/api/portraits/men/65.jpg",
            isToday: false,
        },
        {
            name: "Lisa Wong",
            role: "Marketing Director",
            date: "May 22, 1985",
            image: "https://randomuser.me/api/portraits/women/28.jpg",
            isToday: false,
        },
        {
            name: "James Wilson",
            role: "HR Manager",
            date: "May 25, 1982",
            image: "https://randomuser.me/api/portraits/men/72.jpg",
            isToday: false,
        },
    ],
};

export const projects = [
    {
        id: "PRJ-001",
        name: "Website Redesign",
        team: [
            "https://randomuser.me/api/portraits/women/44.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg",
            "https://randomuser.me/api/portraits/women/68.jpg",
        ],
        hours: 15,
        totalHours: 255,
        deadline: "2023-06-15",
        priority: "High" as const,
    },
    {
        id: "PRJ-002",
        name: "API Integration",
        team: [
            "https://randomuser.me/api/portraits/men/75.jpg",
            "https://randomuser.me/api/portraits/men/32.jpg",
        ],
        hours: 40,
        totalHours: 255,
        deadline: "2023-06-20",
        priority: "Medium" as const,
    },
    {
        id: "PRJ-003",
        name: "Database Migration",
        team: ["https://randomuser.me/api/portraits/men/75.jpg"],
        hours: 70,
        totalHours: 255,
        deadline: "2023-06-25",
        priority: "Low" as const,
    },
    {
        id: "PRJ-004",
        name: "Mobile App Update",
        team: [
            "https://randomuser.me/api/portraits/women/44.jpg",
            "https://randomuser.me/api/portraits/women/68.jpg",
        ],
        hours: 90,
        totalHours: 255,
        deadline: "2023-06-18",
        priority: "High" as const,
    },
];

export const invoices = [
    {
        id: 1,
        employeeName: "John Smith",
        employeeImage: "https://randomuser.me/api/portraits/men/32.jpg",
        amount: "1,250.00",
        status: "paid",
    },
    {
        id: 2,
        employeeName: "Sarah Johnson",
        employeeImage: "https://randomuser.me/api/portraits/women/44.jpg",
        amount: "980.50",
        status: "paid",
    },
    {
        id: 3,
        employeeName: "Michael Chen",
        employeeImage: "https://randomuser.me/api/portraits/men/75.jpg",
        amount: "2,150.00",
        status: "unpaid",
    },
    {
        id: 4,
        employeeName: "Emily Wilson",
        employeeImage: "https://randomuser.me/api/portraits/women/68.jpg",
        amount: "1,750.00",
        status: "paid",
    },
];

export const departmentOptions = [
    'IT',
    'Development',
    'Design',
    'Marketing',
    'HR',
    'Finance',
    'Operations',
    'Sales'
];
export const employees = [
    'Mohsin Ikram',
    'Ali Hamza',
    'Haseeb',
    'Iqra',
    'Abdullah',
    'Zaid',
    'Faiq'
];
export const designationOptions = [
    'Developer',
    'Executive',
    'Software Engineer',
    'Product Manager',
    'UX Designer',
    'Marketing Specialist',
    'HR Manager',
    'Financial Analyst',
    'Operations Manager',
    'Sales Executive'
];

export const designations = [
    { id: '1', name: 'Web Designer' },
    { id: '2', name: 'Web Developer' },
    { id: '3', name: 'IOS Developer' },
];

export const technicalOptions = [
    { value: 'advanced', label: 'Advanced' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'average', label: 'Average' }
];

export const status = [
    { id: '1', name: 'Active' },
    { id: '2', name: 'Inactive' },
];

export const leaveTypes = [
    { value: "medical", label: "Medical Leave" },
    { value: "casual", label: "Casual Leave" },
    { value: "annual", label: "Annual Leave" },
];

export const leaveDurationOptions = [
    { value: "fullDay", label: "Full Day" },
    { value: "firstHalf", label: "First Half" },
    { value: "secondHalf", label: "Second Half" },
];

export const holidaysData: Holiday[] = [
    {
        id: 1,
        title: "New Year's Day",
        date: "2023-01-01",
        description: "Celebration of new year",
        status: "Active",
    },
    {
        id: 2,
        title: "Martin Luther King Jr. Day",
        date: "2023-01-16",
        description: "Honors civil rights leader",
        status: "Active",
    },
    {
        id: 3,
        title: "Presidents' Day",
        date: "2023-02-20",
        description: "Honors US presidents",
        status: "Active",
    },
    {
        id: 4,
        title: "Memorial Day",
        date: "2023-05-29",
        description: "Remembers fallen soldiers",
        status: "Active",
    },
    {
        id: 5,
        title: "Independence Day",
        date: "2023-07-04",
        description: "US National holiday",
        status: "Active",
    },
    {
        id: 6,
        title: "Labor Day",
        date: "2023-09-04",
        description: "Celebrates workers",
        status: "Active",
    },
    {
        id: 7,
        title: "Columbus Day",
        date: "2023-10-09",
        description: "Celebrates discovery of America",
        status: "Active",
    },
    {
        id: 8,
        title: "Veterans Day",
        date: "2023-11-11",
        description: "Honors military veterans",
        status: "Active",
    },
    {
        id: 9,
        title: "Thanksgiving",
        date: "2023-11-23",
        description: "Thanksgiving holiday",
        status: "Active",
    },
    {
        id: 10,
        title: "Christmas Day",
        date: "2023-12-25",
        description: "Christmas celebration",
        status: "Active",
    }
];

export const countryOptions = [
    { value: "us", label: "United States" },
    { value: "ca", label: "Canada" },
    { value: "uk", label: "United Kingdom" },
];

export const stateOptions = [
    { value: "ny", label: "New York" },
    { value: "ca", label: "California" },
    { value: "tx", label: "Texas" },
];

export const cityOptions = [
    { value: "nyc", label: "New York City" },
    { value: "la", label: "Los Angeles" },
    { value: "ch", label: "Chicago" },
];

export const holidayStatusOptions = [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
];

export const metrics = [
    {
        title: "Total Active Employees",
        value: "120",
        icon: <RiTeamLine className=" text-green-500" size={24} />,
        percent: "95",
        percentColor: "bg-green-100",
        textColor: "text-green-500",
        iconBgColor: "bg-green-50"
    },
    {
        title: "Employees on Leave Today",
        value: "5",
        icon: <Briefcase className="text-orange-400" size={24} />,
        percent: "24",
        percentColor: "bg-orange-200",
        textColor: "text-orange-400",
        iconBgColor: "bg-orange-50",
    },
    {
        title: "Employees Not Clectriral Yet",
        value: "12",
        icon: <RiPresentationFill className="text-blue-600" size={24} />,
        percent: "48",
        percentColor: "bg-blue-100",
        textColor: "text-blue-500",
        iconBgColor: "bg-blue-50"
    },
    {
        title: "Employees With Late Check In Today",
        value: "3",
        icon: <CheckSquare className="text-purple-500" size={24} />,
        percent: "1.27",
        percentColor: "bg-pink-100",
        textColor: "text-pink-500",
        iconBgColor: "bg-pink-50"

    }

];

export const employeeStats = [
    {
        title: "Total Employee",
        value: 20,
        percentage: "100",
        icon: <Users className="h-4 w-4 text-white" />,
        percentColor: "bg-fuchsia-100",
        textColor: "text-fuchsia-700",
        iconBgColor: "bg-black"
    },
    {
        title: "Active",
        value: 19,
        percentage: "95",
        icon: <CheckCircle className="h-4 w-4 text-white" />,
        iconBgColor: "bg-green-500",
        percentColor: "bg-green-100",
        textColor: "text-green-500",
    },
    {
        title: "Inactive",
        value: 1,
        percentage: "5",
        icon: <XCircle className="h-4 w-4 text-white" />,
        iconBgColor: "bg-red-500",
        percentColor: "bg-red-100",
        textColor: "text-red-700",
    },
    {
        title: "New Joiners",
        value: 0,
        percentage: "0",
        icon: <UserPlus className="h-4 w-4 text-white" />,
        iconBgColor: "bg-blue-400",
        percentColor: "bg-blue-100",
        textColor: "text-blue-500",
    }
];

export const adminAttendanceStats = [
    {
        title: "Present",
        value: 210,
        percentage: "1",
        icon: <Users className="h-4 w-4 text-white" />,
        percentColor: "bg-fuchsia-100",
        textColor: "text-fuchsia-700",
        iconBgColor: "bg-black"
    },
    {
        title: "Absent",
        value: 10,
        percentage: "-19",
        icon: <UserPlus className="h-4 w-4 text-white" />,
        iconBgColor: "bg-blue-400",
        percentColor: "bg-blue-100",
        textColor: "text-blue-500",
    }
];

export const leaveApplications = [
    {
        id: "1",
        name: "Madeline Brooks",
        type: "Vacation Leave",
        recentApprovals: [
            { name: "Amelia Taylor", date: "Apr 24" },
            { name: "Daniel Green", date: "Apr 22" }
        ]
    },
    {
        id: "2",
        name: "John Smith",
        type: "Sick Leave (Apr 25-Apr 28)",
        recentApprovals: [
            { name: "Sarah Johnson", date: "Apr 20" },
            { name: "Michael Brown", date: "Apr 18" }
        ]
    }
];

export const rolesData = [
    { id: 1, name: "Admin", created_at: "12/09/2025", status: "Active" },
    { id: 2, name: "HR Manager", created_at: "12/09/2025", status: "In-Active" },
    { id: 3, name: "Team Lead", created_at: "12/09/2025", status: "Active" },
    { id: 4, name: "Employee", created_at: "12/09/2025", status: "Active" },
];

export const employeeLeavesStats = [
    {
        title: "Leave Balance",
        icon: <AiOutlineSchedule className="text-blue-600 w-6 h-6" />,
        iconBgColor: "bg-blue-50",
        variant: "compact",
        subtitles: [
            { label: 'Casual', value: 5 },
            { label: 'Sick', value: 8 },
        ]
    },
    {
        title: "Leaves Taken",
        icon: <RiPlayCircleLine className="text-blue-600 w-6 h-6" />,
        iconBgColor: "bg-blue-50",
        variant: "compact",
        subtitles: [
            { label: 'This Month', value: 2 }
        ]
    },
    {
        title: "Upcoming Approved",
        icon: <MdAppRegistration className="text-blue-600 w-6 h-6" />,
        iconBgColor: "bg-blue-50",
        variant: "compact",
        subtitles: [
            { label: 'Leaves', value: 1 }
        ]
    }

];

export const attendanceData = {
    totalWorkingDays: 20,
    daysPresent: 18,
    daysAbsent: 2,
    daysLate: 1,
    clockInTime: "9:05 AM"
};

export const alertsData = [
    {
        icon: <Calendar className="w-6 h-6 text-blue-600" />,
        text: "Leave approval status"
    },
    {
        icon: <Clock className="w-6 h-6 text-blue-600" />,
        text: "Reminder to check in"
    },
    {
        icon: <Grid3x3 className="w-6 h-6 text-blue-600" />,
        text: "Payslip available"
    },
    {
        icon: <Volume2 className="w-6 h-6 text-blue-600" />,
        text: "General announcement"
    }
];

export const timeTrackingData = [
    {
        value: 8.36,
        target: 9,
        change: '+5%',
        changeDescription: 'This Week',
        changeType: 'increase',
        iconColor: 'bg-orange-400',
        icon: <RiPlayCircleLine className="text-white w-6 h-6" />,
    },
    {
        value: 10,
        target: 40,
        change: '+7%',
        changeDescription: 'Last Week',
        changeType: 'increase',
        iconColor: 'bg-black',
        icon: <RiPlayCircleLine className="text-white w-6 h-6" />,

    },
    {
        value: 75,
        target: 98,
        change: '-8%',
        changeDescription: 'Last Month',
        changeType: 'decrease',
        iconColor: 'bg-blue-400',
        icon: <RiPlayCircleLine className="text-white w-6 h-6" />,

    },
    {
        value: 16,
        target: 28,
        change: '-6%',
        changeDescription: 'Last Month',
        changeType: 'decrease',
        iconColor: 'bg-pink-400',
        icon: <RiPlayCircleLine className="text-white w-6 h-6" />,

    }
];

export const employeeAttendanceData = [
    { date: '14 Jan 2024', checkIn: '09:00 AM', status: 'Present', checkOut: '06:45 PM', break: '30 Min', late: '32 Min', overtime: '20 Min', hours: '8.55 Hrs', hoursType: 'success' },
    { date: '21 Jan 2024', checkIn: '09:00 AM', status: 'Present', checkOut: '06:12 PM', break: '20 Min', late: '45 Min', overtime: '-', hours: '7.54 Hrs', hoursType: 'danger' },
    { date: '20 Feb 2024', checkIn: '09:00 AM', status: 'Present', checkOut: '06:13 PM', break: '50 Min', late: '-', overtime: '33 Min', hours: '8.45 Hrs', hoursType: 'success' },
    { date: '15 Mar 2024', checkIn: '09:00 AM', status: 'Absent', checkOut: '06:23 PM', break: '41 Min', late: '-', overtime: '50 Min', hours: '8.35 Hrs', hoursType: 'success' },
    { date: '12 Apr 2024', checkIn: '09:00 AM', status: 'Present', checkOut: '06:43 PM', break: '23 Min', late: '-', overtime: '10 Min', hours: '8.22 Hrs', hoursType: 'success' },
    { date: '20 May 2024', checkIn: '09:00 AM', status: 'Present', checkOut: '07:15 PM', break: '03 Min', late: '-', overtime: '-', hours: '8.32 Hrs', hoursType: 'success' },
    { date: '06 Jul 2024', checkIn: '09:00 AM', status: 'Present', checkOut: '07:13 PM', break: '32 Min', late: '-', overtime: '-', hours: '9.15 Hrs', hoursType: 'info' },
    { date: '02 Sep 2024', checkIn: '09:00 AM', status: 'Present', checkOut: '09:17 PM', break: '14 Min', late: '12 Min', overtime: '-', hours: '8.35 Hrs', hoursType: 'success' },
    { date: '10 Dec 2024', checkIn: '09:00 AM', status: 'Present', checkOut: '09:23 PM', break: '10 Min', late: '-', overtime: '45 Min', hours: '9.25 Hrs', hoursType: 'info' },
    { date: '15 Nov 2024', checkIn: '09:00 AM', status: 'Present', checkOut: '08:15 PM', break: '12 Min', late: '-', overtime: '-', hours: '8.35 Hrs', hoursType: 'success' }
];

export const statusOptions = [
    'Punch in',
    'Punch Out',
];

const getStatusColor = (status: string) => {
    const statusColors: Record<string, string> = {
        Present: 'bg-green-100 text-green-800',
        Absent: 'bg-red-100 text-red-800',
    };
    return statusColors[status] || 'bg-gray-100 text-gray-800';
};

const getHoursColor = (type: 'success' | 'danger' | 'info' | string) => ({
    success: 'bg-green-500',
    danger: 'bg-red-500',
    info: 'bg-blue-500',
}[type as 'success' | 'danger' | 'info'] || 'bg-gray-500');

export const employeeAttendanceColumns = [
    { header: 'Date', accessor: 'date' },
    { header: 'Check In', accessor: 'checkIn' },
    {
        header: 'Status',
        accessor: 'status',
        render: (value: string) => (
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(value)}`}>
                {value}
            </span>
        ),
    },
    { header: 'Check Out', accessor: 'checkOut' },
    { header: 'Break', accessor: 'break' },
    { header: 'Late', accessor: 'late' },
    { header: 'Overtime', accessor: 'overtime' },
    {
        header: 'Production Hours',
        accessor: 'hours',
        render: (_: any, row: any) => (
            <span
                className={`px-3 py-1 text-xs font-semibold text-white rounded-full ${getHoursColor(
                    row.hoursType
                )}`}
            >
                {row.hours}
            </span>
        ),
    },
];

export const payrollItemsData = [
    {
        id: 1,
        name: 'Gratuity',
        category: 'Monthly Remuneration',
        amount: '$20',
    },
    {
        id: 2,
        name: 'Arrears of Salary',
        category: 'Additional Remuneration',
        amount: '$8',
    },
    {
        id: 3,
        name: 'Leave Balance Amount',
        category: 'Monthly Remuneration',
        amount: '$5',
    },
];

export const payrollItemsColumns = [
    // {
    //     header: (
    //         <input type="checkbox" onChange={(e) => handleSelectAll(e.target.checked)} />
    //     ),
    //     accessor: 'select',
    //     render: (row: any, isSelected: boolean, toggleRow: (id: number) => void) =>
    //         <input
    //             type="checkbox"
    //             checked={isSelected}
    //             onChange={() => toggleRow(row.id)}
    //         />
    // },
    { header: 'Name', accessor: 'name' },
    { header: 'Category', accessor: 'category' },
    { header: 'Default / Unit Amount', accessor: 'amount' },
    {
        header: '',
        accessor: 'actions',
        render: (_: any, row: any) => (
            <div className="flex gap-4">
                <button className="cursor-pointer">
                    <FiEdit size={16} />
                </button>
                <button className="cursor-pointer">
                    <IoTrashOutline size={16} />
                </button>
            </div>
        ),
    },
];

export const sortingOrder = [
    'Recently Added',
    'Ascending',
    'Desending',
];

export const designation = [
    'Finance',
    'Developer',
    'Executive',
    'Manager',
];

export const employeSalaryColumns = [
    {
        header: 'Emp ID',
        accessor: 'id'
    },
    {
        header: 'Name',
        accessor: 'name'
    },
    {
        header: 'Email',
        accessor: 'email'
    },
    {
        header: 'Phone',
        accessor: 'phone'
    },
    {
        header: 'Designation',
        accessor: 'designation',
        render: (_: any, row: any) => (
            <Dropdown
                name="sort"
                id="sort"
                placeholder='Designation'
                options={designation.map((d) => ({
                    value: d,
                    label: d,
                }))}
            />
        ),
    },
    {
        header: 'Joining Date',
        accessor: 'joiningDate'
    },
    {
        header: 'Salary',
        accessor: 'salary'
    },
    {
        header: 'Payslip',
        accessor: 'payslip',
        render: () => (
            <span className={`px-3 py-2 text-xs font-semibold text-white bg-black rounded-full`}>
                Generate Slip
            </span>
        )
    },
    {
        header: '',
        accessor: 'actions',
        render: (_: any, row: any) => (
            <div className="flex gap-4">
                <button className="cursor-pointer">
                    <FiEdit size={16} />
                </button>
                <button className="cursor-pointer">
                    <IoTrashOutline size={16} />
                </button>
            </div>
        ),
    }
];


export const employeSalaryData = [
    {
        "id": "Emp-001",
        "name": "Anthony Lewis",
        "designation": "Finance",
        "email": "anthony@example.com",
        "phone": "(123) 4567 890",
        "joiningDate": "12 Sep 2024",
        "salary": "$40000"
    },
    {
        "id": "Emp-002",
        "name": "Brian Villalobos",
        "designation": "Developer",
        "email": "brian@example.com",
        "phone": "(179) 7382 829",
        "joiningDate": "24 Oct 2024",
        "salary": "$35000"
    },
    {
        "id": "Emp-003",
        "name": "Harvey Smith",
        "designation": "Executive",
        "email": "harvey@example.com",
        "phone": "(184) 2719 738",
        "joiningDate": "18 Feb 2024",
        "salary": "$20000"
    },
    {
        "id": "Emp-004",
        "name": "Stephan Peralt",
        "designation": "Executive Officer",
        "email": "peral@example.com",
        "phone": "(193) 7839 748",
        "joiningDate": "17 Oct 2024",
        "salary": "$22000"
    },
    {
        "id": "Emp-005",
        "name": "Doglas Martini",
        "designation": "Manager",
        "email": "martniwr@example.com",
        "phone": "(183) 9302 890",
        "joiningDate": "20 Jul 2024",
        "salary": "$25000"
    },
    {
        "id": "Emp-006",
        "name": "Linda Ray",
        "designation": "Finance",
        "email": "ray456@example.com",
        "phone": "(120) 3728 039",
        "joiningDate": "10 Apr 2024",
        "salary": "$30000"
    },
    {
        "id": "Emp-007",
        "name": "Elliot Murray",
        "designation": "Developer",
        "email": "murray@example.com",
        "phone": "(102) 8480 832",
        "joiningDate": "29 Aug 2024",
        "salary": "$35000"
    },
    {
        "id": "Emp-008",
        "name": "Rebecca Smith",
        "designation": "Executive",
        "email": "smith@example.com",
        "phone": "(162) 8920 713",
        "joiningDate": "22 Feb 2024",
        "salary": "$45000"
    },
    {
        "id": "Emp-009",
        "name": "Connie Waters",
        "designation": "Developer",
        "email": "connie@example.com",
        "phone": "(189) 0920 723",
        "joiningDate": "03 Nov 2024",
        "salary": "$50000"
    },
    {
        "id": "Emp-010",
        "name": "Lori Broaddus",
        "designation": "Finance",
        "email": "broaddus@example.com",
        "phone": "(168) 8392 823",
        "joiningDate": "17 Dec 2024",
        "salary": "$25000"
    }
]


export const payslipEarningColumns = [
    {
        header: 'Earnings',
        accessor: 'earning'
    },
    {
        header: '',
        accessor: 'salary',
        render: (row: any) => (
            <span className={`font-bold text-black`}>
                {row}
            </span>
        )
    },
]

export const payslipEarningData = [
    {
        earning: "Basic Salary",
        salary: "$3000"
    },
    {
        earning: "House Rent Allowance (H.R.A.)",
        salary: "$1000"
    },
    {
        earning: "Conveyance",
        salary: "$200"
    },
    {
        earning: "Other Allowance",
        salary: "$100"
    },
    {
        earning: "Total Earnings",
        salary: "$200"
    },
    {
        earning: "Total Earnings",
        salary: "$4300"
    },
];

export const payslipDeductionsColumns = [
    {
        header: 'Deductions',
        accessor: 'deductions'
    },
    {
        header: '',
        accessor: 'salary',
        render: (row: any) => (
            <span className={`font-bold text-black`}>
                {row}
            </span>
        )
    },
]

export const payslipDeductionsData = [
    {
        deductions: "Tax Deducted at Source (T.D.S.)",
        salary: "$3000"
    },
    {
        deductions: "Provident Fund",
        salary: "$200"
    },
    {
        deductions: "ESI",
        salary: "$300"
    },
    {
        deductions: "Other Allowance",
        salary: "$150"
    },
    {
        deductions: "Loan",
        salary: "$50"
    },
    {
        deductions: "Total Earnings",
        salary: "$700"
    },
];


export const assignShiftsColumns = [
    {
        header: 'Employee',
        accessor: 'employee'
    },
       {
        header: 'Designation',
        accessor: 'designation'
    },
    {
        header: 'Shift',
        accessor: 'shift'
    },
]

export const assignShiftsData = [
  {
    employee: 'Mohsin Ikram',
    designation: 'Software Engineer',
    shift: 'Night'
  },
  {
    employee: 'Ali Hamza',
    designation: 'Frontend Developer',
    shift: 'General'
  },
  {
    employee: 'Haseeb',
    designation: 'Backend Developer',
    shift: 'Morning'
  },
  {
    employee: 'Iqra',
    designation: 'QA Engineer',
    shift: 'General'
  },
  {
    employee: 'Abdullah',
    designation: 'UI/UX Designer',
    shift: 'Night'
  },
  {
    employee: 'Zaid',
    designation: 'DevOps Engineer',
    shift: 'Night'
  },
  {
    employee: 'Faiq',
    designation: 'Support Engineer',
    shift: 'Morning'
  },
]

export const shiftTimeColumns = [
    {
        header: 'Shift Name',
        accessor: 'shiftName'
    },
    {
        header: 'Start Time',
        accessor: 'start'
    },
    {
        header: 'End Time',
        accessor: 'end'
    },
]

export const shiftTimeData = [
    {
        shiftName: 'Morning',
        start: "09:00 AM",
        end: "10:00 PM"
    },
    {
        shiftName: 'Night',
        start: "10:00 PM",
        end: "05:00 AM"
    },
        {
        shiftName: 'General',
        start: "09:00 AM",
        end: "05:00 pM"
    },
]

export const rotateShiftColumns = [
  {
    header: 'Employee',
    accessor: 'employee'
  },
  {
    header: 'Next Shift',
    accessor: 'nextShift'
  }
]

export const rotateShiftData = [
  {
    employee: 'Mohsin Ikram',
    nextShift: "Night"
  },
  {
    employee: 'Ali Hamza',
    nextShift: "General"
  },
  {
    employee: 'Haseeb',
    nextShift: "Morning"
  }
]

export const sorting = [
    'Ascending',
    'Desending',
];
