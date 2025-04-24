"use client";

import { useRouter } from "next/navigation";
import { Home } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-64 text-white flex flex-col p-3 bg-white">
      {/* SmartHR Logo at the top */}
      <div className="flex justify-start mb-8 pl-3">
        <Image
          src="https://smarthr.dreamstechnologies.com/react/template/assets/img/logo.svg"
          alt="SmartHR Logo"
          width={120}
          height={32}
          className="h-10"
        />
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