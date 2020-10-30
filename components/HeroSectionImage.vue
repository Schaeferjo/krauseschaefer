<template>
  <v-parallax
    :src="imgUrl"
    :srcset="imgSourceSet"
    class="herosectionheight"
    sizes="(min-width: 960px) 100vw, 100vw"
    alt="Naturheilpraxis Krause-Schäfer Deesem (Heilpraktiker für Lohmar, Siegburg, Neunkirchen-Seelscheid)"
  ></v-parallax>
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
.herosectionheight {
  height: 45vh !important;
}
</style>
