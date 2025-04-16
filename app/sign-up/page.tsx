"use client";
import Image from "next/image";
import Link from "next/link";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

interface SignUpFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Initial Values
const signUpInitialVals = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Validation Schema
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
});

// Submit Handler
const handleSubmit = (values: SignUpFormValues) => {
  console.log("Form submitted:", values);
};

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side Image */}
      <div className="w-full md:w-1/2 lg:w-2/3 relative hidden md:flex items-center justify-center bg-gray-100">
        <div className="relative w-[800px] h-[600px]">
          {" "}
          <Image
            src="/hrm.png"
            alt="Signup"
            layout="fill"
            objectFit="contain" 
          />
        </div>
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/3 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-sm space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mt-6 md:mt-[-90px]">LOGO</h1>
          </div>

          <div>
            <h2 className="text-xl font-semibold mt-10">Register Account 😍</h2>

            <div className="text-sm text-gray-500 space-y-4 ">
              <p>Register your account today.</p>

              <Formik
                initialValues={signUpInitialVals}
                validationSchema={signUpValidationSchema}
                onSubmit={handleSubmit}
              >
                <Form className="space-y-4">
                  <div>
                    <label className="block font-medium text-gray-500 mt-10">
                      Full Name
                    </label>
                    <Field
                      name="fullName"
                      type="text"
                      placeholder="Your full name"
                      className="mt-1 block w-[94%] px-4 py-3 border border-gray-300 rounded-lg  focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="p"
                      className="text-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-500">
                      Email
                    </label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Your email"
                      className="mt-1 block w-[94%] px-4 py-3 border border-gray-300 rounded-lg  focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-500">
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      placeholder="Your password"
                      className="mt-1 block w-[94%] px-4 py-3 border border-gray-300 rounded-lg  focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-500">
                      Confirm Password
                    </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      className="mt-1 block w-[94%] px-4 py-3 border border-gray-300 rounded-lg  focus:ring focus:ring-blue-200"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="p"
                      className="text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-[94%] text-white py-3 rounded-lg hover:bg-blue-700 transition font-bold"
                    style={{ backgroundColor: "#1E3A8A" }}
                  >
                    Sign Up
                  </button>
                </Form>
              </Formik>

              <p className="text-center mt-14">
                Already have an account?{" "}
                <Link href="/signin" className="text-blue-600 hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
