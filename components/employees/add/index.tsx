"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import InputField from "../../common/form/InputField";
import { Formik, Form } from "formik";
import { departmentOptions, designationOptions } from "@/utils/constants";
import ImageUpload from "@/components/common/form/ImageUpload";
import { employeeValidationSchema } from "@/utils/validationSchema";
import Dropdown from "@/components/common/form/DropDown";
import { MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const AddEmployee = () => {
  const [activeTab, setActiveTab] = useState<"basic" | "permissions">("basic");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [addDepartment, setAddDepartment] = useState(false);
  const [addDesignation, setAddDesignation] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    employeeId: "",
    joiningDate: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    company: "",
    department: "",
    designation: "",
    about: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log({
      ...values,
      profileImage: selectedFile,
    });
  };
  const resetDepartmentField = () => {
    setAddDepartment(false);
  };

  const resetdesignationField = () => {
    setAddDesignation(false);
  };

  return (
    <div className="rounded-lg p-6 bg-white shadow-md space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">
          Add New Employee
        </h1>
        <div className="border-b border-gray-200 w-full my-3"></div>
      </div>
      {activeTab === "basic" && (
        <Formik
          initialValues={initialValues}
          validationSchema={employeeValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, values }) => (
            <Form className="space-y-6">
              <ImageUpload
                onImageChange={(file) => setSelectedFile(file)}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="First Name" name="firstName" />
                <InputField label="Last Name" name="lastName" />

                <InputField label="Employee ID" name="employeeId" />
                <InputField
                  label="Joining Date"
                  name="joiningDate"
                  type="date"
                />

                <InputField label="Username" name="username" />
                <InputField label="Email" name="email" type="email" />

                <div className="flex flex-col">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={values.password}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent text-sm"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      value={values.confirmPassword}
                      onChange={handleChange}
                      className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent text-sm"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                <InputField
                  label="Phone Number"
                  name="phoneNumber"
                  type="tel"
                />
                <InputField label="Company" name="company" />
                <div>
                  <Dropdown
                    name="department"
                    id="department"
                    label="Department"
                    options={departmentOptions.map((d) => ({
                      value: d,
                      label: d,
                    }))}
                  />
                  <p
                    className={`text-gray-700 w-max ml-auto mt-2 font-semibold text-right text-xs sm:text-sm cursor-pointer`}
                    onClick={() => setAddDepartment(true)}
                  >
                    +Add New department
                  </p>
                  {addDepartment && (
                    <div className="flex gap-x-4 mt-2 justify-normal md:justify-between">
                      <input
                        placeholder="Add New department"
                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent text-sm"
                      />
                      <button
                        type="button"
                        onClick={resetDepartmentField}
                      >
                        <RxCross2 className="text-red-500 hover:text-red-400 cursor-pointer" size={18} />
                      </button>
                      <button
                        type="button"
                      // onClick={() => handleAddItem(itemName)}
                      >
                        <MdDone className="text-green-600 hover:text-secondary cursor-pointer" size={18} />
                      </button>
                    </div>
                  )}
                </div>
                <div>
                  <Dropdown
                    name="designation"
                    id=" designation"
                    label="Designation"
                    options={designationOptions.map((d) => ({
                      value: d,
                      label: d,
                    }))}
                  />
                  <p
                    className={`text-gray-700 w-max ml-auto mt-2 font-semibold text-right text-xs sm:text-sm cursor-pointer`}
                    onClick={() => setAddDesignation(true)}
                  >
                    +Add New designation
                  </p>
                  {addDesignation && (
                    <div className="flex gap-x-4 mt-2 justify-normal md:justify-between">
                      <input
                        placeholder="Add New designation"
                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent text-sm"
                      />
                      <button
                        type="button"
                        onClick={resetdesignationField}
                      >
                        <RxCross2 className="text-red-500 hover:text-red-400 cursor-pointer" size={18} />
                      </button>
                      <button
                        type="button"
                      // onClick={() => handleAddItem(itemName)}
                      >
                        <MdDone className="text-green-600 hover:text-secondary cursor-pointer" size={18} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="md:col-span-2">
                  <InputField label="About" name="about" />
                </div>
              </div>

              <div className="flex flex-col gap-4 justify-center md:flex-row md:justify-end mt-6">
                <button
                  type="button"
                  className="px-6 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#f26522] text-white rounded-sm hover:bg-[#e05b1a]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Saving..." : "Save"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}

      {activeTab === "permissions" && (
        <div className="text-sm text-gray-500 py-4">
          {/* Permissions content would go here */}
        </div>
      )}
    </div>
  );
};

export default AddEmployee;