<template>
  <Query />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createClient, provideClient } from '@urql/vue'
import Query from './Query.vue'


const client = createClient({
  url: 'https://graphql7d.stepzen.net/api/7d9fb86871b43af393d6c2aa8840cf16/__graphql',
});

export default defineComponent({
  components: { Query },
  setup() {
    provideClient(client);
  }
})
</script>
