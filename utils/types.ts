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
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
}
export interface LeavesCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon; // Type for Lucide icons
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

export interface DropdownProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  className?: string;
}

export interface PerformanceIndicator {
  id: string;
  designation: string;
  department: string;
  approvedBy: string;
  createdDate: string;
  status: "Active" | "Inactive"; 
}

export interface DataTableProps {
  filteredLeaves?: Leave[];
  indicators?: PerformanceIndicator[];
}

