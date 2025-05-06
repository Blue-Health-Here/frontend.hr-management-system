"use client";
import { Download, Calendar, FileText, Sheet, Plus } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface DashboardHeaderProps {
  user: any;
}

interface ActionButtonProps {
  text: string;
  bgColor: string;
  hoverColor: string;
}

export function DashboardHeader({ user }: DashboardHeaderProps) {
  const ActionButton = ({ text, bgColor, hoverColor }: ActionButtonProps) => (
    <button
      className={`inline-flex items-center gap-2 rounded-md ${bgColor} ${hoverColor} px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none`}
    >
      <span className="inline-flex items-center justify-center w-3 h-3 border border-white rounded-sm">
        <Plus className="h-2 w-2 text-white" />
      </span>
      {text}
    </button>
  );

  const ExportDropdown = () => (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
          <Download className="h-4 w-4" />
          Export
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } flex items-center w-full px-3 py-2 text-sm`}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Export as PDF
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  } flex items-center w-full px-3 py-2 text-sm`}
                >
                  <Sheet className="mr-2 h-4 w-4" />
                  Export as Excel
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );

  const CalendarButton = () => (
    <button className="inline-flex items-center gap-0.5 rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
      <Calendar className="h-3.5 w-3.5" />
      2025
    </button>
  );

  const WelcomeSection = () => (
    <div className="flex justify-between items-center mb-8 bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-4">
        <img
          src={user.image}
          alt="User"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h2 className="text-lg font-bold text-[#212529]">
            Welcome Back, {user.name}
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            You have {user.pendingApprovals} Pending Approvals &{" "}
            {user.leaveRequests} Leave Requests
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <ActionButton
          text="Add Project"
          bgColor="bg-[#3b7080]"
          hoverColor="hover:bg-blue-700"
        />
        <ActionButton
          text="Add Requests"
          bgColor="bg-[#f26522]"
          hoverColor="hover:bg-green-700"
        />
      </div>
    </div>
  );

  // Main return of DashboardHeader
  return (
    <>
      <div className="flex justify-between items-center bg-gray-100 mb-4">
        <h1 className="text-2xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
        <div className="flex items-center gap-3">
          <ExportDropdown />
          <CalendarButton />
        </div>
      </div>
      <WelcomeSection />
    </>
  );
}
