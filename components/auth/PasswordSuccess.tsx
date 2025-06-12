"use client";
import { signInInitialVals } from "@/utils/initialVals";
import { signInValidationSchema } from "@/utils/validationSchema";
import { Form, Formik } from "formik";
import InputField from "../common/form/InputField";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import Button from "../common/Button";
import Image from "next/image";

export default function PasswordSuccess() {
    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (values: any) => {
        console.log("Form submitted:", values);
    };
    return (
        <>
            <div className="flex justify-end pr-10 pt-10">
                <Image src="/logo.png" alt="logo" width={150} height={60} />
            </div>
            <div className="flex-grow flex flex-col justify-center items-center mx-auto w-full max-w-md space-y-8">
                <div className="text-center flex flex-col gap-4 items-center">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold ">
                        Success
                    </h1>
                    <p className="text-secondary-dark-gray text-sm md:text-base">
                        Congratulations! Your password has <br></br>
                        been changed. Click continue to login
                    </p>
                </div>
                <Formik
                    initialValues={signInInitialVals}
                    validationSchema={signInValidationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, setFieldValue }) => (
                        <Form className="space-y-4 w-full">
                        
                            <Button type="submit" label="Login" className="border-primary-navy-blue shadow-xs bg text-primary-navy-blue" ></Button>
                        </Form>
                    )}
                </Formik>
            </div>

        </>
    )
}