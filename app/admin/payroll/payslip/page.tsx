// app/admin/payroll/payslip/page.tsx
import EmployeePayslip from "@/components/admin/payroll/payslip";
import AdminLayout from "@/components/layouts/AdminLayout";

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
    <AdminLayout>
      <EmployeePayslip />
    </AdminLayout>
  );
}