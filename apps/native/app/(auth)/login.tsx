import { Link } from "expo-router";
import React from "react";
import { Platform, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthBanner from "~/lib/features/auth/components/auth-banner";
import GoogleButton from "~/lib/features/auth/components/google-button";
import LoginForm from "~/lib/features/auth/components/login-form";
import OrDivider from "~/lib/features/auth/components/or-divider";

const Login = () => {
	return (
		<View className="flex-1">
			<KeyboardAwareScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				contentContainerClassName="bg-white"
				enableOnAndroid
				keyboardShouldPersistTaps="handled"
				extraScrollHeight={Platform.OS === "ios" ? 20 : 40}
			>
				<AuthBanner text="Welcome 👋" />
				<View className="px-8 pt-8">
					<LoginForm />
					<OrDivider className="my-4" />
					<GoogleButton />
					<Link
						replace
						className="mt-8 text-center font-JakartaSemiBold text-general-200 text-lg"
						href="/signup"
					>
						<Text>Don&apos;t have an account? </Text>
						<Text className="text-primary-500">Sign up</Text>
					</Link>
				</View>
			</KeyboardAwareScrollView>
		</View>
	);
};
export default Login;
