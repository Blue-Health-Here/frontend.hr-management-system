// app/employee/dashboard/page.tsx
import EmployeeDashboard from '@/components/employee/dashboard';
import EmployeeLayout from '@/components/layouts/EmployeeLayout';

export const generateMetadata = () => ({
  title: "Dashboard | SmartHR",
  description: "Your personalized workplace hub showing attendance metrics, leave balances, and important notifications.",
  keywords: [
    "employee dashboard",
    "workplace portal", 
    "attendance tracking",
    "leave balance",
    "employee self-service"
  ]
});

export default function DashboardPage() {
  return (
    <EmployeeLayout>
      <EmployeeDashboard />
    </EmployeeLayout>
  );
}