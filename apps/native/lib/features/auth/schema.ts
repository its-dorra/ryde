import { z } from "zod/v4";

export const loginSchema = z.object({
	email: z.email({ error: "Enter a valid email" }),
	password: z
		.string()
		.trim()
		.min(8, { error: "Password must be at least 8 characters" }),
});

export const signupSchema = z.object({
	name: z.string().min(3, { error: "Name is required" }),
	email: z.email({ error: "Enter a valid email" }),
	password: z
		.string()
		.min(8, { error: "Password must be at least 8 characters" }),
});

export const verificationSchema = z.object({
	code: z
		.string()
		.trim()
		.regex(/^[0-9]{6}$/, "Code must be exactly 6 numeric digits"),
});
