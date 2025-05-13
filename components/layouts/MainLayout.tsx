import React, { ReactNode } from "react";
import Sidebar from "../common/Sidebar";

interface MainLayoutProps {
  children: ReactNode; // Explicitly type the children prop
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto sm:p-8 p-4 bg-gray-100">{children}</div>
    </div>
  );
}

export default MainLayout;
