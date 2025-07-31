import { Text } from "react-native";
import { cn } from "~/lib/utils";

interface ErrorMessageProps {
	message: string;
	className?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className }) => {
	return (
		<Text className={cn("text-red-500 text-sm", className)}>{message}</Text>
	);
};

export default ErrorMessage;
