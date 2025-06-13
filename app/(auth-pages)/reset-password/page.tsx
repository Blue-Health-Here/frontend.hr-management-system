import AuthLayout from "@/components/layouts/AuthLayout";
import ResetPassowrd from "@/components/auth/ResetPassowrd";

export const generateMetadata = () => ({
  title: "Reset Password | SmartHR",
  description:
    "Reset your SmartHR account password. Enter your email address to receive password reset instructions.",
  keywords: [
    "forgot password",
    "password reset",
    "SmartHR login",
    "HR management",
    "account recovery",
  ],
});

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <ResetPassowrd />
    </AuthLayout>
  );
}
