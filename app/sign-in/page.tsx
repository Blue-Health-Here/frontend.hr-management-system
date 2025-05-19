"use client";

import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/components/common/form/InputField";
import { Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import AuthLayout from "@/components/layouts/AuthLayout";
import { signInValidationSchema } from "@/utils/validationSchema";
import Button from "@/components/common/Button";

interface SignInFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const signInInitialVals: SignInFormValues = {
  email: "",
  password: "",
  rememberMe: false,
};



const handleSubmit = (values: SignInFormValues) => {
  console.log("Form submitted:", values);
};

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex min-h-screen w-full">
      <div className="hidden md:block w-1/2 bg-gray-100 items-center justify-center">
        <div className="flex justify-center items-center h-full w-full max-w-md mx-auto">
          <div className="px-6">
            <div className="mb-8 text-center">
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-black text-center">
                Empowering people through seamless HR management.
              </h1>
            </div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <Image
                src="/img-1.png"
                alt="Main Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="text-center mt-8 font-semibold text-black text-xl">
              Efficiently manage your workforce, streamline operations effortlessly.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between py-10 px-6 md:px-8 bg-primary-white">
        <div className="self-start mb-8">
          <h1 className="text-green-600 text-3xl font-bold">SmartHR</h1>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center w-full max-w-md mx-auto">
          <div className="mb-8 text-center flex flex-col items-center">
            <div className="relative w-32 h-32 flex items-center justify-center mb-4">
              <div className="absolute w-20 h-12 bg-green-700 transform -rotate-45 translate-x-2 translate-y-4 z-0" />
              <div className="absolute w-20 h-12 bg-green-500 transform -rotate-45 z-10" />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-primary-black mb-1">
              Welcome back !
            </h1>
            <p className="text-secondary-black text-xs sm:text-sm md:text-base font-secondary">
              Welcome back! Please enter your details.
            </p>
          </div>
          <Formik
            initialValues={signInInitialVals}
            validationSchema={signInValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form className="space-y-4 w-full">
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
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <div className="flex items-center h-5">
                      <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        checked={values.rememberMe}
                        onChange={(e) =>
                          setFieldValue("rememberMe", e.target.checked)
                        }
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                      />
                    </div>
                    <label
                      htmlFor="rememberMe"
                      className="ms-2 text-sm text-gray-500"
                    >
                      Remember Me
                    </label>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-xs md:text-sm text-[#e70d0d] hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Button label=" Sign In"></Button>
              </Form>
            )}
          </Formik>
        </div>

        <div className="md:h-8"></div>
      </div>
    </div>
  );
}