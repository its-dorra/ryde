import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db";
import * as schema from "../db/schema/auth";

export const auth = betterAuth({
	baseURL: process.env.BETTER_AUTH_URL,
	secret: process.env.BETTER_AUTH_SECRET,
	database: drizzleAdapter(db, {
		provider: "pg",
		schema: schema,
	}),
	trustedOrigins: [
		"ryde://",
		"exp://192.168.253.136:8081",
		"exp://localhost:8081",
	],
	emailAndPassword: {
		enabled: true,
		requireEmailVerification: true,
	},
	emailVerification: {
		sendVerificationEmail: async ({ user, url }) => {
			const html = await render(
				VerificationEmail({ name: user.name, verificationUrl: url }),
			);
			await resend.emails.send({
				from: "Acme <onboarding@resend.dev>",
				to: [user.email],
				subject: "Email Verification",
				html,
			});
		},
	},
	socialProviders: {
		google: {
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
		},
	},
	plugins: [expo()],
});
