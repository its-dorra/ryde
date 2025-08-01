import { useState } from "react";
import { Alert, Image } from "react-native";
import { icons } from "~/assets";
import CustomButton from "~/lib/components/custom-button";
import { authClient } from "~/lib/features/auth/auth-client";

export default function GoogleButton() {
	const [disabled, setDisabled] = useState(false);

	const handleGoogleClick = async () => {
		setDisabled(true);
		const { error } = await authClient.signIn.social({
			provider: "google",
			callbackURL: "/",
			fetchOptions: {
				onError: (error) => {
					Alert.alert("Error occured", JSON.stringify(error, null, 2));
				},
			}
		});
		setDisabled(false);

		// if (error) {
		// 	console.log(error);
		// 	Alert.alert("Error occurred", JSON.stringify(error, null, 3));
		// }
	};

	return (
		<CustomButton
			disabled={disabled}
			iconLeft={
				<Image source={icons.google} className="size-4" resizeMode="center" />
			}
			title="Log in with Google"
			bgVariant="outline"
			onPress={handleGoogleClick}
		/>
	);
}
