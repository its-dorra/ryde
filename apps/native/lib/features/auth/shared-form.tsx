import { formOptions } from "@tanstack/form-core";
import {
	loginSchema,
	signupSchema,
	verificationSchema,
} from "~/lib/features/auth/schema";

export const loginFormOptions = formOptions({
	defaultValues: {
		email: "",
		password: "",
	},
	validators: {
		// onChange: loginSchema,
		onSubmit: loginSchema,
	},
});

export const signupFormOptions = formOptions({
	defaultValues: {
		email: "",
		password: "",
		name: "",
	},
	validators: {
		// onChange: signupSchema,
		onSubmit: signupSchema,
	},
});

export const verificationFormOptions = formOptions({
	defaultValues: {
		code: "",
	},
	validators: {
		onChange: verificationSchema,
	},
});
