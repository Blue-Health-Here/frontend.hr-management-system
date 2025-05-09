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

  const permissionModules = [
    { id: 'employee', label: 'Employee' },
    { id: 'holidays', label: 'Holidays' },
    { id: 'leaves', label: 'Leaves' },
    { id: 'events', label: 'Events' },
  ];

  const permissionTypes = ['read', 'write', 'create', 'delete', 'import', 'export'];

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
        {({ isSubmitting, values, setFieldValue }) => (
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
                className='mt-4'
              />
            </div>

            <div className="mt-8 mb-6">
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b border-gray-200">Module Permissions</th>
                      <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b border-gray-200">Read</th>
                      <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b border-gray-200">Write</th>
                      <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b border-gray-200">Create</th>
                      <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b border-gray-200">Delete</th>
                      <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b border-gray-200">Import</th>
                      <th className="px-4 py-2 text-left text-sm font-bold text-gray-700 border-b border-gray-200">Export</th>
                    </tr>
                  </thead>
                  <tbody>
                    {permissionModules.map((module) => (
                      <tr key={module.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">{module.label}</td>
                        {permissionTypes.map((permission) => (
                          <td key={`${module.id}-${permission}`} className="px-4 py-3 text-sm border-b border-gray-200">
                            <input
                              type="checkbox"
                              checked={values.permissions[module.id as keyof typeof values.permissions][permission as keyof typeof values.permissions.employee]}
                              onChange={(e) => {
                                setFieldValue(
                                  `permissions.${module.id}.${permission}`,
                                  e.target.checked
                                );
                              }}
                              className="h-4 w-4 text-[#f26522] focus:ring-[#f26522] border-gray-300 rounded"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
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
    </div>
  );
}

export default AddUser;