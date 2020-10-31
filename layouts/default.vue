<template>
  <v-app dark>
    <HeroSection />

    <v-main>
      <v-container class="content-wrap">
        <v-row>
          <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="px-3">
            <Navigation />
          </v-col>
          <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="px-8">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="#fff" class="pa-0">
      <div class="footer-wrap">
        <div class="footer">
          <nuxt-link to="/datenschutz"> Datenschutz </nuxt-link><br />
          <nuxt-link to="/impressum"> Impressum </nuxt-link>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import HeroSection from '~/components/HeroSection.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    HeroSection,
    Navigation,
  },
}
</script>

<style lang="scss">
.content-wrap {
  max-width: 1280px;
}

.footer-wrap {
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 0 2em;
  .footer {
    width: 280px;
    background-color: #5e2368;
    padding: 1em;
  }
}
</style>
