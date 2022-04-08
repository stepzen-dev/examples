<template>
  <div v-if="fetching">Loading...</div>

  <div v-else-if="error">
    Error: {{ error }}
  </div>

  <div v-else>
    <ul v-if="data">
      <li v-for="article of data.devto_getArticles">{{ article.canonical_url }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery, gql } from '@urql/vue'

const getArticles = gql`
query DevToQueries {
  devto_getArticles(username: "cerchie") {
    canonical_url
    comments_count
    created_at
    flare_tag {
      bg_color_hex
      text_color_hex
    }
    organization {
      name
      profile_image
    }
  }
  }
`

export default defineComponent({
  setup() {
    const result = useQuery({
      query: getArticles
    });
console.log('DATA',result.data)
    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
    };
  }
})
</script>