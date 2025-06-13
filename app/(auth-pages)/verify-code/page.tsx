// app/auth/success/page.tsx (or wherever your success page is)
import AuthLayoutContent from "@/components/auth/AuthLayoutContent";
import PasswordSuccess from "@/components/auth/PasswordSuccess";
import AuthLayout from "@/components/layouts/AuthLayout";

export const generateMetadata = () => ({
  title: "Success | SmartHR",
  description: "Password successfully changed - SmartHR",
  keywords: [
    "SmartHR success",
    "password changed",
    "HR system",
    "authentication success"
  ]
});

export default function SuccessPage() {
  return (
    <AuthLayout 
      showBackgroundShapes={true}
      leftContent={
        <AuthLayoutContent
          title="Igniting Employee Potential"
          description="Efficiently manage your workforce, streamline operations effectively." 
        />
      }
    >
      <PasswordSuccess />
    </AuthLayout>
  );
}