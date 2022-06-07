/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import EditTodoScreen from "../screens/EditTodoScreen";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
	return (
		<NavigationContainer theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<RootNavigator />
		</NavigationContainer>
	);
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function RootNavigator() {
	return (
		/* @ts-ignore */
		<Stack.Navigator>
			<Stack.Screen
				name="Root"
				component={BottomTabNavigator}
				options={{ headerShown: false }}
			/>
			<Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
		</Stack.Navigator>
	);
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
	const colorScheme = useColorScheme();

	return (
		/* @ts-ignore */
		<BottomTab.Navigator
			initialRouteName="TabOne"
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme].tint,
			}}
		>
			<BottomTab.Screen
				name="TabOne"
				component={TabOneScreen}
				options={({ navigation }) => ({
					title: "Tab One",
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				})}
			/>

			<BottomTab.Screen
				name="TabTwoNavigator"
				component={TabTwoNavigatorScreen}
				options={{
					title: "Tab Two",
					headerShown: false,
					tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
				}}
			/>
		</BottomTab.Navigator>
	);
}

const TabTwoNavigator = createNativeStackNavigator();

const TabTwoNavigatorScreen = () => {
	return (
		/* @ts-ignore */
		<TabTwoNavigator.Navigator initialRouteName="TabTwo">
			<TabTwoNavigator.Screen
				name="TabTwo"
				component={TabTwoScreen}
				options={{
					title: "TabTwo",
					headerShown: true,
				}}
			/>
			<TabTwoNavigator.Screen
				name="EditTodoScreen"
				component={EditTodoScreen}
				options={{
					title: "Edit Screen",
					headerShown: true,
				}}
			/>
		</TabTwoNavigator.Navigator>
	);
};

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	/* @ts-ignore */
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
