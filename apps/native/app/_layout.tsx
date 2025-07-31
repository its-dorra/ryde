import "../global.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Suspense, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ErrorBoundary from "~/lib/components/error-boundary";
import { queryClient, trpc, trpcClient } from "~/lib/trpc";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
	const [loaded] = useFonts({
		"Jakarta-Bold": require("../assets/fonts/PlusJakartaSans-Bold.ttf"),
		"Jakarta-ExtraBold": require("../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
		"Jakarta-ExtraLight": require("../assets/fonts/PlusJakartaSans-ExtraLight.ttf"),
		"Jakarta-Light": require("../assets/fonts/PlusJakartaSans-Light.ttf"),
		"Jakarta-Medium": require("../assets/fonts/PlusJakartaSans-Medium.ttf"),
		"Jakarta-Regular": require("../assets/fonts/PlusJakartaSans-Regular.ttf"),
		"Jakarta-SemiBold": require("../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				<SafeAreaView className="flex-1">
					<ErrorBoundary>
						<Suspense
							fallback={
								<ActivityIndicator size="large" className="self-center" />
							}
						>
							<Stack>
								<Stack.Screen name="(auth)" options={{ headerShown: false }} />
								<Stack.Screen name="(root)" options={{ headerShown: false }} />
							</Stack>
						</Suspense>
					</ErrorBoundary>
				</SafeAreaView>
			</QueryClientProvider>
		</trpc.Provider>
	);
}
