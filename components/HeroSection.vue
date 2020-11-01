<template>
  <div>
    <div id="logo-wrap">
      <nuxt-link to="/" aria-label="Startseite">
        <div id="logo"></div>
      </nuxt-link>
    </div>
    <div class="hero-section">
      <div id="border-top"></div>
      <div id="border-right" class="border-aside"></div>
      <div id="border-left" class="border-aside"></div>
      <div id="border-bottom-wrap">
        <div id="border-bottom"></div>
      </div>
      <div v-if="['kontakt'].includes($route.name)">
        <HeroSectionMap />
      </div>
      <div v-else>
        <HeroSectionImage />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSectionMap from '~/components/HeroSectionMap.vue'
import HeroSectionImage from '~/components/HeroSectionImage.vue'

export default {
  components: {
    HeroSectionMap,
    HeroSectionImage,
  },
}
</script>

<style lang="scss">
#logo-wrap {
  width: 100%;
  max-width: 1280px;
  margin: auto;
  padding: 0 2em;
  #logo {
    position: absolute;
    width: 280px;
    height: 180px;
    z-index: 11;
    background-color: rgba(94, 35, 104, 0.95);
    background-image: url('/images/logo.svg');
    background-size: 90%;
    background-position: center 90%;
    background-repeat: no-repeat;
  }
}

.hero-section {
  position: relative;
  width: 100%;
  height: 40vh;
  overflow: hidden;
  #border-top {
    position: absolute;
    width: 100%;
    height: 20px;
    top: 0;
    z-index: 10;
    background-image: url('/images/border_top.svg');
    background-size: auto 10px;
    background-repeat: repeat-x;
  }
  .border-aside {
    position: absolute;
    width: 20px;
    height: 40vh;
    top: 0;
    z-index: 10;
    background-image: url('/images/border_aside.svg');
    background-size: 10px auto;
    background-position: 0 100%;
    background-repeat: repeat-y;
  }
  #border-right {
    right: 0;
    transform: rotate(180deg);
  }
  #border-left {
    left: 0;
  }
  #border-bottom-wrap {
    position: absolute;
    width: 100%;
    height: 50px;
    bottom: 0;
    z-index: 10;
    #border-bottom {
      position: relative;
      width: 100%;
      max-width: 1280px;
      height: 50px;
      margin: auto;
      left: 2em;
      background-image: url('/images/border_bottom.svg');
      &::before {
        content: '';
        width: 9999px;
        height: 50px;
        background-color: #fff;
        display: block;
        margin-left: -9999px;
        position: absolute;
      }
      &::after {
        content: '';
        width: 9999px;
        height: 50px;
        margin-left: 280px;
        top: 0;
        background-color: #fff;
        display: block;
        position: absolute;
      }
    }
  }
}

@media only screen and (max-width: 959px) {
  .hero-section {
    height: 35vh !important;
  }
  #logo-wrap {
    padding: 0 1em;
    #logo {
      height: 120px;
    }
  }
}

@media only screen and (max-width: 599px) {
  .hero-section {
    height: 28vh !important;
  }
  #logo-wrap {
    padding: 0 1em;
    #logo {
      height: 80px;
      background-size: 70%;
    }
  }
}
</style>
