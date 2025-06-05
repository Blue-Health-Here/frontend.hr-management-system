"use client";
import React from "react";
import { Plus } from "lucide-react";
import DataTableListing from "../leaves/DataTableListing";
import Link from "next/link";
import { holidaysData } from "@/utils/constants";
import Button from "../../common/Button";

const Holidays = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Holidays</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-auto">
          <Link 
            href="/admin/holidays/add"
            className="cursor-pointer" 
          >
            <Button label="Add Holiday" icon={Plus}></Button>
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto bg-white rounded-2xl p-4 flex flex-col gap-4 theme-shadow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-lg font-semibold">Holidays List</h2>
        </div>
        <DataTableListing holidays={holidaysData} />
      </div>
    </>
  );
};

export default Holidays;