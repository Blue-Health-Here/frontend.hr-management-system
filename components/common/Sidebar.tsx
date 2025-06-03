"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { adminSidebarItems, employeeSidebarItems } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { setIsSidebarOpen } from "@/store/features/global/globalSlice";
import { RxCross2 } from "react-icons/rx";

interface SidebarProps {
  isEmployee: boolean;
}

type SidebarItem = {
  icon: React.ElementType;
  label: string;
  href?: string;
  hasDropdown: boolean;
  subItems?: { label: string; href: string }[];
};

export default function Sidebar({ isEmployee }: SidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});
  const sidebarItems: SidebarItem[] = isEmployee ? employeeSidebarItems : adminSidebarItems;
  const { isSidebarOpen } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch()

  // Auto-open dropdown for active paths on initial load
  useEffect(() => {
    const currentPath = pathname;
    // Find if current path is in any dropdown's subItems
    sidebarItems.forEach(item => {
      if (item.hasDropdown && Array.isArray(item.subItems) && item.href) {
        // Check if current path is among the subitems
        const isSubItemActive = item.subItems.some(subItem => {
          const fullSubItemHref = subItem.href === "" ? item.href : item.href + subItem.href;
          return currentPath === fullSubItemHref;
        });

        if (isSubItemActive) {
          setOpenDropdowns(prev => ({
            ...prev,
            [item.label]: true
          }));
        }
      }
    });
  }, [pathname, sidebarItems]);


  const isActive = (path: string) => path === pathname;
  // check is subItem is active
  const isAnySubItemActive = (item: SidebarItem) => {
    if (!item.hasDropdown || !item.subItems || !item.href) return false;
    return item.subItems.some(subItem => {
      const fullSubItemHref = subItem.href === "" ? item.href : item.href + subItem.href;
      return isActive(fullSubItemHref || "");
    });
  };


  // Handle click on main menu item
  const handleMenuItemClick = (item: SidebarItem) => {
    if (item.hasDropdown) {
      setOpenDropdowns(prev => ({
        ...prev,
        [item.label]: !prev[item.label]
      }));
    } else if (item.href) {
      // If no dropdown, just navigate
      router.push(item.href);
    }
  };


  return (
    <div className={`w-64 flex-col z-[99] fixed left-0 top-0 bg-white bottom-0 transition-transform duration-300 lg:translate-x-0 lg:flex ${isSidebarOpen ? 'flex shadow-2xl' : 'hidden lg:flex'}`}>
      {isSidebarOpen && <span onClick={() => dispatch(setIsSidebarOpen(false))} className='absolute top-4 right-4 cursor-pointer'><RxCross2 size={20} /></span>}
      <div className="flex justify-center pb-5 p-6">
        <h1 className="text-green-600 text-2xl font-bold">
          SmartHR
        </h1>
      </div>
      <nav className="flex flex-col gap-2 flex-1 py-8 px-6">
        {sidebarItems.map((item, index) => {
          const isItemActive = item.href && !item.hasDropdown && isActive(item.href);
          const isSubItemActive = isAnySubItemActive(item);
          const isDropdownOpen = openDropdowns[item.label];
          const shouldHighlight = isItemActive || isSubItemActive || (item.hasDropdown && isDropdownOpen);

          return (
            <div key={index}>
              <div
                className={`flex items-center justify-between px-3 py-2 cursor-pointer rounded-md transition-all duration-200 ${shouldHighlight
                    ? "bg-green-600 text-white"
                    : "hover:bg-green-50 text-gray-700"
                  }`}
                onClick={() => handleMenuItemClick(item)}
              >
                <div className="flex items-center gap-3">
                  <span className={shouldHighlight ? "text-white" : "text-gray-600"}>
                    {item.icon && <item.icon size={18} />}
                  </span>
                  <span className={`text-sm md:text-base font-medium ${shouldHighlight ? "text-white" : "text-gray-700"
                    }`}>
                    {item.label}
                  </span>
                </div>
                {item.hasDropdown && (
                  <span className={`transition-transform duration-300 ease-in-out ${shouldHighlight ? "text-white" : "text-gray-500"
                    } ${openDropdowns[item.label] ? "rotate-180" : "rotate-0"}`}>
                    <ChevronDown size={16} />
                  </span>
                )}
              </div>

              {/* Dropdown items */}
              {item.hasDropdown && openDropdowns[item.label] && (
                <div className="ml-4 pl-2 border-l border-gray-200 animate-in slide-in-from-top-2 duration-200">
                  {item.subItems?.map((subItem, subIndex) => {
                    const fullSubItemHref = subItem.href === "" ? item.href : item.href + subItem.href;
                    const isSubItemCurrentlyActive = isActive(fullSubItemHref || "");

                    return (
                      <Link
                        key={subIndex}
                        href={fullSubItemHref || "#"}
                        className={`flex items-center py-2 pl-2 text-sm rounded-md relative transition-colors duration-150 ${isSubItemCurrentlyActive
                            ? "text-green-600 font-medium"
                            : "text-gray-600 hover:text-green-600"
                          }`}
                      >
                        <span>{subItem.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}