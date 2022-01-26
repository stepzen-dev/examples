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
				url: `https://${process.env.STEPZEN_ACCOUNT}.stepzen.net/${process.env.STEPZEN_FOLDER}/${process.env.STEPZEN_NAME}/__graphql`,
				headers: {
					Authorization: `Apikey ${process.env.STEPZEN_ADMIN_KEY}`,
				},
			},
		},
	],
};
