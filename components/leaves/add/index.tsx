"use client";
import React from "react";
import { Formik, Form } from "formik";
import InputField from "@/components/common/form/InputField";
import {
  employeeData,
  leaveTypes,
  leaveDurationOptions,
} from "@/utils/constants";
import Dropdown from "@/components/common/form/DropDown";
import TextAreaField from "@/components/common/form/TextArea";

const AddLeave: React.FC = () => {
  return (
    <div className="rounded-lg p-6 bg-white shadow-md space-y-6">
      <div>
        <h1 className="text-2xl  font-semibold text-gray-800">Add Leave</h1>
        <div className="border-b border-gray-200 w-full my-3"></div>
      </div>

      <Formik
        initialValues={{
          employeeName: "",
          leaveType: "",
          fromDate: "",
          toDate: "",
          leaveDate: "",
          leaveDuration: "",
          noOfDays: "",
          remainingDays: "",
          reason: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="space-y-4">
            <Dropdown
              name="employeeName"
              id="employee-name"
              label="Employee Name"
              options={employeeData.map((d) => ({
                value: d.id,
                label: d.name,
              }))}
            />
            <Dropdown
              name="leaveType"
              id="leave-type"
              label="Leave Type"
              options={leaveTypes}
            />
            <div className="grid grid-cols-2 gap-4 w-full">
              <InputField
                name="fromDate"
                label="From"
                type="date"
                className="flex-1"
              />
              <InputField
                name="toDate"
                label="To"
                type="date"
                className="flex-1"
              />
              <input
                name="leaveDate"
                type="date"
                className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
              <select
                name="leaveDuration"
                className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring focus:ring-blue-200 focus:outline-none"
              >
                {leaveDurationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <InputField
                name="noOfDays"
                label="No of Days"
                type="number"
                className="flex-1"
              />
              <InputField
                name="remainingDays"
                label="Remaining Days"
                type="number"
                className="flex-1"
              />
            </div>
            <TextAreaField
              name="reason"
              label="Reason"
              rows={3}
            />
            <div className="flex flex-col gap-4 justify-center md:flex-row md:justify-end">
              <button
                type="button"
                className="px-6 py-2 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f26522] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#f26522] hover:bg-[#e05b1e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f26522] transition-colors"
              >
                Add Leave
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddLeave;