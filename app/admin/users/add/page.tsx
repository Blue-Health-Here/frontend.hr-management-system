// app/admin/users/add/page.tsx
import AddUser from "@/components/admin/users/add";
import MainLayout from "@/components/layouts/MainLayout";

export const generateMetadata = () => ({
  title: "Add New User | SmartHR",
  description: "Create and configure new user accounts with role assignments and granular permission settings.",
  keywords: [
    "add user",
    "user management",
    "role assignment",
    "user permissions",
    "account creation"
  ]
});

export default function AddUserPage() {
  return (
    <MainLayout>
      <AddUser />
    </MainLayout>
  );
}