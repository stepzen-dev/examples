import 'dotenv/config'

const { STEPZEN_ENDPOINT, STEPZEN_API_KEY } = process.env

export async function post() {
  const response = await fetch(STEPZEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `apikey ${STEPZEN_API_KEY}`
    },
    body: JSON.stringify({
      query: `{
        getUser(id: "by_username", url: "ajcwebdev") {
          name
          summary
          github_username
          location
          profile_image
        }
        getArticles(username: "ajcwebdev", per_page: 5) {
          title
          description
          readable_publish_date
          slug
        }
        getPodcastEpisodes(username: "fsjampodcast", per_page: 5) {
          title
          path
        }
      }`
    })
  })

  const data = await response.json()
  
  if (data) {
    return {
      body: data
    }
  }
}