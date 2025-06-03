import { ChevronDown, Mail } from "lucide-react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";

const Topbar = () => {
    
    return (
        <div className="flex justify-between items-center p-4 sm:pl-8 sm:p-3 bg-white fixed top-0 sm:left-auto lg:left-64 right-0 z-10">
            <div className="relative w-[390px] sm:max-w-md hidden lg:block">
                <input type="text" placeholder="Search..." className="w-full md:w-80 bg-gray-50 pl-9 p-2 placeholder:text-gray-400 rounded-lg focus:outline-none neo-down border-none" />
                <span className="absolute left-3 top-2.5 text-gray-400 cursor-pointer">
                    <IoSearch className="w-4 h-4 md:w-5 md:h-5" />
                </span>
            </div>
            <div className="flex items-center justify-end gap-6">
                <div className="flex items-center gap-2">
                    <div className="relative p-2 rounded-lg neo-down border-none cursor-pointer">
                        <IoNotificationsOutline className='h-6 w-6 text-gray-400' />
                        <div className="w-4 h-4 rounded-full bg-red-500 text-white absolute text-center text-xs top-1.5 right-1"><p>2</p></div>
                    </div>
                    <div className="relative p-2 rounded-lg neo-down border-none cursor-pointer">
                        <Mail className="w-6 h-6 text-gray-400" />
                        <div className="w-4 h-4 rounded-full bg-red-500 text-white absolute text-center text-xs top-1.5 right-1"><p>8</p></div>                    </div>
                </div>
                <div className="flex items-center gap-2 pl-6 py-1 relative cursor-pointer">
                    <span className="absolute left-0 top-[50%] h-[26px] border-l-2 border-gray-200 translate-x-[-50%] translate-y-[-50%]"></span>
                    <Image src="/profile-image.jpg" alt="Menu" width={40} height={40} className="rounded-full" />
                    <div className="text-left">
                        <p className="text-sm md:text-base font-bold text-gray-800">John Doe</p>
                        <p className="text-xs md:text-sm text-gray-400">Admin</p>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
            </div>
        </div>

    );
};

export default Topbar;
