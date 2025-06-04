// app/admin/payroll/paroll-items/page.tsx
import EmployeePayrollItems from "@/components/admin/payroll/paroll-items";
import MainLayout from "@/components/layouts/MainLayout";

export const generateMetadata = () => ({
  title: "Payroll Items | SmartHR",
  description: "Manage payroll components including additions, overtime, and deductions for employee compensation.",
  keywords: [
    "payroll items",
    "salary additions",
    "payroll deductions", 
    "overtime management",
    "compensation components"
  ]
});

export default function PayrollItemsPage() {
  return (
    <MainLayout>
      <EmployeePayrollItems />
    </MainLayout>
  );
}