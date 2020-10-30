<template>
  <v-parallax dark class="herosectionheight">
    <v-row>
      <v-col>
        <client-only>
          <l-map id="map" :zoom="15" :center="[50.8561, 7.2776]">
            <l-tile-layer
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            ></l-tile-layer>
            <l-marker :lat-lng="[50.8561, 7.2776]">
              <l-icon
                icon-url="/images/mapmarker.svg"
                :icon-size="[50, 66]"
                :icon-anchor="[25, 66]"
                shadow-url="/images/mapmarker_shadow.svg"
                :shadow-size="[50, 66]"
                :shadow-anchor="[5, 66]"
              ></l-icon>
            </l-marker>
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
