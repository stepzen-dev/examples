const { Neo4jGraphQL } = require("@neo4j/graphql");
const { ApolloServer, gql } = require("apollo-server");
const neo4j = require("neo4j-driver");
const { readFileSync } = require('fs')

require('dotenv').config()

const driver = neo4j.driver(
    process.env.NEO4J_CONNECT_URL,
    neo4j.auth.basic("neo4j", process.env.NEO4J_PASSWORD)
);

const typeDefs = readFileSync(require.resolve('./neo4j/schema.graphql')).toString('utf-8')

const neoSchema = new Neo4jGraphQL({ typeDefs, driver });

neoSchema.getSchema().then((schema) => {
    const server = new ApolloServer({
        schema,
    });

    server.listen().then(({ url }) => {
        console.log(`🚀 Server ready at ${url}`);
    });
})