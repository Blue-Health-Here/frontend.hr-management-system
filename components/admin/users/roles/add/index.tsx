"use client";
import React from "react";
import { Formik, Form } from "formik";
import InputField from "@/components/common/form/InputField";
import Dropdown from "@/components/common/form/DropDown";
import Button from "@/components/common/Button";

const AddRole: React.FC = () => {
    return (
        <div className="rounded-2xl p-6 bg-white space-y-6">
            <div>
                <h1 className="text-2xl  font-semibold text-gray-800">Add Role</h1>
                <div className="border-b border-gray-200 w-full my-3"></div>
            </div>

            <Formik
                initialValues={{
                    name: "",
                    status: ""
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {() => (
                    <Form className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 w-full">
                            <InputField
                                name="name"
                                label="Name"
                                type="text"
                                className="flex-1"
                            />
                            <Dropdown
                                name="status"
                                id="status"
                                label="Status"
                                options={[
                                    { value: "active", label: "Active" },
                                    { value: "in-active", label: "In-Active" }
                                ]}
                            />
                        </div>
                        <div className="flex flex-col gap-4 justify-center md:flex-row md:justify-end">
                            <button
                                type="button"
                                className="px-6 py-2 border border-gray-300 rounded-sm text-gray-700 hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <Button
                                type="submit"
                                className="md:max-w-36"
                                label="Add Role"
                            >
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddRole;