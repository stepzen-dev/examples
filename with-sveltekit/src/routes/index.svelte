<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const response = await fetch('/user.json', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      return {
        props: { ...(await response.json()) }
      }
    } catch (error) {
      console.error(`Error in load function for /: ${error}`)
    }
  }
</script>

<script>
  export let data
</script>

<main class="container">
  <h2>{data.getUser.name}</h2>
  <h3>{data.getUser.github_username} - {data.getUser.location}</h3>
  <p>{data.getUser.summary}</p>
  <img src="{data.getUser.profile_image}" alt="profile pic">

  <h3>Most Recent Articles</h3>
  {#each data.getArticles as { title, slug }}
    <ul>
      <a target="_blank" href="https://dev.to/ajcwebdev/{slug}">
        <li>{title}</li>
      </a>
    </ul>
  {/each}

  <h3>Most Recent Podcasts</h3>
  {#each data.getPodcastEpisodes as {
    title, path
  }}
    <ul>
      <a target="_blank" href="https://dev.to/{path}">
        <li>{title}</li>
      </a>
    </ul>
  {/each}
</main>