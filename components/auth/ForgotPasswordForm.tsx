"use client";
import { forgotPasswordInitialVals } from "@/utils/initialVals";
import { ForgotPasswordFormValues } from "@/utils/types";
import { ForgotPasswordValidationSchema } from "@/utils/validationSchema";
import { Form, Formik } from "formik";
import InputField from "../common/form/InputField";
import { Mail } from "lucide-react";
import Button from "../common/Button";
import Link from "next/link";
import Image from "next/image";

export default function ForgotPasswordForm() {
    const handleSubmit = (values: ForgotPasswordFormValues) => {
        console.log("Form submitted:", values);
    };

    return (
        <>
            <Image src="/logo.png" alt="logo" width={150} height={60} className="pt-10"/>
            <div className="flex flex-col items-center w-full max-w-md mx-auto flex-1 justify-center">
                <div className="mb-6 text-center flex flex-col items-center">
                    <h1 className="text-xl md:text-2xl font-semibold text-primary-black mb-1">
                        Forgot Password?
                    </h1>
                    <p className="text-gray-500 text-sm md:text-base">
                        If you forgot your password, we'll email you instructions to reset your password.
                    </p>
                </div>

                <div className="w-full">
                    <Formik
                        initialValues={forgotPasswordInitialVals}
                        validationSchema={ForgotPasswordValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="space-y-3 w-full">
                            <InputField
                                name="email"
                                type="email"
                                label="Email Address"
                                icon={<Mail className="h-4 w-4 text-black" />}
                            />

                            <Button type="submit" label="Submit" className="mt-2" />
                        </Form>
                    </Formik>
                </div>
            </div>

            <div className="text-center text-gray-500">
                Return to{" "}
                <Link
                    href="/sign-in"
                    className="text-[#e70d0d] hover:underline"
                >
                    Sign In
                </Link>
            </div>
        </>
    )
}
