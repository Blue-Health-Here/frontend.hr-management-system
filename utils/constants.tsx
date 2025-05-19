import { Holiday } from "./types";
import { LuLayoutDashboard } from "react-icons/lu";
import {
    FaUsers,
    FaCalendarAlt,
    FaUserCheck,
    FaChartLine,
    FaUmbrellaBeach,
    FaUserCog,
    FaCog
} from "react-icons/fa";
import {
    Briefcase,
    CheckCircle,
    CheckSquare,
    DollarSign,
    Percent,
    UserPlus,
    Users,
    XCircle,
} from "lucide-react";
import { RiPresentationFill, RiTeamLine } from "react-icons/ri";
import { text } from "stream/consumers";
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

export const enhancedSidebarNav = [
    {
        icon: LuLayoutDashboard,
        label: "Dashboard",
        href: "/dashboard",
        hasDropdown: false
    },
    // {
    //     label: "Management",
    //     isHeader: false
    // },
    {
        icon: FaUsers,
        label: "Employees",
        href: "/employees",
        hasDropdown: true,
        subItems: [
            { label: "Add Employees", href: "/employees/add" },]
    },
    {
        icon: FaCalendarAlt,
        label: "Leaves",
        href: "/leaves",
        hasDropdown: true,
        subItems: [
            { label: "Leave Types", href: "/leaves/add" }
        ]
    },
    {
        icon: FaUserCheck,
        label: "Attendance",
        href: "/attendance-report",
        hasDropdown: false,
    },
    // {
    //     label: "HR Functions",
    //     isHeader: true
    // },
    {
        icon: FaChartLine,
        label: "Performance",
        href: "/performance-indicator",
        hasDropdown: true,
        subItems: [
            { label: "Add Indicator", href: "/performance-indicator/add" },
            { label: "Goals", href: "/performance-indicator/goals" }
        ]
    },
    {
        icon: FaUmbrellaBeach,
        label: "Holidays",
        href: "/holidays",
        hasDropdown: true,
        subItems: [
            { label: "Add Holiday", href: "/holidays/add" },
        ]
    },
    // {
    //     label: "Administration",
    //     isHeader: true
    // },
    {
        icon: FaUserCog,
        label: "Users",
        href: "/users",
        hasDropdown: true,
        subItems: [
            { label: "Add New User", href: "/users/add" },
        ]
    },
    {
        icon: FaCog,
        label: "Settings",
        href: "/settings",
        hasDropdown: true,
        subItems: [
            { label: "Company Settings", href: "/settings/company" },
            { label: "Localization", href: "/settings/localization" },
            { label: "Theme Settings", href: "/settings/theme" }
        ]
    }
];

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

// Department options
export const departmentOptions = [
    'Development',
    'Design',
    'Marketing',
    'HR',
    'Finance',
    'Operations',
    'Sales'
];

// Designation options
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
        title: "Employee database",
        value: "95%",
        icon: <RiTeamLine className=" text-green-500" size={24} />,
        percent: "95",
        percentColor: "bg-green-100",
        textColor: "text-green-500",
        iconBgColor: "bg-green-50"
    },
    {
        title: "Leave management",
        value: "24",
        icon: <Briefcase className="text-orange-400" size={24} />,
        percent: "24",
        percentColor: "bg-orange-200",
        textColor: "text-orange-400",
        iconBgColor: "bg-orange-50"
    },
    {
        title: "Attendance tracking",
        value: "48",
        icon: <RiPresentationFill className="text-blue-600" size={24} />,
        percent: "48",
        percentColor: "bg-blue-100",
        textColor: "text-blue-500",
        iconBgColor: "bg-blue-50"
    },
    {
        title: "Performance reviews",
        value: "127",
        icon: <CheckSquare className="text-purple-500" size={24} />,
        percent: "1.27",
        percentColor: "bg-pink-100",
        textColor: "text-pink-500",
        iconBgColor: "bg-pink-50"

    },
    {
        title: "Payroll management",
        value: "$24,500",
        icon: <DollarSign className="text-yellow-400" size={24} />,
        percent: "24.5",
        percentColor: "bg-yellow-100",
        textColor: "text-yellow-500",
        iconBgColor: "bg-yellow-50"
    },
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