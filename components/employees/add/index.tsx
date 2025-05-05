"use client";
import React, { useState } from "react";
import { Upload, X, Eye, EyeOff } from "lucide-react"; // Added Eye and EyeOff icons
import InputField from "../../common/form/InputField";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { departmentOptions, designationOptions } from "@/utils/constants";

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 4 * 1024 * 1024) {
        alert("File size should be below 4MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleCancelUpload = () => {
    setSelectedFile(null);
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
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
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-24 h-24 rounded-full border-2 border-dashed ${
                      selectedFile ? "border-gray-300" : "border-gray-400"
                    } flex items-center justify-center overflow-hidden`}
                  >
                    {selectedFile ? (
                      <>
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                        <button
                          onClick={handleCancelUpload}
                          className="absolute top-0 right-0 bg-white rounded-full p-1 shadow-sm transform translate-x-1/4 -translate-y-1/4"
                        >
                          <X className="h-3 w-3 text-gray-600" />
                        </button>
                      </>
                    ) : (
                      <Upload className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>

                <div className="flex-1 flex flex-col">
                  <h2 className="text-sm font-medium text-gray-700 mb-1">
                    Upload Profile Image
                  </h2>
                  <p className="text-xs text-gray-500 mb-3">
                    Image should be below 4mb
                  </p>
                  <div className="flex gap-3">
                    <label className="px-4 py-2 bg-[#f26522] text-white rounded text-xs font-medium hover:bg-[#e05b1a] transition-colors cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      Upload
                    </label>
                    <button
                      type="button"
                      onClick={handleCancelUpload}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded text-xs font-medium hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>

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

                {/* Confirm Password Field with Toggle */}
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

              {/* Form Actions */}
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
        <div className="text-sm text-gray-500 py-4"></div>
      )}
    </div>
  );
};

export default AddEmployee;
