import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import "../styles/globals.css";

const client = new ApolloClient({
	cache: new InMemoryCache(),
	headers: {
		Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_API_KEY}`,
	},
	uri: process.env.NEXT_PUBLIC_STEPZEN_ENDPOINT,
});

function MyApp({ Component, pageProps }) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}

export default MyApp;
