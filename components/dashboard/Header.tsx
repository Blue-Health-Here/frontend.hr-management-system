"use client";
import { Download, Calendar, FileText, Sheet, Plus } from "lucide-react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { DashboardHeaderProps } from "@/utils/types";
import ExportButton from "../common/ExportButton";

export function DashboardHeader({ user }: DashboardHeaderProps) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-0 bg-gray-100 mb-4 p-3 md:p-0 md:bg-transparent">
        <h1 className="text-lg md:text-2xl font-semibold text-gray-800">
          Admin Dashboard
        </h1>
        <div className="flex items-center gap-2 md:gap-3">
          <ExportButton />
          <button className="inline-flex items-center gap-0.5 rounded-md border border-gray-300 bg-white px-6 md:px-8 py-1.5 md:py-2 text-xs md:text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none">
            <Calendar className="h-3.5 w-3.5" />
            <span>2025</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0 mb-8 bg-white rounded-lg shadow-sm p-4 md:p-6 w-full">
        <div className="flex items-center gap-3 md:gap-4 w-full">
          <img
            src={user.image}
            alt="User"
            className="w-12 md:w-16 h-12 md:h-16 rounded-full object-cover"
          />
          <div className="w-full">
            <h2 className="text-base md:text-lg font-bold text-[#212529]">
              Welcome Back,{" "}
              <span className="hidden sm:inline">{user.name}</span>
              <span className="sm:hidden">{user.name.split(" ")[0]}</span>
            </h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">
              You have {user.pendingApprovals} Pending Approvals &{" "}
              {user.leaveRequests} Leave Requests
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-2 md:gap-3 w-full md:w-auto mt-3 md:mt-0">
          <button
            className={`inline-flex items-center gap-2 rounded-md bg-[#3b7080] hover:bg-blue-700 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white shadow-sm focus:outline-none whitespace-nowrap`}
          >
            <span className="inline-flex items-center justify-center w-3 h-3 border border-white rounded-sm">
              <Plus className="h-2 w-2 text-white" />
            </span>
            Add Project
          </button>

          <button
            className={`inline-flex items-center gap-2 rounded-md bg-[#f26522] hover:bg-green-700 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-white shadow-sm focus:outline-none whitespace-nowrap`}
          >
            <span className="inline-flex items-center justify-center w-3 h-3 border border-white rounded-sm">
              <Plus className="h-2 w-2 text-white" />
            </span>
            Add Requests
          </button>
        </div>
      </div>
    </>
  );
}