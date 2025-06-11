"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { employeeData, employeeStats, sorting } from "@/utils/constants";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ExportButton from "../../common/ExportButton";
import Button from "../../common/Button";
import MetricCard from "../../common/MetricCard";
import Dropdown from "@/components/common/form/DropDown";
import DatePickerField from "@/components/common/form/DatePickerField";
import { Field, Form, Formik } from "formik";
import { FiEdit } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import DateRangeField from "@/components/common/form/DateRangeField";

const EmployeesView = () => {
  const router = useRouter();
  const [employees, setEmployees] = useState(employeeData);
  const [designationFilter, setDesignationFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // Calculate summary numbers
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;
  const inactiveEmployees = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;

  const newJoiners = employees.filter((emp) => {
    const joinDate = new Date(emp.joiningDate);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    return joinDate >= sevenDaysAgo;
  }).length;

  const handleDesignationChange = (id: string, newDesignation: string) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id
          ? { ...employee, designation: newDesignation }
          : employee
      )
    );
  };

  const handleFilterChange = () => {
    let filteredEmployees = [...employees];

    if (designationFilter) {
      filteredEmployees = filteredEmployees.filter(
        (employee) => employee.designation === designationFilter
      );
    }

    if (statusFilter !== "All") {
      filteredEmployees = filteredEmployees.filter(
        (employee) => employee.status === statusFilter
      );
    }

    if (sortOption === "ascending") {
      filteredEmployees.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === "last7days") {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

      filteredEmployees = filteredEmployees.filter((employee) => {
        const joinDate = new Date(employee.joiningDate);
        return joinDate >= sevenDaysAgo;
      });
    }

    return filteredEmployees;
  };

  const initialValues = {
    date: '',
    designation: '',
    status: '',
    sort: '',
  };

  const filteredEmployees = handleFilterChange();

  return (
    <div className="space-y-4 md:space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Employee</h1>
        <div className="flex flex-col sm:flex-row items-stretch gap-3 w-auto">
          <ExportButton />
          <Link
            href="/admin/employees/add"
          >
            <Button label="Add Employee" icon={Plus}></Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {employeeStats.map((stats, index) => (
          <MetricCard
            key={`stats-${index}`}
            title={stats.title}
            value={stats.value}
            icon={stats.icon}
            iconBgColor={stats.iconBgColor}
            percentage={stats.percentage}
            percentageColor={stats.percentColor}
            textColor={stats.textColor}
            isShowCradFooter={false}
          />
        ))}
      </div>
      <div className="overflow-x-auto bg-white rounded-2xl theme-shadow">
        <div className="flex flex-wrap justify-between items-start md:items-center gap-4 bg-white p-4">
          <h2 className="text-lg font-semibold">Employees List</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              console.log('Form Values:', values);
            }}
          >
            {({ setFieldValue, values }) => (
              <Form>
                <div className="flex flex-wrap items-stretch sm:items-center gap-3">

                  {/* <DateRangeField name="dateRange" label="" /> */}
                  <DatePickerField name="date" className="w-full sm:w-52 md::w-60" />
                  <div className="w-full sm:w-36">
                    <Field
                      as="select"
                      name="designation"
                      className="block w-full pl-3 pr-8 py-1.5 sm:py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm rounded-md appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNoZXZyb24tZG93biI+PHBhdGggZD0ibTYgOSA2IDYgNi02Ii8+PC9zdmc+')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1rem]"
                    >
                      <option value="ascending">Designation</option>
                      <option value="Developer">Developer</option>
                      <option value="Executive">Executive</option>
                      <option value="Software Engineer">Software Engineer</option>
                      <option value="Product Manager">Product Manager</option>
                      <option value="UX Designer">UX Designer</option>
                      <option value="Marketing Specialist">Marketing Specialist</option>
                      <option value="HR Manager">HR Manager</option>
                      <option value="Financial Analyst">Financial Analyst</option>
                      <option value="Operations Manager">Operations Manager</option>
                      <option value="Sales Executive">Sales Executive</option>
                    </Field>
                  </div>

                  <div className="w-full sm:w-36">
                    <Field
                      as="select"
                      name="status"
                      className="block w-full pl-3 pr-8 py-1.5 sm:py-2 border border-gray-300 focus:outline-none text-sm rounded-md appearance-none bg-[url('data:image/svg+xml;base64,...')] bg-no-repeat bg-[position:right_0.5rem_center] bg-[size:1rem]"
                    >
                      <option value="">Select Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </Field>
                  </div>

                  <Dropdown
                    name="sort"
                    id="sort"
                    placeholder="Sort By: Last 7 Days"
                    className="w-full sm:w-44"
                    options={sorting.map((d) => ({ value: d, label: d }))}
                    value={values.sort}
                    onChange={(option: any) => setFieldValue("sort", option)}
                  />
                  <div className="w-28">
                    <Button label="Submit" type="submit" />
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Emp ID
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Name
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Email
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Phone
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Designation
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Joining Date
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Status
                </th>
                <th className="py-3 px-6 text-left text-sm font-bold text-gray-900 tracking-wider border-b border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredEmployees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-500">
                    {employee.id}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <Image
                          src={employee.image}
                          alt={employee.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                          unoptimized
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-500">
                          {employee.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {employee.department}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {employee.email}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {employee.phone}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {employee.designation}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">
                    {employee.joiningDate}
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${employee.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                        }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex gap-4">
                      <Link href={`/admin/employees/${employee.id}/edit`}>
                        <FiEdit size={16} />
                      </Link>
                      <button className="cursor-pointer">
                        <IoTrashOutline size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeesView;
