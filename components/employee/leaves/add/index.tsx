"use client";
import React from "react";
import { Formik, Form } from "formik";
import InputField from "@/components/common/form/InputField";
import {
  leaveTypes,
} from "@/utils/constants";
import TextAreaField from "@/components/common/form/TextArea";
import Button from "@/components/common/Button";
import SelectField from "@/components/common/form/SelectField";

const AddLeave: React.FC = () => {
  return (
    <div className="rounded-2xl p-6 bg-white theme-shadow space-y-6">
      <div>
        <h1 className="text-2xl  font-semibold text-gray-800">Add Leave</h1>
        <div className="border-b border-gray-200 w-full my-3"></div>
      </div>

      <Formik
        initialValues={{
          leaveType: "",
          fromDate: "",
          toDate: "",
          reason: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
              <SelectField
                label="Leave Type"
                parentClassName="flex justify-between flex-col gap-1"
                name="leaveType"
                options={leaveTypes}
              />
              <InputField
                name="fromDate"
                label="From"
                type="date"
                className="flex-1 flex justify-between flex-col gap-1"
              />
              <InputField
                name="toDate"
                label="To"
                type="date"
                className="flex-1 flex justify-between flex-col gap-1"
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
                className="px-6 py-2 cursor-pointer border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <Button
                className="md:max-w-36"
                label="Add Leave"
              >
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddLeave;