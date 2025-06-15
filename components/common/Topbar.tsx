"use client";

import { setIsSidebarOpen } from "@/store/features/global/globalSlice";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface TopbarProps {
  isEmployee: boolean;
}

const Topbar = ({ isEmployee }: TopbarProps) => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSidebarItem } = useSelector((state: RootState) => state.global);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSidebarClick = () => {
    dispatch(setIsSidebarOpen(true));
  };

  const formatPathForDisplay = (path: string) => {
    return path
      .split('/')
      .filter(part => part.trim() !== '')
      .map(part =>
        part
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ')
      )
      .join(' / ');
  };

  return (
    <div className={`fixed top-0 bg-white right-0 z-50 w-full lg:w-[calc(100%-256px)] ${isScrolled ? 'theme-shadow' : ''}`}>
      <div className="flex justify-between items-center h-16 px-4 sm:pl-8 sm:px-3 pt-4">
        <div className="flex items-center gap-4">
          <div className="lg:hidden block cursor-pointer" onClick={handleSidebarClick}>
            <FaBars size={22} className="text-green-600" />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <Image 
                src="/SidebarSimple (1).svg" 
                alt="Sidebar icon" 
                width={24} 
                height={24} 
                className="w-6 h-6"
              />
            </div>
            <h1 className="text-md text-[#7782AE]">
              {activeSidebarItem?.parent || formatPathForDisplay(pathname) || 'Dashboard'}
              {activeSidebarItem?.child && (
                <span className="text-[#1C202F]">
                  <span className="px-4 text-[#7782AE]">/</span>
                  {activeSidebarItem.child}
                </span>
              )}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative w-[200px] sm:w-[250px]">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-sm pl-9 pr-8 p-2 placeholder:text-[#3C4566] rounded-lg focus:outline-none border border-[#597BE84D] focus:border-[#F2F7FA] focus:ring-0"
              style={{ boxShadow: 'none' }}
            />
            <span className="absolute left-3 top-2.5 cursor-pointer">
              <IoSearch className="w-4 h-4 md:w-4 md:h-4 text-[#3C4566]" />
            </span>
            <span className="absolute right-3 top-2.5 cursor-pointer">
              <Image 
                src="/Text.svg" 
                alt="Text icon" 
                width={16} 
                height={16} 
                className="w-4 h-4 md:w-5 md:h-5"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;