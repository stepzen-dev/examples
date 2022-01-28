<script context="module">
  export const load = async ({ fetch }) => {
    try {
      const response = await fetch('/organization.json', {
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
  <h2>{data.getOrganization.name}</h2>
  <h3>Users</h3>
  {#each data.getOrgUsers as {
    name, username, summary, website_url
  }}
    <div>
      <ul>
        <li><a target="_blank" href={website_url}>{name}</a> - {username}</li>
        <p>{summary}</p>
      </ul>
    </div>
  {/each}

  {#each data.getOrgArticles as {
    title, description, readable_publish_date, cover_image, tags, slug
  }}
    <div>
      <a target="_blank" href="https://dev.to/stepzen/{slug}">
        <h2>{title}</h2>
      </a>
      <h3>{readable_publish_date} - {tags}</h3>
      <img src={cover_image} width="500" style="display: block; margin: auto;">
      <p>{description}</p>
    </div>
  {/each}
</main>