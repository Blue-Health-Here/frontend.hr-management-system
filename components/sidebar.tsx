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
    <div className="hidden w-64 text-white lg:flex flex-col p-3 bg-white">
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

