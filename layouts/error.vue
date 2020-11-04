<template>
  <v-app dark>
    <h1>Fehler</h1>
    <h2 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h2>
    <h2 v-else>
      {{ otherError }}
    </h2>
    <p>
      Da ist etwas schief gelaufen.
      <br />
      Möchten Sie zurück zur <NuxtLink to="/">Startseite</NuxtLink>?
    </p>
  </v-app>
</template>

<script>
export default {
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
