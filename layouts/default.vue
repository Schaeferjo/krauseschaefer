<template>
  <v-app dark>
    <HeroBg></HeroBg>

    <v-main>
      <v-container class="content_wrap">
        <v-row>
          <v-col cols="12" xs="12" sm="4" md="4" lg="4" xl="4" class="pa-6">
            <Navigation></Navigation>
          </v-col>
          <v-col cols="12" xs="12" sm="8" md="8" lg="8" xl="8" class="pa-6">
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="#fff">
      <span>&copy; {{ new Date().getFullYear() }}</span> | Datenschutz |
      Impressum
    </v-footer>
  </v-app>
</template>

<script>
import HeroBg from '~/components/HeroBg.vue'
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    HeroBg,
    Navigation,
  },
  data() {
    return {
      items: [
        {
          title: 'Start',
          to: '/',
        },
        {
          title: 'Therapien',
          to: '/therapien',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.v-main__wrap {
  display: flex;
  flex-direction: row;
}

.content_wrap {
  max-width: 1280px;
  margin: auto;
}
</style>
