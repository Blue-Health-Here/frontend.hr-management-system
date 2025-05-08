"use client";
import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '@/components/common/form/InputField';
import Dropdown from '@/components/common/form/DropDown';

function AddUser() {
  const roleOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
    { value: 'manager', label: 'Manager' },
  ];

  const initialValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <div className="container mx-auto max-w-4xl ml-0">
      <div className="mb-4">
        <h1 className="text-lg font-semibold text-gray-800">Add User</h1>
        <div className="border-b border-gray-200 w-full my-3"></div>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField 
                label="First Name" 
                name="firstName" 
              />
              
              <InputField 
                label="Last Name" 
                name="lastName" 
              />
              
              <InputField 
                label="User Name" 
                name="username" 
              />
              
              <InputField 
                label="Email" 
                name="email" 
                type="email"
              />
              
              <InputField 
                label="Password" 
                name="password" 
                type="password"
              />
              
              <InputField 
                label="Confirm Password" 
                name="confirmPassword" 
                type="password"
              />
              
              <InputField 
                label="Phone" 
                name="phone" 
                type="tel"
              />
              
              <Dropdown
                id="role"
                name="role"
                label="Role"
                options={roleOptions}
                value=""
                onChange={() => {}}
              />
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
    </div>
  );
}

export default AddUser;