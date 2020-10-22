<template>
  <v-app dark>
    <v-row>
      <v-col cols="6">
        <v-card flat>
          <PVULogoDark />
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <NuxtLink to="/">Home page</NuxtLink>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import PVULogoDark from '~/components/PVULogoDark.vue'

export default {
  components: {
    PVULogoDark,
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
