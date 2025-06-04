"use client";

import Button from "@/components/common/Button";
import { Form, Formik } from "formik";
import { useParams } from "next/navigation";

const PermissionsPage = () => {
    const { role } = useParams();
    console.log(role, "role");
    const permissionModules = [
        { id: 'employee', label: 'Employees' },
        { id: 'leaves', label: 'Leaves' },
        { id: 'attendance', label: 'Attendance' },
        { id: 'performance', label: 'Performance' },
        { id: 'holidays', label: 'Holidays' },
    ];

    const permissionTypes = ['read', 'write', 'create', 'delete', 'import', 'export'];

    const handleSubmit = (values: any) => {
        console.log(values);
        // Handle form submission
    };
    return (
        <div className="rounded-2xl p-6 bg-white space-y-6 theme-shadow">
            <div>
                <h1 className="text-2xl font-semibold text-gray-800">Add Permissions</h1>
                <div className="border-b border-gray-200 w-full my-3"></div>
            </div>
            <Formik
                initialValues={{
                    permissions: {
                        employee: { read: false, write: false, create: false, delete: false, import: false, export: false },
                        leaves: { read: false, write: false, create: false, delete: false, import: false, export: false },
                        attendance: { read: false, write: false, create: false, delete: false, import: false, export: false },
                        performance: { read: false, write: false, create: false, delete: false, import: false, export: false },
                        holidays: { read: false, write: false, create: false, delete: false, import: false, export: false },
                    }
                }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, values, setFieldValue }) => (
                    <Form>
                        <div className="mt-6">
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
                        <div className="flex flex-col gap-4 justify-center md:flex-row md:justify-end mt-6">
                            <button
                                type="button"
                                className="px-6 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <Button type="submit" className='md:max-w-36' label={isSubmitting ? "Saving..." : "Save"}></Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div> 
    )
};

export default PermissionsPage;