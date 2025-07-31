import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import { ReactNativeModal } from "react-native-modal";
import { images } from "~/assets";
import CustomButton from "~/lib/components/custom-button";

interface SuccessModalProps {
	isVisible: boolean;
}

export default function SuccessModal({ isVisible }: SuccessModalProps) {
	return (
		<ReactNativeModal isVisible={isVisible}>
			<View className="min-h-[300px] rounded-2xl bg-white px-7 py-9">
				<Image source={images.check} className="mx-auto my-5 size-[110px]" />
				<View className="items-center gap-y-4">
					<Text className="text-center font-JakartaBold text-4xl">
						Verified
					</Text>
					<Text className="text-center font-Jakartna text-gray-600 text-xl">
						You have successfully created your account
					</Text>
					<Text className="text-center font-Jakartna text-gray-600 text-lg">
						You need to go to your email to verify it
					</Text>
					<CustomButton
						title="Go to Login page"
						bgVariant="primary"
						onPress={() => router.replace("/login")}
					/>
				</View>
			</View>
		</ReactNativeModal>
	);
}
