"use client";

import Image from "next/image";
import Link from "next/link";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from "@/components/InputField";
import { User, Mail, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

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

const signUpValidationSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  agreeTerms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const handleSubmit = (values: SignUpFormValues) => {
  console.log("Form submitted:", values);
};

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div
        className="w-full md:w-2/5 lg:w-2/5 relative hidden md:flex flex-col items-center justify-center min-h-screen"
        style={{
          background: "linear-gradient(to bottom, #fd7e14, #58151c)",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        {/* Text Above Image - moved down */}
        <div className="relative z-10">
          <div
            className="border border-white bg-white/22 backdrop-blur-lg shadow-lg rounded-xl px-12 py-8 flex flex-col items-center"
            style={{ marginTop: "60px" }}
          >
            <h1
              className="text-white text-4xl md:text-5xl mb-4 px-4 font-bold relative text-left"
              style={{
                fontSize: "40px",
                lineHeight: "1.2",
                top: "60px",
                left: "-20px",
              }}
            >
              <div>Empowering people</div>
              <div>through seamless HR</div>
              <div>management.</div>
            </h1>
            

            <div className="relative w-64 h-64 md:w-72 md:h-72">
              <Image
                src="/img-1.png"
                alt="Main Logo"
                fill
                className="object-contain"
                priority
              />
            </div>

            <p
              className="text-white text-center px-4 font-semibold relative"
              style={{
                fontSize: "20px",
                top: "-20px",
              }}
            >
              Efficiently manage your workforce, streamline <br />
              operations effortlessly.
            </p>
          </div>
        </div>

        {/* Bottom Left Image */}
        <div className="absolute bottom-0 left-12 w-24 h-16">
          <Image
            src="/left-image.png"
            alt="Left Decoration"
            fill
            className=""
          />
        </div>

        {/* Bottom Right Image */}
        <div className="absolute bottom-0 right-4 w-60 h-60">
          <Image
            src="/right-image.png"
            alt="Right Decoration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-3/5 lg:w-3/5 flex flex-col justify-center items-center p-8 overflow-y-auto bg-[#f3ebe1]" >
        <div className="w-full max-w-[480px] space-y-6">
          <div className="text-center">
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
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-10 text-center">Sign Up</h2>

            <div className="text-sm text-gray-500 space-y-4">
              <p className="text-center">
                Please enter your details to sign up
              </p>

              <Formik
                initialValues={signUpInitialVals}
                validationSchema={signUpValidationSchema}
                onSubmit={handleSubmit}
              >
                {({ values, setFieldValue }) => (
                  <Form className="space-y-4">
                    {/* Form fields remain the same */}
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

                    {/* Terms and Privacy Checkbox */}
                    <div className="flex items-start">
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
                        className="ms-2 text-sm text-gray-500"
                      >
                        Agree to{" "}
                        <a
                          href="#"
                          className="text-[rgb(243,116,56)] hover:underline"
                        >
                          Terms
                        </a>{" "}
                        <span className="text-[rgb(243,116,56)]">and</span>{" "}
                        <a
                          href="#"
                          className="text-[rgb(243,116,56)] hover:underline"
                        >
                          Privacy
                        </a>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full text-white py-3 rounded-md hover:opacity-90 transition font-bold"
                      style={{ backgroundColor: "rgb(243, 116, 56)" }}
                    >
                      Sign Up
                    </button>
                  </Form>
                )}
              </Formik>

              <div className="space-y-6">
                <p className="text-center">
                  Already have an account?{" "}
                  <Link
                    href="/sign-in"
                    className="text-[rgb(243,116,56)] hover:underline"
                  >
                    Sign in
                  </Link>
                </p>

                {/* Separator with "or" text */}
                <div className="relative flex items-center">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500 text-sm">or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Rectangular Social login buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[#1877F2]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                    <span className="text-sm hidden sm:inline">Facebook</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-[#EA4335]"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866.549 3.921 1.453l2.814-2.814C17.503 2.332 15.139 1 12.545 1 7.021 1 2.543 5.478 2.543 11s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z" />
                    </svg>
                    <span className="text-sm hidden sm:inline">Google</span>
                  </button>

                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-gray-800"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <span className="text-sm hidden sm:inline">Apple</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
