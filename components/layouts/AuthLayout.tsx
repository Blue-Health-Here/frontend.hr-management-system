import React, { ReactNode } from "react";
import AuthLayoutContent from "../auth/AuthLayoutContent";

interface AuthLayoutProps {
  children: ReactNode; 
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <AuthLayoutContent />
      <div className="w-full md:w-1/2 flex flex-col justify-between gap-6 py-10 px-6 md:px-8 bg-primary-white">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;