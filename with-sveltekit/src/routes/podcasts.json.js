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
        getPodcastEpisodes(username: "fsjampodcast", per_page: 100) {
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