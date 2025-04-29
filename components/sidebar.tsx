"use client";

import { useRouter } from "next/navigation";
import { Home, Users } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();
  const handleNavigation = (route: string) => {
    router.push(route);
  }
  return (
    <div className="hidden w-64 text-white lg:flex flex-col p-6">
      {/* Workflow Button */}
      <div className="space-y-4">
        <button
          className="flex items-center gap-3 px-4 py-3 rounded-lg"
          onClick={() => handleNavigation("/dashboard")}
        >
          <div className="bg-purple-600 p-2 rounded-md">
            <Users size={20} className="text-white" />
          </div>
          <span className="text-black font-bold">WorkFlow</span>
        </button>
      </div>

      {/* Main Menu */}
      <div className="flex flex-col space-y-1">
        <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2 px-2">
          Main Menu
        </h3>
        
        {/* Dashboard Menu Item */}
        <button
          onClick={() => router.push('/dashboard')}
          className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Home size={13} className="text-gray-600" />
          <span className="text-gray-700 font-medium">Dashboard</span>
        </button>
      </div>
    </div>
  );
}