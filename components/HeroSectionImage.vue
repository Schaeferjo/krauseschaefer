<template>
  <v-img
    :src="imgUrl"
    :srcset="imgSourceSet"
    class="hero-section"
    sizes="(min-width: 600px) 100vw, 100vw, 100vw"
    alt="Naturheilpraxis Krause-Schäfer Deesem (Heilpraktikerin für Lohmar, Siegburg, Neunkirchen-Seelscheid)"
  ></v-img>
</template>

<script>
export default {
  computed: {
    imgUrl() {
      return `/images/bg_small/${this.imgName}`
    },
    imgSourceSet() {
      return `/images/bg_large/${this.imgName} 1280w, /images/bg_medium/${this.imgName} 960w, /images/bg_small/${this.imgName} 600w`
    },
    imgName() {
      const mapping = {
        index: 'bg_start.jpg',
        therapien: 'bg_therapien.jpg',
        kurse: 'bg_kurse.jpg',
        uebermich: 'bg_ueber_mich.jpg',
        impressum: 'bg_impressum.jpg',
        datenschutz: 'bg_datenschutz.jpg',
      }
      return mapping[this.$route.name] || 'bg_start.jpg'
    },
  },
}
</script>

<style lang="scss">
.hero-section {
  height: 100%;
  max-height: 40vh;
}
</style>
