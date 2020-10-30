<template>
  <v-parallax dark class="herosectionheight">
    <v-row>
      <v-col>
        <div id="map"></div>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  data() {
    return {
      access_token:
        'pk.eyJ1Ijoiam9zZW4iLCJhIjoiY2llcXQ4aTd0MDEzaHZ4a21jejVrcHdyMiJ9.SPCThtA30WGuMPwFxju_8w',
      map: {},
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css',
        },
      ],
    }
  },

  mounted() {
    this.createMap()
  },
  methods: {
    createMap() {
      mapboxgl.accessToken = this.access_token
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/josen/ckguz143y04u619rtnoipsogl',
        zoom: 11,
        center: [7.2776, 50.8561],
        minZoom: 2,
        maxZoom: 14,
      })
      this.map.addControl(new mapboxgl.NavigationControl())
      new mapboxgl.Marker({
        color: '#5e2368',
      })
        .setLngLat([7.2776, 50.8561])
        .addTo(this.map)
    },
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css',
        },
      ],
    }
  },
}
</script>

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
