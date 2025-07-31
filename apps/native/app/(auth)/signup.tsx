import { Link } from "expo-router";
import React, { useState } from "react";
import { Platform, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthBanner from "~/lib/features/auth/components/auth-banner";
import GoogleButton from "~/lib/features/auth/components/google-button";
import OrDivider from "~/lib/features/auth/components/or-divider";
import SignupForm from "~/lib/features/auth/components/signup-form";
import SuccessModal from "~/lib/features/auth/components/success-modal";

const Signup = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const toggleModal = () => {
		setIsModalVisible(true);
	};

	return (
		<View className="flex-1">
			<KeyboardAwareScrollView
				contentContainerStyle={{ flexGrow: 1 }}
				contentContainerClassName="bg-white"
				enableOnAndroid
				keyboardShouldPersistTaps="handled"
				extraScrollHeight={Platform.OS === "ios" ? 20 : 40}
			>
				<AuthBanner text="Create Your Account" />
				<View className="px-8 pt-8">
					<SignupForm toggleModal={toggleModal} />
					<OrDivider className="my-4" />
					<GoogleButton />
					<Link
						className="mt-8 text-center font-JakartaSemiBold text-general-200 text-lg"
						replace
						href="/login"
					>
						<Text>Already have an account? </Text>
						<Text className="text-primary-500">Login</Text>
					</Link>
				</View>
				<SuccessModal isVisible={isModalVisible} />
			</KeyboardAwareScrollView>
		</View>
	);
};
export default Signup;
