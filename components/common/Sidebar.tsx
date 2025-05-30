// 
"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { enhancedSidebarNav } from "@/utils/constants";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>({});

  // Auto-open dropdown for active paths on initial load
  useEffect(() => {
    const currentPath = pathname;
    
    // Find if current path is in any dropdown's subItems
    enhancedSidebarNav.forEach(item => {
      if (item.hasDropdown && Array.isArray(item.subItems)) {
        // Check if current path starts with parent path or matches exactly
        const isParentActive = currentPath === item.href;
        
        // Check if current path is among the subitems
        const isSubItemActive = item.subItems.some(subItem => 
          currentPath === subItem.href
        );
        
        // If either parent is active or a subitem is active, open the dropdown
        if (isParentActive || isSubItemActive) {
          setOpenDropdowns(prev => ({
            ...prev,
            [item.label]: true
          }));
        }
      }
    });
  }, [pathname]);

  const isActive = (path: string) => path === pathname;

  // Handle click on main menu item
  const handleMenuItemClick = (item: any) => {
    if (item.hasDropdown) {
      // Always navigate to the item's href if present
      if (item.href) {
        router.push(item.href);
      }
      
      // Also open the dropdown
      setOpenDropdowns(prev => ({
        ...prev,
        [item.label]: true
      }));
    } else if (item.href) {
      // If no dropdown, just navigate
      router.push(item.href);
    }
  };

  // Handle click specifically on the dropdown icon
  const handleDropdownToggle = (e: React.MouseEvent, label: string) => {
    e.stopPropagation(); // Prevent the parent onClick from firing
    setOpenDropdowns(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <div className="hidden w-64 lg:flex flex-col p-6 bg-white z-10 fixed left-0 top-0 bottom-0">
      {/* Logo at the top */}
      <div className="flex justify-center pb-5">
        <h1 className="text-green-600 text-2xl font-bold">SmartHR</h1>
      </div>

      {/* Sidebar navigation */}
      <nav className="flex flex-col gap-2 flex-1 py-8">
        {enhancedSidebarNav.map((item, index) => {
          // if (item.isHeader) {
          //   return (
          //     <div key={index} className="text-xs font-medium text-gray-500 uppercase tracking-wider my-8 px-3">
          //       {item.label}
          //     </div>
          //   );
          // }

          const isItemActive = item.href && isActive(item.href);
          const isAnySubItemActive = item.hasDropdown && item.subItems?.some(subItem => isActive(subItem.href));

          return (
            <div key={index}>
              <Link 
                href={item.href}
                className={`flex items-center justify-between px-3 py-2 cursor-pointer rounded-md ${
                  isItemActive || isAnySubItemActive ? "bg-green-600 text-white" : "hover:bg-green-50 text-gray-700"
                }`}
                // onClick={() => handleMenuItemClick(item)}
              >
                <div className="flex items-center gap-3">
                  <span className={isItemActive || isAnySubItemActive ? "text-white" : "text-gray-600"}>
                    {item.icon && <item.icon size={18} />}
                  </span>
                  <span className={`text-sm md:text-base font-medium ${isItemActive || isAnySubItemActive ? "text-white" : "text-gray-700"}`}>
                    {item.label}
                  </span>
                </div>
                {item.hasDropdown && (
                  <span 
                    className={isItemActive || isAnySubItemActive ? "text-white" : "text-gray-500"}
                    onClick={(e) => handleDropdownToggle(e, item.label)}
                  >
                    {openDropdowns[item.label] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                )}
              </Link>

              {/* Dropdown items */}
              {item.hasDropdown && openDropdowns[item.label] && (
                <div className="ml-8 pl-2 border-l border-gray-200">
                  {item.subItems?.map((subItem, subIndex) => (
                    <Link 
                      key={subIndex} 
                      href={item.href + subItem.href}
                      className={`flex items-center py-2 pl-2 text-sm rounded-md ${
                        isActive(subItem.href) 
                          ? "text-green-600 font-medium" 
                          : "text-gray-600 hover:text-green-600"
                      }`}
                    >
                      <span>{subItem.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}	