<template>
  <v-app dark>
    <HeroSection />

    <v-main>
      <v-container class="content-wrap">
        <v-row>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="5"
            lg="4"
            xl="4"
            class="px-3 py-0"
          >
            <Navigation />
          </v-col>
          <v-col
            cols="12"
            xs="12"
            sm="12"
            md="7"
            lg="8"
            xl="8"
            class="px-8 py-0"
          >
            <nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="#ccc" class="pa-0">
      <div class="footer-wrap">
        <div class="footer">
          <nuxt-link to="/impressum">Impressum</nuxt-link> |
          <nuxt-link to="/datenschutz">Datenschutz</nuxt-link> |
          <span class="font-weight-bold"
            >Copyright {{ new Date().getFullYear() }}</span
          >
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
  max-width: 1264px;
  padding-top: 0 !important;
  padding-bottom: 3em !important;
}

.v-footer {
  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 10px;
    background-image: url('/images/border_top.svg');
    background-size: auto 10px;
    background-repeat: repeat-x;
  }
  .footer-wrap {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 0 2em;
    .footer {
      padding: 1em;
      &::before {
        content: '';
        display: inline-block;
        position: absolute;
        width: 30px;
        height: 30px;
        margin-left: 103px;
        top: -15px;
        background-color: #fff;
        -webkit-transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        transform: rotate(45deg);
      }
    }
  }
}

@media only screen and (max-width: 599px) {
  .content-wrap {
    -moz-hyphens: auto !important;
    -o-hyphens: auto !important;
    -ms-hyphens: auto !important;
    hyphens: auto !important;
  }
}
</style>
