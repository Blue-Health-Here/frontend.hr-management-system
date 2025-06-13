import AuthLayout from "@/components/layouts/AuthLayout";
import VerificationCode from "@/components/auth/VerificationCode";

export const generateMetadata = () => ({
  title: "Verify Code | SmartHR",
  description:
    "Verfiy your SmartHR account code. Enter the 6-digit code sent to your email to reset your password.",
  keywords: [
    "verfication code",
    "SmartHR login",
    "HR management",
    "account recovery",
  ],
});

export default function VerifyCodePage() {
  return (
    <AuthLayout>
      <VerificationCode />
    </AuthLayout>
  );
}
