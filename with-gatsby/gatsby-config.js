require("dotenv").config();

module.exports = {
	siteMetadata: {
		title: "My Gatsby Site",
	},
	plugins: [
		{
			resolve: "gatsby-source-graphql",
			options: {
				typeName: "StepZen",
				fieldName: "stepzen",
				url: process.env.STEPZEN_ENDPOINT,
				headers: {
					Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
				},
			},
		  },
	],
};
