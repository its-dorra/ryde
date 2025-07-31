import { createFormHook } from "@tanstack/react-form";
import SubscribeButton from "~/lib/components/subscribe-button";
import TextField from "~/lib/components/text-field";
import { fieldContext, formContext } from "~/lib/hooks/form-context";

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
	},
	formComponents: {
		SubscribeButton,
	},
	fieldContext,
	formContext,
});
