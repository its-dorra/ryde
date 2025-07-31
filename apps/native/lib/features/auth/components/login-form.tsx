import { router } from "expo-router";
import { Alert, View } from "react-native";
import { icons } from "~/assets";
import { authClient } from "~/lib/features/auth/auth-client";
import { loginFormOptions } from "~/lib/features/auth/shared-form";
import { useAppForm } from "~/lib/hooks/use-form";
import { cn } from "~/lib/utils";

interface LoginFormProps {
	className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
	const form = useAppForm({
		...loginFormOptions,
		onSubmit: async ({ value: values }) => {
			await authClient.signIn.email({
				...values,
				fetchOptions: {
					onSuccess: () => {
						form.reset();
						router.replace("/(tabs)");
					},
					onError: async (ctx) => {
						const error = ctx.error;

						if (error.status === 403) {
							return Alert.alert(
								"Error occurred",
								"Please verify your email address",
							);
						}

						Alert.alert("Error occurred", error.message);
					},
				},
			});
		},
	});

	return (
		<View className={cn("flex-col gap-y-4", className)}>
			<form.AppField name="email">
				{(field) => (
					<field.TextField
						label="Email"
						placeholder="dorra@codes.io"
						icon={icons.email}
					/>
				)}
			</form.AppField>
			<form.AppField name="password">
				{(field) => (
					<field.TextField
						label="Password"
						placeholder="Enter password"
						secureTextEntry
						icon={icons.lock}
					/>
				)}
			</form.AppField>

			<form.AppForm>
				<form.SubscribeButton
					className="mt-8"
					title="Login"
					bgVariant="primary"
				/>
			</form.AppForm>
		</View>
	);
};

export default LoginForm;
