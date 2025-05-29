"use client";

import AuthLayout from "@/components/layouts/AuthLayout";
import SignInForm from "@/components/auth/SignInForm";

export default function SigninPage() {
  return (
    <AuthLayout>
      <SignInForm />
    </AuthLayout>
  );
}

