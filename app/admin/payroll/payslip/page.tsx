// app/admin/payroll/payslip/page.tsx
import EmployeePayslip from "@/components/admin/payroll/payslip";
import MainLayout from "@/components/layouts/MainLayout";

export const generateMetadata = () => ({
  title: "Employee Payslip | SmartHR",
  description: "View and download detailed employee payslips with earnings, deductions, and net salary calculations.",
  keywords: [
    "employee payslip",
    "salary statement",
    "earnings and deductions", 
    "payroll document",
    "salary breakdown"
  ]
});

export default function PayslipPage() {
  return (
    <MainLayout>
      <EmployeePayslip />
    </MainLayout>
  );
}