"use client";
import React from "react";
import { Plus } from "lucide-react";
import DataTableListing from "../leaves/DataTableListing";
import Link from "next/link";
import { holidaysData } from "@/utils/constants";

const Holidays = () => {
 
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Holidays</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full sm:w-auto">
          <Link href="/holidays/add" className="flex items-center justify-center text-nowrap xs:justify-start gap-1 px-4 py-2 bg-[#f26522] text-white rounded-md text-sm font-semibold hover:bg-[#e05b1a] transition-colors w-full xs:w-auto">
            <Plus className="h-3 w-3" />
            <span>Add Holiday</span>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="bg-white p-4 border border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <h2 className="text-lg font-semibold">Holidays List</h2>
          </div>
        </div>
        <DataTableListing holidays={holidaysData} />
      </div>
    </>
  );
};

export default Holidays;