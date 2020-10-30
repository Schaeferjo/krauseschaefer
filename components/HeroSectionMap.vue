<template>
  <v-parallax dark class="herosectionheight">
    <v-row>
      <v-col>
        <div id="map"></div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<style lang="scss">
.herosectionheight,
#map {
  width: 100%;
  height: 45vh;
}

.v-parallax__content {
  padding: 0 !important;
}
</style>
