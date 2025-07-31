import { Alert, View } from "react-native";
import { icons } from "~/assets";
import { authClient } from "~/lib/features/auth/auth-client";
import { signupFormOptions } from "~/lib/features/auth/shared-form";
import { useAppForm } from "~/lib/hooks/use-form";
import { cn } from "~/lib/utils";

interface SignupFormProps {
	className?: string;
	toggleModal: () => void;
}

const SignupForm = ({ className, toggleModal }: SignupFormProps) => {
	const form = useAppForm({
		...signupFormOptions,
		onSubmit: async ({ value }) => {
			await authClient.signUp.email({
				...value,
				fetchOptions: {
					onSuccess: () => {
						toggleModal();
					},
					onError: ({ error }) => {
						Alert.alert("Error Occurred", error.message);
					},
				},
			});
		},
	});

	return (
		<View className={cn("flex-col gap-y-3", className)}>
			<form.AppField name="name">
				{(field) => (
					<field.TextField
						label="Name"
						placeholder="Enter name"
						icon={icons.email}
					/>
				)}
			</form.AppField>
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
					title="Sign Up"
					bgVariant="primary"
				/>
			</form.AppForm>
		</View>
	);
};

export default SignupForm;
