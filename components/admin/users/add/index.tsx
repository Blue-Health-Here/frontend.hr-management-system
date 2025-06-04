"use client";
import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '@/components/common/form/InputField';
import Dropdown from '@/components/common/form/DropDown';
import Button from '@/components/common/Button';

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
    permissions: {
      employee: { read: false, write: false, create: false, delete: false, import: false, export: false },
      holidays: { read: false, write: false, create: false, delete: false, import: false, export: false },
      leaves: { read: false, write: false, create: false, delete: false, import: false, export: false },
      events: { read: false, write: false, create: false, delete: false, import: false, export: false },
    }
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    // Handle form submission
  };

  return (
    <div className="rounded-2xl p-6 bg-white space-y-6 theme-shadow">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Add User</h1>
        <div className="border-b border-gray-200 w-full my-3"></div>
      </div>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputField label="First Name" name="firstName" />
              <InputField label="Last Name" name="lastName" />
              <InputField label="User Name" name="username" />
              <InputField label="Email" name="email" type="email" />
              <InputField label="Password" name="password" type="password" />
              <InputField label="Confirm Password" name="confirmPassword" type="password" />
              <InputField label="Phone" name="phone" type="tel" />
              <Dropdown id="role" name="role" label="Role" options={roleOptions} value="" onChange={() => { }}/>
            </div>
            <div className="flex flex-col gap-4 justify-center md:flex-row md:justify-end mt-6">
              <button
                type="button"
                className="px-6 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <Button className='md:max-w-36' label={isSubmitting ? "Saving..." : "Save"}></Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddUser;