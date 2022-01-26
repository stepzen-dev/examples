import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "../styles/globals.css";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_ADMIN_KEY}`,
	},
	uri: `https://${process.env.NEXT_PUBLIC_STEPZEN_ACCOUNT}.stepzen.net/${process.env.NEXT_PUBLIC_STEPZEN_FOLDER}/${process.env.NEXT_PUBLIC_STEPZEN_NAME}/__graphql`,
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
