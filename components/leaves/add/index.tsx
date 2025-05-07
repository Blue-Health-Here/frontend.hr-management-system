"use client";
import React from "react";
import { Formik, Form } from "formik";
import Dropdown from "../../common/DropDown";
import InputField from "@/components/common/form/InputField";
import { employeeData, leaveTypes, leaveDurationOptions } from "@/utils/constants";

const AddLeave: React.FC = () => {
 
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Leave</h1>

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
          <Form>
            <Dropdown
              id="employee-name"
              label="Employee Name"
              options={employeeData.map((d) => ({
                value: d.id,
                label: d.name,
              }))}
              className="mb-6 w-full md:w-1/2 lg:w-2/3"
            />

            <Dropdown
              id="leave-type"
              label="Leave Type"
              options={leaveTypes}
              className="mb-2 w-full md:w-1/2 lg:w-2/3"
            />

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2 lg:w-2/3">
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
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2 lg:w-2/3 mt-6">
              <div className="flex-1">
                <input
                  name="leaveDate"
                  type="date"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring focus:ring-blue-200 focus:outline-none"
                />
              </div>
              <div className="flex-1">
                <select
                  name="leaveDuration"
                  className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring focus:ring-blue-200 focus:outline-none "
                >
                  {leaveDurationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-1/2 lg:w-2/3 mt-2">
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

            <div className="w-full md:w-1/2 lg:w-2/3 mt-4">
              <label
                htmlFor="reason"
                className="block text-sm font-medium text-gray-700 mb-1 "
              >
                Reason
              </label>
              <textarea
                id="reason"
                name="reason"
                rows={3}
                className="block w-full px-4 py-2 border border-gray-300 rounded-sm focus:ring focus:ring-blue-200 focus:outline-none"
              />
            </div>

            <div className="flex gap-4 items-center justify-end w-full md:w-1/2 lg:w-2/3 mt-6">
              <button
                type="button"
                className="px-6 py-2  rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f26522] transition-colors"
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
