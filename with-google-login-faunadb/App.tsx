import {
	ApolloClient,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from "@apollo/client";
import { BlurView } from 'expo-blur';
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from './screens/LoginScreen';
import UserScreen from "./screens/UserScreen";

const Stack = createStackNavigator();

const client = new ApolloClient({
	link: createHttpLink({
		credentials: "same-origin",
		headers: {
			Authorization: `Apikey {{ admin_key }}`,
		},
		uri: "https://example.stepzen.net/demo/native-login/__graphql",
	}),
	cache: new InMemoryCache(),
});

export default function App() {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<ApolloProvider client={client}>
				<SafeAreaProvider>
					<NavigationContainer>
						<Stack.Navigator initialRouteName="Login">
							<Stack.Screen
								name=" "
								component={LoginScreen}
								options={{
									headerTransparent: true,
									headerTitle: "Login Demo",
									headerBackground: () => (
										<BlurView tint="light" intensity={100} />
										),
								}}
							/>
							<Stack.Screen
								name="Home"
								component={UserScreen}
								options={{
									title: "Golf-Austin",
									headerTransparent: true,
									headerTitleAlign: "center",

									}}
							/>
						</Stack.Navigator>
					</NavigationContainer>
				</SafeAreaProvider>
			</ApolloProvider>
		);
	}
}