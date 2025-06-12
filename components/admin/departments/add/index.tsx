"use client";
import React from "react";
import { Formik, Form } from "formik";
import InputField from "@/components/common/form/InputField";
import Dropdown from "@/components/common/form/DropDown";
import Button from "@/components/common/Button";
import { useRouter } from "next/navigation";

const AddDepartment: React.FC = () => {
  const router = useRouter();
  return (
    <div className="rounded-2xl p-6 bg-white space-y-6 theme-shadow">
      <div>
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">Add Department</h1>
        <div className="border-b border-gray-200 w-full my-3"></div>
      </div>
      <Formik
        initialValues={{
          title: "",
          status: "active",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <InputField
                name="title"
                label="Title"
                type="text"
                placeholder="Enter Title"
                className="flex-1"
              />

              <Dropdown
                name="status"
                id="status"
                label="Status"
                className="flex-1 flex gap-1 flex-col"
                options={[
                  { value: 'active', label: 'Active' },
                  { value: 'inactive', label: 'In-Active' },
                ]}
              />
            </div>
            <div className="flex flex-col gap-4 justify-center md:flex-row md:justify-end">
              <button
                type="button" onClick={() => router.push("/admin/departments")}
                className="text-xs md:text-sm cursor-pointer px-6 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#f26522] transition-colors"
              >
                Cancel
              </button>
              <Button label="Add Department" type="submit" className="md:max-w-36"></Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddDepartment;