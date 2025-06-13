"use client"

import { setIsSidebarOpen } from "@/store/features/global/globalSlice";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { usePathname } from 'next/navigation';


interface TopbarProps {
  isEmployee: boolean;
  currentPath?: string;
}

const Topbar = ({ isEmployee }: TopbarProps) => {
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const { activeSidebarItem } = useSelector((state: RootState) => state.global);
  const pathname = usePathname(); // e.g. "/dashboard/settings/profile"
  const segments = pathname?.split('/').filter(Boolean) || [];
  const currentPath = segments.pop() || '';
  
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

  // Fixed the formatPathForDisplay function
  const formatPathForDisplay = (path: string) => {
    return path.split('/')
      .filter(part => part.trim() !== '')
      .map(part => part.split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' / '));
  };

  return (
    <div className={`p-4 sm:pl-8 sm:p-3 fixed top-0 bg-white right-0 z-50 w-full lg:w-[calc(100%-256px)] ${isScrolled ? 'theme-shadow' : ''}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="lg:hidden block cursor-pointer" onClick={handleSidebarClick}>
            <FaBars size={22} className="text-green-600" />
          </div>
          
          <div className="hidden lg:block">
            <h1 className="text-lg font-semibold text-gray-800">
              {activeSidebarItem?.parent || (currentPath ? formatPathForDisplay(currentPath) : 'Dashboard')}
              {activeSidebarItem?.child && (
                <span className="text-gray-500">
                  {" / "}
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
              placeholder="Search..." 
              className="w-full bg-gray-50 pl-9 p-2 placeholder:text-gray-400 rounded-lg focus:outline-none neo-down border-none" 
            />
            <span className="absolute left-3 top-2.5 cursor-pointer">
              <IoSearch className="w-4 h-4 md:w-5 md:h-5 text-gray-400 bg-white" />
            </span>
          </div>

          
        </div>
      </div>
    </div>
  )
};

export default Topbar;