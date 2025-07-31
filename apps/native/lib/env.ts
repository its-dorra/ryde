import { z } from "zod/v4";

const EnvSchema = z.object({
	EXPO_PUBLIC_SERVER_URL: z.url(),
});

const env = EnvSchema.parse(process.env);

export default env;
