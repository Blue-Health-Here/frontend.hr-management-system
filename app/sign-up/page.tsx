"use client";

import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/components/common/form/InputField";
import { User, Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import { signUpValidationSchema } from "@/utils/validationSchema";
import Button from "@/components/common/Button";

interface SignUpFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

const signUpInitialVals: SignUpFormValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
};

const handleSubmit = (values: SignUpFormValues) => {
  console.log("Form submitted:", values);
};

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <AuthLayout>
      <div className="w-full h-screen flex flex-col justify-between py-6 px-6 md:px-8 bg-primary-white overflow-hidden">
        <div className="self-start mb-4">
          <h1 className="text-green-600 text-3xl font-bold">SmartHR</h1>
        </div>

        <div className="flex flex-col items-center w-full max-w-md mx-auto flex-1 justify-center">
          <div className="mb-6 text-center flex flex-col items-center">
            <div className="relative w-24 h-24 flex items-center justify-center mb-3">
              <div className="absolute w-16 h-10 bg-green-700 transform -rotate-45 translate-x-2 translate-y-4 z-0" />
              <div className="absolute w-16 h-10 bg-green-500 transform -rotate-45 z-10" />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold text-primary-black mb-1">
              Create an account
            </h1>
            <p className="text-secondary-black text-sm md:text-base">
              Please enter your details to sign up
            </p>
          </div>
          
          <div className="w-full">
            <Formik
              initialValues={signUpInitialVals}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form className="space-y-3 w-full">
                  <InputField
                    name="fullName"
                    label="Name"
                    icon={<User className="h-4 w-4 text-black" />}
                  />

                  <InputField
                    name="email"
                    type="email"
                    label="Email Address"
                    icon={<Mail className="h-4 w-4 text-black" />}
                  />

                  <InputField
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    icon={
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="focus:outline-none"
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-black" />
                        ) : (
                          <Eye className="h-4 w-4 text-black" />
                        )}
                      </button>
                    }
                  />

                  <InputField
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    label="Confirm Password"
                    icon={
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="focus:outline-none"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-black" />
                        ) : (
                          <Eye className="h-4 w-4 text-black" />
                        )}
                      </button>
                    }
                  />

                  <div className="flex items-start mb-2">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeTerms"
                        name="agreeTerms"
                        type="checkbox"
                        checked={values.agreeTerms}
                        onChange={(e) =>
                          setFieldValue("agreeTerms", e.target.checked)
                        }
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                        required
                      />
                    </div>
                    <label
                      htmlFor="agreeTerms"
                      className="ms-2 text-xs sm:text-sm text-gray-500"
                    >
                      Agree to{" "}
                      <Link
                        href="#"
                        className="text-[#e70d0d] hover:underline"
                      >
                        Terms
                      </Link>{" "}
                      <span className="text-[#e70d0d]">and</span>{" "}
                      <Link
                        href="#"
                        className="text-[#e70d0d] hover:underline"
                      >
                        Privacy
                      </Link>
                    </label>
                  </div>

                  <Button label="Sign Up" className="mt-2" />

                  <div className="text-center text-xs sm:text-sm text-gray-500 pt-2">
                    Already have an account?{" "}
                    <Link
                      href="/sign-in"
                      className="text-[#e70d0d] hover:underline"
                    >
                      Sign in
                    </Link>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="h-6"></div>
      </div>
    </AuthLayout>
  );
}