export interface Employee {
    id: number;
    name: string;
    image: string;
    jobTitle: string;
    department: string;
    workDetail: string;
    status: 'Active' | 'On Leave';
    startDate: string; 
    contact: string;
  }
  
  export type ViewType = 'dashboard' | 'employees';

export interface NavigationProps {
    navigateTo: (view: 'dashboard' | 'employees') => void;
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