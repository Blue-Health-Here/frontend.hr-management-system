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