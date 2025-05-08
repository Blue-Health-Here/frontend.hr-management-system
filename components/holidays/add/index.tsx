"use client";
import React from "react";
import { Formik, Form } from "formik";
import Dropdown from "../../common/DropDown";
import InputField from "@/components/common/form/InputField";
import TextAreaField from "@/components/common/form/TextArea";
import { holidayStatusOptions } from "@/utils/constants";

const AddHoliday: React.FC = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Add Holiday</h1>

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
          <Form>
            <InputField
              name="title"
              label="Title"
              type="text"
              className="mb-6 w-full md:w-1/2 lg:w-2/3"
            />

            <InputField
              name="date"
              label="Date"
              type="date"
              className="mb-6 w-full md:w-1/2 lg:w-2/3"
            />

            <TextAreaField
              name="description"
              label="Description"
              rows={3}
              className="mb-6 w-full md:w-1/2 lg:w-2/3"
            />

            <Dropdown
              id="status"
              label="Status"
              options={holidayStatusOptions}
              className="mb-6 w-full md:w-1/2 lg:w-2/3"
            />

            <div className="flex gap-4 items-center justify-end w-full md:w-1/2 lg:w-2/3 mt-6">
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