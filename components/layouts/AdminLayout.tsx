import React, { ReactNode } from "react";
import Sidebar from "../common/Sidebar";
import Topbar from "../common/Topbar";

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen overflow-x-hidden">
      <Sidebar isEmployee={false} />
      <div className="w-full">
        <Topbar />
        <div className="min-h-screen p-4 md:p-6 lg:p-8 mt-20 bg-gray-100 rounded-0 lg:rounded-tl-4xl neo-down ml-0 lg:ml-64">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
