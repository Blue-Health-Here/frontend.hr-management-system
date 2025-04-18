"use client";

import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import InputField from "@/components/InputField";

interface SignInFormValues {
  email: string;
  password: string;
}

// Initial Values
const signInInitialVals: SignInFormValues = {
  email: "",
  password: "",
};

// Validation Schema
const signInValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

// Submit Handler
const handleSubmit = (values: SignInFormValues) => {
  console.log("Form submitted:", values);
};

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 lg:w-2/3 relative hidden md:flex items-center justify-center bg-gray-100">
        <div className="relative w-[800px] h-[600px]">
          <Image
            src="/hrm.png"
            alt="Signup"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center p-8 overflow-y-auto">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-6 md:mt-[-90px]">LOGO</h1>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-20">
              Login to your account 🔥
            </h2>

            <div className="text-xs sm:text-sm text-gray-500 space-y-4">
              <p>Welcome back! Please enter your details.</p>

              <Formik
                initialValues={signInInitialVals}
                validationSchema={signInValidationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="space-y-4">
                  <InputField
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Your email"
                  />

                  <div className="relative">
                    <InputField
                      name="password"
                      type={showPassword ? "text" : "password"}
                      label="Password"
                      placeholder="Your password"
                    />
                    <div
                      className="absolute inset-y-0 right-4 top-6 sm:top-8 flex items-center cursor-pointer"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white py-3 rounded-lg hover:opacity-90 transition font-bold"
                    style={{ backgroundColor: "#1E3A8A" }}
                  >
                    Sign In
                  </button>

                  <div className="text-center mt-4 w-full underline">
                    <Link
                      href="/forgot-password"
                      className="text-sm text-black hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </Form>
              </Formik>

              <p className="text-center mt-14">
                New on our platform?{" "}
                <Link
                  href="/sign-up"
                  className="text-black font-semibold hover:underline"
                >
                  Register Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
