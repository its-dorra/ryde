import { router } from "expo-router";
import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Swiper from "react-native-swiper";
import { onboardings } from "~/assets";
import CustomButton from "~/lib/components/custom-button";
import OnboardingPage from "~/lib/components/onboarding-page";

const Onboarding = () => {
	const swiperRef = useRef<Swiper>(null);
	const [activePageIndex, setActivePageIndex] = useState(0);
	const isLastSlide = activePageIndex === onboardings.length - 1;

	const handlePress = () => {
		if (!isLastSlide) {
			swiperRef.current?.scrollBy(1);
		} else {
			router.replace("/(auth)/login");
		}
	};

	const handleSkip = () => {
		router.replace("/(auth)/login");
	};

	return (
		<View className="flex-1 flex-col items-center justify-between gap-y-8 bg-white px-6 pt-8 pb-20">
			<TouchableOpacity onPress={handleSkip} className="self-end">
				<Text className="font-JakartaBold text-md">Skip</Text>
			</TouchableOpacity>
			<Swiper
				ref={swiperRef}
				loop={false}
				scrollEnabled={false}
				dot={<OnboardingDot isActive={false} />}
				activeDot={<OnboardingDot />}
				onIndexChanged={setActivePageIndex}
			>
				{onboardings.map((item) => (
					<OnboardingPage key={item.image} {...item} />
				))}
			</Swiper>
			<CustomButton
				onPress={handlePress}
				bgVariant="primary"
				title={`${isLastSlide ? "Next" : "Get started"}`}
			/>
		</View>
	);
};

function OnboardingDot({ isActive = true }: { isActive?: boolean }) {
	return (
		<View
			className={`mx-1 h-[4px] w-[32px] rounded-full ${isActive ? "bg-primary-500" : "bg-[#E2E8F0]"}`}
		/>
	);
}

export default Onboarding;
