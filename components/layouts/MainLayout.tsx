import React, { ReactNode } from "react";
import Sidebar from "../sidebar";

interface MainLayoutProps {
  children: ReactNode; // Explicitly type the children prop
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto bg-gray-50">{children}</div>
    </div>
  );
}

export default MainLayout;
