import { Tabs } from "expo-router";
import React from "react";

const Layout = () => {
	return (
		<Tabs>
			<Tabs.Screen name="index" options={{ headerShown: false }} />
		</Tabs>
	);
};
export default Layout;
