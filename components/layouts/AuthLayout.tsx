import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  leftContent: React.ReactNode;
}

function AuthLayout({ leftContent, children }: AuthLayoutProps) {
  return (
    <div className="p-4 md:p-6 lg:p-8 xl:p-10 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full p-4 md:p-6 lg:p-8 xl:p-10  bg-secondary-bg-theme rounded-4xl" style={{ minHeight: 'calc(100vh - 5rem)' }}>
        {leftContent}
        <div className="w-full h-full flex flex-col justify-between gap-6 py-4 lg:py-10 md:px-4 lg:px-6 md:px-8">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;