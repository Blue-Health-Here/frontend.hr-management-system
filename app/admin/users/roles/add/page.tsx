// app/admin/users/roles/add/page.tsx
import AddRole from "@/components/admin/users/roles/add";
import MainLayout from "@/components/layouts/MainLayout";

export const generateMetadata = () => ({
  title: "Add Role | SmartHR",
  description: "Create and configure new user roles with status management for access control and permissions.",
  keywords: [
    "add role",
    "role management",
    "access control",
    "user permissions",
    "role status"
  ]
});

export default function AddRolePage() {
  return (
    <MainLayout>
      <AddRole />
    </MainLayout>
  );
}