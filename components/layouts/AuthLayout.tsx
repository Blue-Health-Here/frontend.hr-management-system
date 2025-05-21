import React, { ReactNode } from "react";
import AuthLayoutContent from "../auth/AuthLayoutContent";

interface AuthLayoutProps {
  children: ReactNode; 
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <AuthLayoutContent />
      <div className="w-full md:w-3/5 flex items-center justify-center bg-[#f3ebe1]">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;