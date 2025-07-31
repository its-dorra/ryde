import { Text, View } from "react-native";
import { cn } from "~/lib/utils";

export default function OrDivider({ className }: { className?: string }) {
	return (
		<View className={cn("w-full flex-row items-center gap-x-3", className)}>
			<View className="h-[1px] grow bg-general-100" />
			<Text className="font-JakartaSemiBold text-lg">Or</Text>
			<View className="h-[1px] grow bg-general-100" />
		</View>
	);
}
