<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const response = await fetch('/podcasts.json', {
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
  <h2>Podcasts</h2>
  {#each data.getPodcastEpisodes as {
    title, path
  }}
    <div>
      <a target="_blank" href="https://dev.to/{path}">
        <h2>{title}</h2>
      </a>
    </div>
  {/each}
</main>