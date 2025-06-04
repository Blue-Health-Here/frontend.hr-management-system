// app/admin/payroll/employee-salary/page.tsx
import EmployeeSalary from "@/components/admin/payroll/employe-salary";
import MainLayout from "@/components/layouts/MainLayout";

export const generateMetadata = () => ({
  title: "Employee Salary | SmartHR",
  description: "View and manage employee salary records with date range filtering, designation sorting, and export capabilities.",
  keywords: [
    "employee salary",
    "salary management", 
    "payroll records",
    "salary processing",
    "compensation data"
  ]
});

export default function EmployeeSalaryPage() {
  return (
    <MainLayout>
      <EmployeeSalary />
    </MainLayout>
  );
}