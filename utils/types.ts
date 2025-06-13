import { LucideIcon } from 'lucide-react'; 

export interface Employee {
  id?: number;
  name?: string;
  image?: string;
  jobTitle?: string;
  department?: string;
  workDetail?: string;
  status?: 'Active' | 'On Leave' | any;
  startDate?: string;
  contact?: string;
  time?: string;
  type?: string;
}

export type ViewType = 'dashboard' | 'employees';

export interface NavigationProps {
  navigateTo: (view: 'dashboard' | 'employees') => void;
}

export interface AttendanceData {
  present: number;
  late: number;
  permission: number;
  absent: number;
}

export interface AttendanceCardProps {
  title: string;
  value: string;
  percentage: string;
  iconColor: string;
  progressWidth: string;
  trendText: string;
  iconPath: string;
}

export interface TopPerformer {
  name: string;
  image: string;
  jobTitle: string;
  performance: string;
}

export interface StatsOverviewProps {
  attendanceData: AttendanceData;
  checkInOutData: Employee[];
  topPerformer: TopPerformer;
}

export interface InputFieldProps {
  label?: string; 
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  hideLabel?: boolean;
}
export interface LeavesCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon; 
  iconColor: string;
  bgImage: string;
}

export interface DateRangeDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export interface Employees {
  id: string;
  name: string;
  image: string;
  department: string;
  designation?: string; 
}

export interface Leave {
  id: string;
  employee: string;
  employeeImage: string;
  leaveType: string;
  from: string;
  to: string;
  days: number;
  department: string;
  isPlanned: boolean;
  isPending: boolean;
}
export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  id: string;
  name: string;
  label?: string;
  options: DropdownOption[];
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

export interface PerformanceIndicator {
  id: string;
  designation: string;
  department: string;
  approvedBy: string;
  createdDate: string;
  status: "Active" | "Inactive"; 
}


export type Holiday = {
  id: number;
  title: string;
  date: string;
  description: string;
  status: 'Active' | 'Inactive';
};

export type DataTableProps = {
  filteredLeaves?: Leave[] | User[];
  indicators?: PerformanceIndicator[];
  holidays?: Holiday[];
  filteredUsers?: User[];
};

export type User = {
  id: string | number;
  name: string;
  email: string;
  createdDate: string;
  role: "Employee" | "Client";
  status: "Active" | "Inactive";
  image: string;
};

export interface DashboardHeaderProps {
  user: {
    image: string;
    name: string;
    pendingApprovals: number;
    leaveRequests: number;
  };
}

export interface SignInFormValues {
  userName: string;
  password: string;
  // rememberMe: boolean;
}

export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  agreeTerms?: boolean;
}

export interface VerifyCodeAfterSignUpProps {
  userId: string;
  code: string;
  whichPurpose: string
}

export interface ForgotPasswordFormValues {
  email: string;
}

export interface Attendance {
  totalWorkingDays: number;
  daysPresent: number;
  daysAbsent: number;
  daysLate: number;
  clockInTime: string;
}

export interface AlertItem {
  icon: React.ReactNode;
  text: string;
}

export interface EmployeeDashboardCardProps {
  title: string;
  type: 'attendance' | 'payslip' | 'alerts';
  attendanceData?: Attendance;
  alerts?: AlertItem[];
}

