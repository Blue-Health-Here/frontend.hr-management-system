// app/auth/signup/page.tsx
import AuthLayoutContent from "@/components/auth/AuthLayoutContent";
import SignUpForm from "@/components/auth/SignUpForm";
import AuthLayout from "@/components/layouts/AuthLayout";

export const generateMetadata = () => ({
  title: "Create Account | SmartHR",
  description: "Register for a new SmartHR account with secure authentication and terms agreement.",
  keywords: [
    "SmartHR sign up",
    "employee registration",
    "HR system account",
    "workplace onboarding",
    "secure HR portal"
  ]
});

export default function SignUpPage() {
  return (
    <AuthLayout leftContent={<AuthLayoutContent
      title="Igniting Employee Potential"
      description="Efficiently manage your workforce, streamline operations effectively." />}>
      <SignUpForm />
    </AuthLayout>
  );
}