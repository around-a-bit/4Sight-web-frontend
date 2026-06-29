import { z } from "zod";

// World standard URL validation
export const urlRegex = /^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/i;
export const urlSchema = z.string().trim().regex(urlRegex, "Please enter a valid URL (e.g., https://example.com)");
export const optionalUrlSchema = z.string().trim().refine(val => !val || urlRegex.test(val), "Please enter a valid URL");

// World standard email validation
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
export const emailSchema = z.string().trim().regex(emailRegex, "Please enter a valid email address");

// Password schema (At least 8 chars, 1 uppercase, 1 number, 1 special char)
export const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]|\\:;"'<>,.?/-]).{8,}$/;
export const passwordSchema = z.string().regex(passwordRegex, "Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 number, and 1 special character.");

// OTP schema
export const otpRegex = /^\d{6}$/;
export const otpSchema = z.string().regex(otpRegex, "OTP must be exactly 6 digits");

// Phone schema (Allow + and 10-15 digits)
export const phoneRegex = /^\+?[\d\s\-\(\)]{10,20}$/;
export const phoneSchema = z.string().regex(phoneRegex, "Please enter a valid phone number");

// Name schemas
export const fullNameSchema = z.string().trim()
    .max(50, "Full name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces");
export const businessNameSchema = z.string().trim()
    .max(100, "Business name cannot exceed 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Business name can only contain letters and spaces");
export const designationSchema = z.string().trim().max(20, "Designation cannot exceed 20 characters");

// Product / Service schemas
export const productServiceNameSchema = z.string().trim().max(50, "Product/Service name cannot exceed 50 characters");
