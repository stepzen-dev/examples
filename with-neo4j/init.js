const { toGraphQLTypeDefs } = require("@neo4j/introspector")
const neo4j = require("neo4j-driver");
const fs = require('fs');
const path = require("path");

require('dotenv').config()

const driver = neo4j.driver(
    process.env.NEO4J_CONNECT_URL,
    neo4j.auth.basic("neo4j", process.env.NEO4J_PASSWORD)
);

const sessionFactory = () => driver.session({ defaultAccessMode: neo4j.session.READ })

async function main() {
    fs.exists(path.join(__dirname, "neo4j"), exists => {
        if (!exists) {
            fs.mkdirSync(path.join(__dirname, "neo4j"));
        }
    });

    const typeDefs = await toGraphQLTypeDefs(sessionFactory)

    fs.writeFileSync('neo4j/schema.graphql', typeDefs)
    await driver.close();
}
main()