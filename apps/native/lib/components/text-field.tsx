import { useStore } from "@tanstack/react-form";
import React, { useState } from "react";
import {
	Image,
	Text,
	TextInput,
	type TextInputProps,
	TouchableOpacity,
	View,
} from "react-native";
import { icons } from "~/assets";
import ErrorMessage from "~/lib/components/error-message";
import { useFieldContext } from "~/lib/hooks/form-context";

interface TextFieldProps extends TextInputProps {
	label: string;
	placeholder: string;
	icon: any;
}

export default function TextField({
	label,
	icon,
	secureTextEntry,
	...props
}: TextFieldProps) {
	const field = useFieldContext<string>();
	const errors = useStore(field.store, (state) => state.meta.errors);
	const [showPassword, setShowPassword] = useState(false);

	return (
		<View className="w-full flex-col gap-y-2">
			<Text className="font-semibold text-2xl">{label}</Text>
			<View className="w-full flex-row items-center gap-2 rounded-full bg-gray-100 px-6 py-3 focus:border-[1px] focus:border-primary-500">
				<Image source={icon} className="size-8" resizeMode="contain" />
				<TextInput
					className="flex-1 rounded-full text-left font-JakartaSemiBold text-[15px]"
					value={field.state.value}
					onChangeText={field.handleChange}
					onBlur={field.handleBlur}
					secureTextEntry={secureTextEntry ? !showPassword : false}
					{...props}
				/>
				{secureTextEntry && (
					<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
						<Image
							source={showPassword ? icons.eyecross : icons.eyecross}
							className="size-8"
							resizeMode="contain"
						/>
					</TouchableOpacity>
				)}
			</View>
			{errors.map((error) => (
				<ErrorMessage
					key={error.message}
					message={error.message}
					className="mt-1"
				/>
			))}
		</View>
	);
}
