"use client";

import { usePathname, useRouter } from "next/navigation";
import { sidebarNav } from "@/utils/constants";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;

  return (
    <div className="hidden w-64 text-white lg:flex flex-col p-6 bg-white z-10">
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
      {/* Dashboard Menu Item */}
      <ul className="list-style-none pt-6 flex flex-col gap-2 justify-center w-full">
        {sidebarNav.map((item: any, index: number) => {
          const Icon = item.icon;
          return (
            <li key={index}>
              <Link href={item.href} className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#28C76F] hover:text-white font-medium text-gray-600 transition-colors ${isActive(item.href) ? "bg-[#28C76F] text-white" : ""}`}>
                <Icon className="w-5 h-5" />
                <span className={``}>{item.label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

