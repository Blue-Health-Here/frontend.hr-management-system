"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, Users } from "lucide-react";
import { sidebarNav } from "@/utils/constants";
import Link from "next/link";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <div className="hidden w-64 text-white lg:flex flex-col p-6">
      {/* Workflow Button */}
      <button
        className="flex items-center gap-3 rounded-lg pb-4 border-b border-gray-100 cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        <div className="bg-purple-600 p-2 rounded-md">
          <Users size={20} className="text-white" />
        </div>
        <span className="text-black font-bold">WorkFlow</span>
      </button>

      {/* Dashboard Menu Item */}
      <ul className="list-style-none pt-6 flex flex-col gap-2 justify-center w-full">
        {sidebarNav.map((item: any, index: number) => (
          <li key={index}>
            <Link href={item.href} className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors ${isActive(item.href) ? "bg-gray-100" : ""}`}>
              {item.icon}
              <span className="text-gray-700 font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

