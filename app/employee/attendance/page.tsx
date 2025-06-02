import React from 'react'
import EmployeeLayout from '@/components/layouts/EmployeeLayout';
import EmployeeAttendance from '@/components/employee/attendance';


const Attendance = () => {
  return (
  <EmployeeLayout>
    <EmployeeAttendance />
  </EmployeeLayout>
  );
}

export default Attendance