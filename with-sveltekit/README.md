SvelteKit is a serverless first Svelte metaframework for building web applications with filesystem-based routing.

## Outline

* [StepZen Setup](#stepzen-setup)
  * [Deploy StepZen Endpoint](#deploy-stepzen-endpoint)
* [SvelteKit Setup](#sveltekit-setup)
  * [Install Dependencies and Start Development Server](#install-dependencies-and-start-development-server)
* [Project Structure](#project-structure)
  * [Pages](#pages)
  * [Endpoints](#endpoints)
  * [Svelte Config and Deployment Adapters](#svelte-config-and-deployment-adapters)

## StepZen Setup

Create `.gitignore`.

```bash
touch .gitignore
```

```
.DS_Store
node_modules
/build
/.svelte-kit
/package
.env
.env.*
!.env.example
config.yaml
```

Include your DEV API key in `config.yaml`.

```bash
mv stepzen/example.config.yaml stepzen/config.yaml
```

```yaml
configurationset:
  - configuration:
      name: devto_config
      devto_api_key: xxxx
```

### Deploy StepZen Endpoint

```bash
stepzen start
```

```graphql
query GET_AJCWEBDEV {
  getUser(id: "by_username", url: "ajcwebdev") {
    github_username
    id
    joined_at
    location
    name
    profile_image
    summary
    twitter_username
    type_of
    username
    website_url
  }
}
```

## SvelteKit Setup

Include your StepZen endpoint and API keys in `.env`.

```bash
mv .env.example .env
```

```
STEPZEN_ENDPOINT=
STEPZEN_API_KEY=
```

### Install Dependencies and Start Development Server

```bash
npm i
npm run dev
```

Open `localhost:3000` to see the project.

## Project Structure

```
├── src
│   ├── routes
│   │   ├── articles.json.js
│   │   ├── articles.svelte
│   │   ├── index.svelte
│   │   ├── organization.json.js
│   │   ├── organization.svelte
│   │   ├── podcasts.json.js
│   │   ├── podcasts.svelte
│   │   └── user.json.js
│   ├── app.html
│   └── global.d.ts
├── static
│   └── favicon.png
├── stepzen
│   ├── schema
│   │   ├── articles.graphql
│   │   ├── organization.graphql
│   │   ├── podcasts.graphql
│   │   └── user.graphql
│   ├── config.yaml
│   └── index.graphql
├── .env
├── .gitignore
├── .npmrc
├── jsconfig.json
├── package-lock.json
├── package.json
├── README.md
├── stepzen.config.json
└── svelte.config.js
```

### Pages

Pages typically generate HTML to display to the user (as well as any CSS and JavaScript needed for the page). By default, pages are rendered on both the client and server, though this behavior is configurable. The filename determines the route. For example, `src/routes/index.svelte` is the root of your site.

Pages are Svelte components written in `.svelte` files (or any file with an extension listed in `config.extensions`). A `.svelte` file contains three parts:
* `<script>` for JavaScript
* `<style>` for CSS
* Any markup you want to include with HTML.

```html
<!-- src/routes/index.svelte -->

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
```

`load` is similar to `getStaticProps` or `getServerSideProps` in Next.js, except that it runs on both the server and the client. The `<script context="module">` is necessary because `load` runs before the component is rendered. Code that is per-component instance should go into a second `<script>` tag.

### Endpoints

Endpoints are modules written in `.js` (or `.ts`) files that export functions corresponding to HTTP methods. Endpoints run only on the server (or when you build your site, if pre-rendering). Pages can request data from endpoints. Endpoints return JSON by default, though may also return data in other formats.

A component that defines a page or a layout can export a `load` function that runs before the component is created and receive an implementation of `fetch`. This endpoint and corresponding function can be used to:

* Access cookies on the server
* Make requests against the app's own endpoints without issuing HTTP calls
* Make a copy of the response and then send it embedded in the initial page load for hydration

```js
// src/routes/user.json.js

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
```

Since endpoints only run on the server, they can be used for requests with private API keys that can't be exposed on the client. This also means you'll need to set those API keys to environment variables.

### Svelte Config and Deployment Adapters

Svelte apps are built with [adapters](https://kit.svelte.dev/docs#adapters) for optimizing your project to deploy with different environments. `target` will hydrate the `<div id="svelte">` element in `src/app.html`.

```js
// svelte.config.js

import adapter from '@sveltejs/adapter-netlify';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      split: false
    }),
    target: '#svelte'
  }
};

export default config;
```

This project uses the [`adapter-netlify`](https://github.com/sveltejs/kit/tree/master/packages/adapter-netlify) for [Netlify](https://netlify.com).