import React, { ReactNode } from 'react'
import Sidebar from '../common/Sidebar';
import Topbar from '../common/Topbar';

interface EmployeeLayoutProps {
  children: ReactNode;
}

const EmployeeLayout = ({ children }: EmployeeLayoutProps) => {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar isEmployee={true} />
      <div className="w-full">
        <Topbar />
        <div style={{ minHeight: 'calc(100vh - 80px)' }} 
          className="p-4 md:p-6 lg:p-8 mt-20 bg-gray-100 rounded-0 lg:rounded-tl-4xl neo-down ml-0 lg:ml-64">{children}</div>
      </div>
    </div>
  );
}

export default EmployeeLayout