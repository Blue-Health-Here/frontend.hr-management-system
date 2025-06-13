import * as Yup from "yup";

export const employeeValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  employeeId: Yup.string().required("Employee ID is required"),
  joiningDate: Yup.date().required("Joining date is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Confirm password is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  company: Yup.string().required("Company is required"),
  department: Yup.string().required("Department is required"),
  designation: Yup.string().required("Designation is required"),
  about: Yup.string(),
});

export const ForgotPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});


export const signInValidationSchema = Yup.object({
  // email: Yup.string()
  //   .email("Invalid email address")
  //   .required("Email is required"),
  userName: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const signUpValidationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  userName: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
  // agreeTerms: Yup.boolean()
  //   .oneOf([true], "You must accept the terms and conditions")
  //   .required("You must accept the terms and conditions"),
});

export const profileValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  postalCode: Yup.string().required("Postal code is required"),
  currentPassword: Yup.string().when({
    is: (val: string) => !!val,
    then: (schema) => schema.required("Current password is required"),
  }),
  newPassword: Yup.string().when("currentPassword", {
    is: (val: string) => !!val,
    then: (schema) =>
      schema
        .required("New password is required")
        .min(8, "Password must be at least 8 characters"),
  }),
  confirmPassword: Yup.string().when("newPassword", {
    is: (val: string) => !!val,
    then: (schema) =>
      schema
        .required("Confirm password is required")
        .oneOf([Yup.ref("newPassword")], "Passwords must match"),
  }),
});

export const OtpVerificationSchema = Yup.object({
  otp: Yup.string()
    .required("OTP is required")
    .matches(/^\d{6}$/, "OTP must be exactly 6 digits"),
})
