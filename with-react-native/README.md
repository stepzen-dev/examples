# StepZen Example: `with-react-native`

## Introduction

This project builds a GraphQL API with Firebase connected to your NextJS dashboard, using StepZen.

## Getting Started

You'll need to create a StepZen account first. Once you've got that set up, git clone this repository onto your machine and open the working directory:

```bash
git clone https://github.com/stepzen-dev/examples.git
cd examples/with-react-native
```

To install Expo:

```bash
npm install -g expo-cli
```

Manually add your admin key and uri in the App.tsx. Still working on adding `.env` variables to the build and development environments:

```jsx
// App.tsx

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

## Install Dependencies and Start Development Server

Install the dependencies:

```bash
npm i
npm start
```

Download the expo App on your phone and scan the QR code or open it in your browser

## Run StepZen

Open your terminal and [install the StepZen CLI](https://stepzen.com/docs/quick-start):

```bash
npm install -g stepzen
```

You need to login here using the command:

```bash
stepzen login
```

After you've installed the CLI and logged in, run:

```bash
stepzen start
```

In you terminal the endpoint at which your GraphQL API is deployed is logged. A proxy of the GraphiQL playground is available at your suggested endpoint (in example `http://localhost:5001/api/with-react-native`), which you can use to explore the GraphQL API.

## Another way to Integrate Stepzen with React

1.Download the StepZEN SDK from the website.

2.In your React project, create a new folder called StepZEN.

3.Copy the contents of the StepZEN SDK into the StepZEN folder.

4.In your code editor, open the index.js file in the StepZEN folder.

5.Import the StepZEN SDK into your React project.

```bash
import StepZEN from './stepzen-sdk/index.js';
```
6.Initialize the StepZEN SDK in your React project.
```bash
StepZEN.init({

appKey: 'YOUR_APP_KEY',

});
```

7.In your code editor, open the App.js file in the src folder.

8.Import the StepZEN SDK into the App.js file.
```bash
import StepZEN from '../StepZEN/index.js';
```
9.Initialize the StepZEN SDK in the App.js file.
```bash
StepZEN.init({

appKey: 'YOUR_APP_KEY',

});
```
10.Create a new component called StepZENButton.
```bash
import React from 'react';

import StepZEN from '../StepZEN/index.js';

class StepZENButton extends React.Component {

constructor(props) {

super(props);

this.state = {

isLoading: false,

};

}

render() {

return (

<button onClick={this.handleClick}>

{this.state.isLoading ? 'Loading...' : 'Click Me'}

</button>

);

}

handleClick = async () => {

this.setState({ isLoading: true });

try {

const response = await StepZEN.sendMessage({

text: 'Hello World!',

});

console.log(response);

} catch (error) {

console.error(error);

} finally {

this.setState({ isLoading: false });

}

};

}

export default StepZENButton;
```
11.In the App.js file, import the StepZENButton component.
```bash
import StepZENButton from './StepZENButton.js';
```
12.Add the StepZENButton component to the App.js file.

<StepZENButton />

13.Save the App.js file.

14.Open the index.html file in the public folder.

15.Add the StepZEN SDK script tag to the index.html file.

```bash
<script src="/stepzen-sdk/index.js"></script>
```
16.Save the index.html file.

17.Start the React development server.

```bash 
npm start
```
18.Open http://localhost:3000  in your web browser.

19.Click the Click Me button.

20.View the console to see the StepZEN SDK response.

## Learn More

You can learn more in the [StepZen documentation](https://stepzen.com/docs). Questions? Head over to [Discord](https://discord.com/invite/9k2VdPn2FR) or [GitHub Discussions](https://github.com/stepzen-dev/examples/discussions) to ask questions.
