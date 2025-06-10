import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { TbLogout2 } from "react-icons/tb";
import { adminProfileMenu, employeeProfileMenu } from "../../utils/constants";

interface NavbarProfileDropdownProps {
  onClose: () => void;
  isEmployee: boolean;
}

const NavbarProfileDropdown: React.FC<NavbarProfileDropdownProps> = ({
  onClose,
  isEmployee,
}) => {
  const router = useRouter();
  const pathname = usePathname();
 const profileMenu =  isEmployee ? employeeProfileMenu :  adminProfileMenu

  return (
    <div className="absolute right-4 top-full p-2 w-56 bg-white rounded-lg shadow-xl z-50 border border-gray-100 animate-in fade-in zoom-in-95">
      <div className="space-y-1">
        {profileMenu.map((item, index) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          return (
            <Link
              href={item.path}
              key={index}
              onClick={onClose}
              className={`group flex items-center gap-3 p-2 rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-primary-sky-blue/10 text-primary-sky-blue font-medium"
                  : "hover:bg-green-50 text-gray-700 hover:text-primary-sky-blue"
              }`}
            >
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? "text-primary-sky-blue" : "text-gray-500 group-hover:text-primary-sky-blue"
                }`}
              />
              <span className="text-sm">{item.name}</span>
              {isActive && (
                <span className="ml-auto w-2 h-2 rounded-full bg-primary-sky-blue" />
              )}
            </Link>
          );
        })}
      </div>

      <div className="px-2 py-1.5">
        <hr className="border-gray-200" />
      </div>

      <button
        onClick={onClose}
        type="button"
        className="group flex items-center cursor-pointer gap-3 w-full p-2 rounded-md text-sm text-gray-700 hover:bg-green-50"
      >
        <TbLogout2 className="w-5 h-5 text-gray-500 hover:bg-green-50" />
        <span className="text-sm">Logout</span>
      </button>
    </div>
  );
};

export default NavbarProfileDropdown;