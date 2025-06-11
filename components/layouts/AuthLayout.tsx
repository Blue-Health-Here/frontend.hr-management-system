import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  leftContent: React.ReactNode;
}

function AuthLayout({ leftContent, children }: AuthLayoutProps) {
  return (
      <div className="min-h-screen flex justify-center items-center px-18">
        <div className="flex flex-col md:flex-row p-10 w-full bg-secondary-bg-theme rounded-4xl">
        {leftContent}
      <div className="w-full h-full md:w-1/2 flex flex-col justify-between gap-6 py-10 px-6 md:px-8">
        {children}
      </div>
      </div>
    </div>
  );
}

export default AuthLayout;