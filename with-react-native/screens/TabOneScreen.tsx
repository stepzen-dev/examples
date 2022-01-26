import * as React from "react";
import { StyleSheet } from "react-native";
import { fromPromise, useQuery } from "@apollo/client";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { GET_IMAGES } from "../queries/content.queries";

export default function TabOneScreen() {
	const { data, error, loading } = useQuery(GET_IMAGES, {});

	console.log("data", data);
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Tab One Hot</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<EditScreenInfo path="/screens/TabOneScreen.tsx" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
