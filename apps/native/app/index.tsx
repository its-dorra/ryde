import { Redirect } from "expo-router";
import { Alert } from "react-native";
import { authClient } from "~/lib/features/auth/auth-client";

const Home = () => {
	const { data, isPending, error } = authClient.useSession();

	console.log(data);

	if (isPending) {
		return null;
	}

	if (error) {
		Alert.alert("Error", JSON.stringify(error));
	}

	if (data?.session.id) {
		return <Redirect href="/(root)/(tabs)" />;
	}

	return <Redirect href="/(auth)/onboarding" />;
};

export default Home;
