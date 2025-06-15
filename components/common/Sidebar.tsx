"use client";

import { useEffect, useState, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { adminSidebarItems, employeeSidebarItems } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  setIsSidebarOpen,
  setActiveSidebarItem,
} from "@/store/features/global/globalSlice";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import NavbarProfileDropdown from "./NavbarProfileDropdown";

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
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sidebarItems: SidebarItem[] = isEmployee
    ? employeeSidebarItems
    : adminSidebarItems;
  const { isSidebarOpen } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentPath = pathname;
    sidebarItems.forEach((item) => {
      if (item.hasDropdown && Array.isArray(item.subItems) && item.href) {
        const match = item.subItems.find((subItem) => {
          const fullSubItemHref =
            subItem.href === "" ? item.href : item.href + subItem.href;
          return currentPath === fullSubItemHref;
        });

        if (match) {
          setOpenDropdowns((prev) => ({
            ...prev,
            [item.label]: true,
          }));

          dispatch(
            setActiveSidebarItem({
              parent: item.label,
              child: match.label,
            })
          );
        }
      } else if (item.href && currentPath === item.href) {
        dispatch(
          setActiveSidebarItem({
            parent: item.label,
            child: null,
          })
        );
      }
    });
  }, [pathname, sidebarItems, dispatch]);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsProfileDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path: string) => path === pathname;
  const isAnySubItemActive = (item: SidebarItem) => {
    if (!item.hasDropdown || !item.subItems || !item.href) return false;
    return item.subItems.some((subItem) => {
      const fullSubItemHref =
        subItem.href === "" ? item.href : item.href + subItem.href;
      return isActive(fullSubItemHref || "");
    });
  };

  const handleMenuItemClick = (item: SidebarItem) => {
    if (item.hasDropdown) {
      setOpenDropdowns((prev) => ({
        ...prev,
        [item.label]: !prev[item.label],
      }));
    } else if (item.href) {
      dispatch(
        setActiveSidebarItem({
          parent: item.label,
          child: null,
        })
      );
      router.push(item.href);
    }
  };

  const handleLogout = async () => {
    try {
      router.push("/sign-in");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div
      className={`w-64 flex-col z-[99] fixed left-0 top-0 bg-[#1C202F] bottom-0 transition-transform duration-300 lg:translate-x-0 lg:flex ${
        isSidebarOpen ? "flex shadow-2xl" : "hidden lg:flex"
      }`}
    >
      {isSidebarOpen && (
        <span
          onClick={() => dispatch(setIsSidebarOpen(false))}
          className="absolute top-4 right-4 text-[#F2F7FA] cursor-pointer"
        >
          <RxCross2 size={20} />
        </span>
      )}

      {/* Profile Section */}
      <div className="flex flex-col gap-4 p-6 pb-4">
        <div
          className="flex items-center gap-3 cursor-pointer relative"
          ref={dropdownRef}
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
        >
          <Image
            src="/profile-image.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full border-2 border-[#F2F7FA]"
          />
          <div className="flex-1">
            <p className="text-[#F2F7FA] font-normal">John Doe</p>
            <p className="text-[#F2F7FA]/80 text-xs font-normal">Admin</p>
          </div>
        </div>
        {isProfileDropdownOpen && (
          <div className="absolute left-6 top-24 z-50">
            <NavbarProfileDropdown
              isEmployee={isEmployee}
              onClose={() => {
                handleLogout();
                setIsProfileDropdownOpen(false);
              }}
            />
          </div>
        )}
      </div>

      {/* Sidebar Items */}
      <nav className="flex flex-col gap-2 flex-1 py-4 px-6 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {sidebarItems.map((item, index) => {
          const isItemActive = item.href && !item.hasDropdown && isActive(item.href);
          const isSubItemActive = isAnySubItemActive(item);
          const isDropdownOpen = openDropdowns[item.label];
          const shouldHighlight =
            isItemActive || isSubItemActive || (item.hasDropdown && isDropdownOpen);

          return (
            <div key={index}>
              {/* Headings */}
              {index === 0 && (
                <p className="text-xs font-semibold text-[#FFFFFF66] mb-1 pl-3">
                  Dashboard
                </p>
              )}
              {index === 1 && (
                <p className="text-xs font-semibold text-[#FFFFFF66] mb-1 pl-3 mt-3">
                  Pages
                </p>
              )}

              <div
                className={`flex items-center gap-2 px-3 py-2 cursor-pointer rounded-md transition-all duration-200 ${
                  shouldHighlight ? "bg-[#597BE826]" : "hover:bg-[#597BE826]/30"
                } ${!item.hasDropdown ? "pl-[34px]" : ""}`}
                onClick={() => handleMenuItemClick(item)}
              >
                {item.hasDropdown && (
                  <span className={`transition-transform duration-300 ease-in-out text-[#7782AE]`}>
                    {isDropdownOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                  </span>
                )}
                <span className="text-[#F2F7FA]">
                  {item.icon && <item.icon size={18} />}
                </span>
                <span
                  className="text-[#F2F7FA] text-xs sm:text-sm xl:text-base"
                  style={{ fontWeight: 200 }}
                >
                  {item.label}
                </span>
              </div>

              {item.hasDropdown && isDropdownOpen && (
                <div className="ml-4 pl-2 border-l border-[#F2F7FA]/20 animate-in slide-in-from-top-2 duration-200">
                  {item.subItems?.map((subItem, subIndex) => {
                    const fullSubItemHref =
                      subItem.href === "" ? item.href : item.href + subItem.href;
                    const isSubItemCurrentlyActive = isActive(fullSubItemHref || "");

                    return (
                      <Link
                        key={subIndex}
                        href={fullSubItemHref || "#"}
                        onClick={() =>
                          dispatch(
                            setActiveSidebarItem({
                              parent: item.label,
                              child: subItem.label,
                            })
                          )
                        }
                        className={`flex items-center py-2 pl-2 text-xs md:text-sm rounded-md relative transition-colors duration-150 ${
                          isSubItemCurrentlyActive
                            ? "text-[#F2F7FA] font-normal"
                            : "text-[#F2F7FA]/80 hover:text-[#F2F7FA] font-normal"
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
