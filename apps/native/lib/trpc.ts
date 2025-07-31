import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import superjson from "superjson";
import { authClient } from "~/lib/features/auth/auth-client";
import type { AppRouter } from "../../server/src/routers";

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: 2,
			staleTime: 5 * 60 * 1000,
			gcTime: 5 * 60 * 1000,
			refetchOnWindowFocus: false,
		},
		mutations: {
			retry: 1,
		},
	},
});

export const trpc = createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: `${process.env.EXPO_PUBLIC_SERVER_URL}/trpc`,
			headers: () => {
				const headers = new Map<string, string>();
				const cookies = authClient.getCookie();
				if (cookies) {
					headers.set("Cookie", cookies);
				}

				return Object.fromEntries(headers);
			},
			transformer: superjson,
		}),
	],
});
