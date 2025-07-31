import type { ReactNode } from "react";
import {
	ErrorBoundary as ErrorBoundaryWrapper,
	type FallbackProps,
} from "react-error-boundary";
import { Text } from "react-native";

function ErrorFallback({ error }: FallbackProps) {
	return <Text className="text-red-500">{error.message}</Text>;
}

export default function ErrorBoundary({ children }: { children: ReactNode }) {
	return (
		<ErrorBoundaryWrapper fallbackRender={ErrorFallback}>
			{children}
		</ErrorBoundaryWrapper>
	);
}
