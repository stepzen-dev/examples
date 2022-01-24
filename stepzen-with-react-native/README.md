# react-native-stepzen

Install Expo
```
npm install -g expo-cli
or 
yarn global add expo-cli
```

Clone the repo
```
git clone git@github.com:stepzen-samples/react-native-stepzen.git
```

Start up StepZen
```
$ cd stepzen
$ stepzen start
```


Manually add your admin key and uri in the App.tsx. Still working on adding .env variables to the build and development environments
```
const client = new ApolloClient({
	link: createHttpLink({
		credentials: "same-origin",
		headers: {
			Authorization: `Apikey {add_key}`,
		},
		uri: "{add_uri}",
	}),
	cache: new InMemoryCache(),
});
```

Start up the development environment
```
npm start
or 
yarn start
```

Download the expo App on your phone and scan the QR code or open it in your browser
