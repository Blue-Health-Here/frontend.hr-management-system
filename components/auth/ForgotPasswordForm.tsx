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
import { useRouter } from "next/navigation";

export default function ForgotPasswordForm() {
    const router = useRouter();
    const handleSubmit = (values: ForgotPasswordFormValues) => {
        console.log("Form submitted:", values);
    };

    return (
        <>
            <div className="flex justify-end pr-10 pt-10">
                <Image src="/logo.png" alt="logo" width={150} height={60} />
            </div>            <div className="flex flex-col items-center w-full max-w-md mx-auto flex-1 justify-center">
                <div className="space-y-14 w-full">
                    <Button isArrowButton={true} onClick={() => router.push("/sign-in")} />
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold ">
                            Forget Password</h1>
                        <p className="text-secondary-dark-gray text-sm md:text-base">
                            Please enter your email to reset the password</p>
                    </div>
                    <Formik
                        initialValues={forgotPasswordInitialVals}
                        validationSchema={ForgotPasswordValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="space-y-4 w-full">
                            <InputField
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="olivia@untitledui.com"
                            />

                            <Button type="submit" label="Submit" className="mt-2" />
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}
