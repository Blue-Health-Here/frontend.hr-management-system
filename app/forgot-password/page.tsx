"use client";

import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/components/InputField";
import { Mail } from "lucide-react";
import AuthLayout from "@/components/layouts/AuthLayout";

interface ForgotPasswordFormValues {
  email: string;
}

const ForgotPasswordInitialVals: ForgotPasswordFormValues = {
  email: "",
};

const ForgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const handleSubmit = (values: ForgotPasswordFormValues) => {
  console.log("Form submitted:", values);
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="w-full md:w-3/5 lg:w-3/5 flex flex-col justify-center items-center p-8 overflow-y-auto bg-[#f3ebe1] relative min-h-screen">
        <div className="w-full max-w-[480px] space-y-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Image
                src="https://smarthr.dreamstechnologies.com/react/template/assets/img/logo.svg"
                alt="SmartHR Logo"
                width={150}
                height={40}
                className="h-10"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-10 text-center text-[#202c4b]">
              Forgot Password?
            </h2>

            <div className="text-sm text-gray-500 space-y-4">
              <p className="text-center pt-1">
                If you forgot your password, well, then we'll email you instructions to reset your password.
              </p>

              <Formik
                initialValues={ForgotPasswordInitialVals}
                validationSchema={ForgotPasswordValidationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="space-y-4">
                  <InputField
                    name="email"
                    type="email"
                    label="Email Address"
                    icon={<Mail className="h-4 w-4 text-black" />}
                  />

                  <button
                    type="submit"
                    className="w-full text-white py-3 rounded-md hover:opacity-90 transition font-bold"
                    style={{ backgroundColor: "rgb(243, 116, 56)" }}
                  >
                    Submit
                  </button>
                </Form>
              </Formik>

              <div className="space-y-6">
                <p className="text-center">
                  Return to{" "}
                  <Link
                    href="/sign-in"
                    className="text-[rgb(243,116,56)] hover:underline"
                  >
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright text positioned at the very bottom */}
        <div className="absolute bottom-8 left-0 right-0 text-center text-sm">
          <p className="text-[#111827]">Copyright © 2025 - Smarthr</p>
        </div>
      </div>
    </AuthLayout>
  );
}