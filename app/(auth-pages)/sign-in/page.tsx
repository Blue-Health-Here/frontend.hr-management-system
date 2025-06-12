// app/auth/signin/page.tsx
import AuthLayoutContent from "@/components/auth/AuthLayoutContent";
import SignInForm from "@/components/auth/SignInForm";
import AuthLayout from "@/components/layouts/AuthLayout";

export const generateMetadata = () => ({
  title: "Sign In | SmartHR",
  description: "Access your SmartHR account securely with email and password authentication.",
  keywords: [
    "SmartHR login",
    "employee portal",
    "HR system sign in",
    "workplace authentication",
    "secure HR access"
  ]
});

export default function SignInPage() {
  return (
    <AuthLayout leftContent={
      <AuthLayoutContent
        title="Igniting Employee Potential"
        description="Efficiently manage your workforce, streamline operations effectively." />}
    >
      <SignInForm />
    </AuthLayout>
  );
}