import CustomButton, {
	type CustomButtonProps,
} from "~/lib/components/custom-button";
import { useFormContext } from "~/lib/hooks/form-context";

export default function SubscribeButton({
	onPress,
	...props
}: CustomButtonProps) {
	const form = useFormContext();

	return (
		<form.Subscribe selector={(state) => [state.isSubmitting, state.canSubmit]}>
			{([isSubmitting, canSubmit]) => (
				<CustomButton
					onPress={() => {
						form.handleSubmit();
					}}
					disabled={isSubmitting || !canSubmit}
					{...props}
				/>
			)}
		</form.Subscribe>
	);
}
