import React from "react";
import AddLeave from "@/components/employee/leaves/add";
import EmployeeLayout from "@/components/layouts/EmployeeLayout";

export const generateMetadata = () => ({
  title: "Edit Leave Request | SmartHR",
  description: "Edit leave requests with employee details, leave type selection, and duration tracking.",
  keywords: [
    "Edit leave",
    "leave request",
    "employee leave",
    "leave management",
    "HR system"
  ]
});

  const leaveData = {
    leaveType: "medical",
    fromDate: "2025-06-01",
    toDate: "2025-06-03",
    reason: "Fever and rest required",
  };
  
export default function AddLeavePage() {
  return (
    <EmployeeLayout>
      <AddLeave isEdit={true} initialValues={leaveData} />
    </EmployeeLayout>
  );
}