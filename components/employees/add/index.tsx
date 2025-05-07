"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import InputField from "../../common/form/InputField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { departmentOptions, designationOptions } from "@/utils/constants";
import ImageUpload from "@/components/common/form/ImageUpload";

const AddEmployee = () => {
  const [activeTab, setActiveTab] = useState<"basic" | "permissions">("basic");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const EmployeeSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    employeeId: Yup.string().required("Employee ID is required"),
    joiningDate: Yup.date().required("Joining date is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm password is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    company: Yup.string().required("Company is required"),
    department: Yup.string().required("Department is required"),
    designation: Yup.string().required("Designation is required"),
    about: Yup.string(),
  });

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

  return (
    <div className="container mx-auto max-w-4xl ml-0">
      <div className="mb-4">
        <h1 className="text-lg font-semibold text-gray-800">
          Add New Employee
        </h1>
        <div className="border-b border-gray-200 w-full my-3"></div>
      </div>

      <div className="flex mb-4">
        <button
          className={`px-3 py-1 text-sm font-medium ${
            activeTab === "basic"
              ? "text-[#f26522] border-b-2 border-[#f26522]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("basic")}
        >
          Basic Information
        </button>
        <button
          className={`px-3 py-1 text-sm font-medium ${
            activeTab === "permissions"
              ? "text-[#f26522] border-b-2 border-[#f26522]"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("permissions")}
        >
          Permissions
        </button>
      </div>
      <div className="border-b border-gray-200 w-full mb-4"></div>

      {activeTab === "basic" && (
        <Formik
          initialValues={initialValues}
          validationSchema={EmployeeSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, values }) => (
            <Form>
              <ImageUpload 
                onImageChange={(file) => setSelectedFile(file)}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                <div className="flex flex-col">
                  <label
                    htmlFor="department"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Department
                  </label>
                  <select
                    id="department"
                    name="department"
                    value={values.department}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent text-sm appearance-none bg-[right_0.5rem_center] bg-[length:1rem_1rem] bg-no-repeat pr-8"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="">Select</option>
                    {departmentOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="designation"
                    className="text-sm font-medium text-gray-700 mb-1"
                  >
                    Designation
                  </label>
                  <select
                    id="designation"
                    name="designation"
                    value={values.designation}
                    onChange={handleChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f26522] focus:border-transparent text-sm appearance-none bg-[right_0.5rem_center] bg-[length:1rem_1rem] bg-no-repeat pr-8"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="">Select</option>
                    {designationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="md:col-span-2">
                  <InputField label="About" name="about" />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-8">
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