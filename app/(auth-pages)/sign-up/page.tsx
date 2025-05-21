import AuthLayout from "@/components/layouts/AuthLayout";
import SignUpForm from "@/components/auth/SignUpForm";

export default function SignupPage() {
  return (
    <AuthLayout>
      <SignUpForm />
    </AuthLayout>
  );
}