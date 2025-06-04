// HRDashboard.tsx

import EmployeeDetailsView from "@/components/admin/employees/details";
import AdminLayout from "@/components/layouts/AdminLayout";

export default function HRDashboard() {
  return (
    <AdminLayout>
      <EmployeeDetailsView />
    </AdminLayout>
  );
}
