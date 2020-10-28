<template>
  <div>
    <div id="logo-wrap">
      <nuxt-link to="/">
        <div id="logo"></div>
      </nuxt-link>
    </div>
    <div id="hero-bg-image">
      <div id="border-top"></div>
      <div id="border-right" class="border-aside"></div>
      <div id="border-left" class="border-aside"></div>
      <div id="border-bottom-wrap">
        <div id="border-bottom"></div>
      </div>
      <v-parallax
        :src="imgUrl"
        :srcset="imgSourceSet"
        sizes="(min-width: 960px) 100vw, 100vw"
        alt="Naturheilpraxis Krause-Schäfer Deesem (Heilpraktiker für Lohmar, Siegburg, Neunkirchen-Seelscheid)"
      ></v-parallax>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    imgUrl() {
      return `/images/bg_large/${this.imgName}`
    },
    imgSourceSet() {
      return `/images/bg_large/${this.imgName} 1280w, /images/bg_medium/${this.imgName} 600w`
    },
    imgName() {
      const mapping = {
        index: 'bg_start.jpg',
        therapien: 'bg_therapien.jpg',
      }
      return mapping[this.$route.name] || 'bg_start.jpg'
    },
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
    background-image: url('../static/images/logo.svg');
    background-size: 90%;
    background-position: center 90%;
    background-repeat: no-repeat;
  }
}

#hero-bg-image {
  position: relative;
  width: 100%;
  height: 30vh;
  overflow: hidden;
  #border-top {
    position: absolute;
    width: 100%;
    height: 20px;
    top: 0;
    z-index: 10;
    background-image: url('../static/images/border_top.svg');
    background-size: auto 10px;
    background-repeat: repeat-x;
  }
  .border-aside {
    position: absolute;
    width: 20px;
    height: 45vh;
    top: 0;
    z-index: 10;
    background-image: url('../static/images/border_aside.svg');
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
      background-image: url('../static/images/border_bottom.svg');
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
  #hero-bg-image {
    height: 20vh;
    border: 30px solid red;
  }
}
</style>
