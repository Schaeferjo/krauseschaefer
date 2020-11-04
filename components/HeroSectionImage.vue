(min-width: 1600px) 1200px, // ViewPort mindestens 1600 px, nimm Bild mit 1200px
Breite (min-width: 1400px) 1100px, // ViewPort mindestens 1400 px, nimm Bild mit
1100px Breite (min-width:1000px) 900px, // ViewPort mindestens 1000 px, nimm
Bild mit 900px Breite 100vw"

<template>
  <v-img
    :src="imgUrl"
    :srcset="imgSourceSet"
    cover
    class="hero-section"
    sizes="(min-width: 1264px) 1280px, 
            (min-width: 960px) 960px,
            (min-width:600px) 600px,  
            100vw"
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
