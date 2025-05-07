"use client";
import React from "react";
import ImageUpload from "../common/form/ImageUpload";
import InputField from "../common/form/InputField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const AddProfile = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    // Handle form submission here
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      <div className="border border-gray-200 rounded-lg p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Profile</h2>
        <div className="border-b border-gray-200 w-full my-3"></div>

        <h3 className="text-md font-medium text-gray-700 mb-4">Basic Information</h3>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <ImageUpload />

              <div className="mt-6 space-y-4">
                {/* First Name + Last Name Row */}
                <div className="flex items-center gap-4">
                  <label className="w-24 text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <div className="flex-1 max-w-sm">
                    <InputField
                      name="firstName"
                      type="text"
                      className="mb-0"
                      hideLabel
                    />
                  </div>
                  
                  <label className="w-24 text-sm font-medium text-gray-700 ml-4">
                    Last Name
                  </label>
                  <div className="flex-1 max-w-sm">
                    <InputField
                      name="lastName"
                      type="text"
                      className="mb-0"
                      hideLabel
                    />
                  </div>
                </div>

                {/* Email + Phone Row */}
                <div className="flex items-center gap-4">
                  <label className="w-24 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="flex-1 max-w-sm">
                    <InputField
                      name="email"
                      type="email"
                      className="mb-0"
                      hideLabel
                    />
                  </div>
                  
                  <label className="w-24 text-sm font-medium text-gray-700 ml-4">
                    Phone
                  </label>
                  <div className="flex-1 max-w-sm">
                    <InputField
                      name="phone"
                      type="tel"
                      className="mb-0"
                      hideLabel
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#f26522] text-white rounded-sm hover:bg-[#e05b1a] transition-colors"
                  disabled={isSubmitting}
                >
                  Save Changes
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddProfile;