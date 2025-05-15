"use client";
import React from "react";
import { Formik, Form } from "formik";
import InputField from "@/components/common/form/InputField";
import TextAreaField from "@/components/common/form/TextArea";
import { holidayStatusOptions } from "@/utils/constants";
import Dropdown from "@/components/common/form/DropDown";

const AddHoliday: React.FC = () => {
  return (
    <div className="rounded-lg p-6 bg-white shadow-md space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Add Holiday</h1>

      <Formik
        initialValues={{
          title: "",
          date: "",
          description: "",
          status: "active",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="space-y-4">
            <InputField
              name="title"
              label="Title"
              type="text"
            />

            <InputField
              name="date"
              label="Date"
              type="date"
            />

            <TextAreaField
              name="description"
              label="Description"
              rows={3}
            />

            <Dropdown
              name="status"
              id="status"
              label="Status"
              options={holidayStatusOptions}
            />

            <div className="flex flex-col gap-4 justify-center md:flex-row md:justify-end">
              <button
                type="button"
                className="cursor-pointer px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f26522] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-[#f26522] hover:bg-[#e05b1e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f26522] transition-colors"
              >
                Add Holiday
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddHoliday;