import React, { ReactNode } from "react";
import AuthLayoutContent from "../auth/AuthLayoutContent";

interface AuthLayoutProps {
  children: ReactNode; 
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <AuthLayoutContent />
      <div className="w-full md:w-1/3 flex items-center justify-center ">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;