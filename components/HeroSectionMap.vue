<template>
  <v-parallax dark class="herosectionheight">
    <v-row>
      <v-col>
        <client-only>
          <l-map id="map" :zoom="15" :center="[50.8561, 7.2776]">
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <l-marker :lat-lng="[50.8561, 7.2776]"></l-marker>
          </l-map>
        </client-only>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<style lang="scss">
.v-parallax__content {
  padding: 0 !important;
}

#map {
  width: 100%;
  height: 45vh;
}
</style>
