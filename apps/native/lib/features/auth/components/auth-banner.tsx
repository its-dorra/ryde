import { Image, Text, View } from "react-native";
import { images } from "~/assets";

interface AuthBannerProps {
	text: string;
}

export default function AuthBanner({ text }: AuthBannerProps) {
	return (
		<View className="relative h-[200px]">
			<Image
				source={images.getStarted}
				className="h-full w-full"
				resizeMode="stretch"
			/>
			<View className="absolute bottom-4 left-8">
				<Text className="font-JakartaSemiBold text-3xl">{text}</Text>
			</View>
		</View>
	);
}
