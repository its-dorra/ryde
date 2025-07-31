import { Image, Text, View } from "react-native";

interface OnboardingPageProps {
	image: any;
	onboarding: {
		id: number;
		title: string;
		description: string;
	};
}

export default function OnboardingPage({
	onboarding,
	image,
}: OnboardingPageProps) {
	return (
		<View className="flex-col gap-y-10">
			<Image className="h-[350px] w-full" resizeMode="contain" source={image} />
			<View className="items-center gap-y-4">
				<Text className="mx-10 text-center font-bold text-5xl">
					{onboarding.title}
				</Text>
				<Text className="mx-12 text-center font-JakartaSemiBold text-[#858585] text-xl">
					{onboarding.description}
				</Text>
			</View>
		</View>
	);
}
