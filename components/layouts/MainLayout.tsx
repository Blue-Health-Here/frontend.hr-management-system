import React, { ReactNode } from "react";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <div className="flex-1 overflow-y-auto p-6 md:p-8 mt-20 bg-gray-100 rounded-tl-4xl neo-down ml-64">{children}</div>
      </div>
    </div>
  );
}

export default MainLayout;
