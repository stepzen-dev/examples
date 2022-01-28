import 'dotenv/config';

const { STEPZEN_ENDPOINT, STEPZEN_API_KEY } = process.env;

export async function post() {
  const response = await fetch(STEPZEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `apikey ${STEPZEN_API_KEY}`,
    },
    body: JSON.stringify({
      query: `{
        getOrganization(username: "stepzen") {
          name
          summary
          username
          url
          twitter_username
          profile_image
        }
        getOrgUsers(username: "stepzen") {
          name
          username
          summary
          location
          website_url
        }
        getOrgArticles(username: "stepzen") {
          title
          description
          tags
          readable_publish_date
          canonical_url
          cover_image
          public_reactions_count
          slug
          url
        }
      }`,
    }),
  });

  const data = await response.json();

  if (data) {
    return {
      body: data,
    };
  }
}
