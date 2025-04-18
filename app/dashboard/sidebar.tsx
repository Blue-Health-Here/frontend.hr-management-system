"use client";

import { useRouter } from "next/navigation";
import { Users } from "lucide-react";
import { User } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-64 text-white flex flex-col p-6">
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

      {/* Separator line */}
      <hr className="border-t border-gray-300 mt-[12px] mb-6" />

      {/* Staff Portal Button */}
      <div className="space-y-4">
        <button
          className="flex items-center gap-3 px-4 py-3 rounded-lg"
          onClick={() => handleNavigation("/staff-portal")}
        >
          <User size={20} className="text-gray-500" />
          <span className="text-gray-500 font-medium">Staff Portal</span>
        </button>
      </div>
    </div>
  );
}