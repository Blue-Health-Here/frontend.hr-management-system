"use client"

import { setIsSidebarOpen } from "@/store/features/global/globalSlice";
import { ChevronDown, Mail } from "lucide-react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import NavbarProfileDropdown from "./NavbarProfileDropdown";
import { useDispatch } from "react-redux";

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarClick = () => {
    dispatch(setIsSidebarOpen(true))
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      // Example logout implementation - replace with your actual logic
      // await logoutAPI();
      router.push("/sign-in");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className={`p-4 sm:pl-8 sm:p-3 fixed top-0 bg-white right-0 z-50 w-full lg:w-[calc(100%-256px)] ${isScrolled ? 'shadow-xl' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="lg:hidden block cursor-pointer" onClick={handleSidebarClick}>
          <FaBars size={22} className="text-green-600" />
        </div>
        <div className="relative w-[390px] sm:max-w-md hidden lg:block">
          <input type="text" placeholder="Search..." className="w-full md:w-80 bg-gray-50 pl-9 p-2 placeholder:text-gray-400 rounded-lg focus:outline-none neo-down border-none" />
          <span className="absolute left-3 top-2.5 cursor-pointer">
            <IoSearch className="w-4 h-4 md:w-5 md:h-5 text-gray-400 " />
          </span>
        </div>
        <div className="flex items-center justify-end gap-6">
          <div className="items-center gap-2 hidden lg:flex">
            <div className="relative p-2 rounded-lg neo-down border-none cursor-pointer">
              <IoNotificationsOutline className='h-6 w-6 text-gray-400' />
              <div className="w-4 h-4 rounded-full bg-red-500 text-white absolute text-center text-xs top-1.5 right-1"><p>2</p></div>
            </div>
            <div className="relative p-2 rounded-lg neo-down border-none cursor-pointer">
              <Mail className="w-6 h-6 text-gray-400" />
              <div className="w-4 h-4 rounded-full bg-red-500 text-white absolute text-center text-xs top-1.5 right-1"><p>8</p></div>
            </div>
          </div>
          <div className="flex items-center gap-2 pl-6 relative cursor-pointer" ref={dropdownRef} onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            <span className="absolute left-0 top-[50%] w-1 h-6 border-l-2 hidden lg:inline border-gray-200 translate-x-[-50%] translate-y-[-50%]"></span>
            <Image src="/profile-image.jpg" alt="Menu" width={40} height={40} className="rounded-full" />
            <div className="text-left">
              <p className="text-sm md:text-base font-bold text-gray-800">John Doe</p>
              <p className="text-xs md:text-sm text-gray-400">Admin</p>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400" />
            {isDropdownOpen && (
              <NavbarProfileDropdown
                onClose={() => {
                  handleLogout();
                  setIsDropdownOpen(false);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Topbar;