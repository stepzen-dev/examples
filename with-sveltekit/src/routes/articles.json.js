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
        getArticles(username: "ajcwebdev", per_page: 100) {
          title
          description
          readable_publish_date
          cover_image
          tags
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
