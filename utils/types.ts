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
