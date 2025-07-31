import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { authClient } from "~/lib/features/auth/auth-client";

const Index = () => {
	const { data } = authClient.useSession();

	return (
		<View className="flex-1 items-center justify-center gap-y-4">
			<Text>{JSON.stringify(data, null, 2)}</Text>
			<Button
				title="Log out"
				onPress={() =>
					authClient.signOut({
						fetchOptions: {
							onSuccess: () => {
								router.replace("/");
							},
						},
					})
				}
			/>
		</View>
	);
};
export default Index;
