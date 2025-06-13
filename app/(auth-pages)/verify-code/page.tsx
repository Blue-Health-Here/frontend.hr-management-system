import AuthLayout from "@/components/layouts/AuthLayout";
import VerificationCode from "@/components/auth/VerificationCode";

export const generateMetadata = () => ({
  title: "Forgot Password | SmartHR",
  description:
    "Verfiy your SmartHR account code. Enter the 6-digit code sent to your email to reset your password.",
  keywords: [
    "verfication code",
    "SmartHR login",
    "HR management",
    "account recovery",
  ],
});

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <VerificationCode />
    </AuthLayout>
  );
}
