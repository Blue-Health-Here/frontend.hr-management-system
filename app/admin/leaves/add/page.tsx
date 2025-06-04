// app/admin/leaves/add/page.tsx
import AddLeave from "@/components/admin/leaves/add";
import MainLayout from "@/components/layouts/MainLayout";

export const generateMetadata = () => ({
  title: "Add Leave Request | SmartHR",
  description: "Create new leave requests with employee details, leave type selection, and duration tracking.",
  keywords: [
    "add leave",
    "leave request",
    "employee leave",
    "leave management",
    "HR system"
  ]
});

export default function AddLeavePage() {
  return (
    <MainLayout>
      <AddLeave />
    </MainLayout>
  );
}