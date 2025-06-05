// app/auth/signin/page.tsx
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
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}