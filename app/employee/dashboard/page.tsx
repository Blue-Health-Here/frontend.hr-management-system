import React from 'react'
import EmployeeLayout from '@/components/layouts/EmployeeLayout';
import EmployeeDashboard from '@/components/employee/EmployeeDashboard';


const Dashboard = () => {
  return (
  <EmployeeLayout>
    <EmployeeDashboard/>
  </EmployeeLayout>
  );
}

export default Dashboard