import {
	Text,
	TouchableOpacity,
	type TouchableOpacityProps,
} from "react-native";

export interface CustomButtonProps extends TouchableOpacityProps {
	title: string;
	bgVariant: "primary" | "secondary" | "danger" | "success" | "outline";
	iconLeft?: React.ReactNode;
	iconRight?: React.ReactNode;
}

const getBgVariantStyle = (variant: CustomButtonProps["bgVariant"]) => {
	switch (variant) {
		case "primary":
			return "bg-primary-500 disabled:bg-primary-300";
		case "secondary":
			return "bg-gray-500 disabled:bg-gray-300";
		case "danger":
			return "bg-red-500 disabled:bg-red-300";
		case "success":
			return "bg-green-500 disabled:bg-green-300";
		case "outline":
			return "bg-transparent border-neutral-300 border-[0.5px] disabled:border-neutral-200";
	}
};

const getTextColorStyle = (variant: CustomButtonProps["bgVariant"]) => {
	switch (variant) {
		case "primary":
			return "text-white";
		case "secondary":
			return "text-white";
		case "danger":
			return "text-white";
		case "success":
			return "text-white";

		case "outline":
			return "text-black";

		default:
			return "text-white";
	}
};

export default function CustomButton({
	title,
	bgVariant,
	iconLeft,
	iconRight,
	className,
	...props
}: CustomButtonProps) {
	return (
		<TouchableOpacity
			className={`w-full flex-row items-center justify-center gap-x-4 rounded-full py-6 ${getBgVariantStyle(bgVariant)} ${className}`}
			{...props}
		>
			{iconLeft && iconLeft}
			<Text className={`font-bold text-2xl ${getTextColorStyle(bgVariant)}`}>
				{title}
			</Text>
			{iconRight && iconRight}
		</TouchableOpacity>
	);
}
