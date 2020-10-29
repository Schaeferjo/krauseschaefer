<template>
  <div id="map"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  data() {
    return {
      access_token:
        'pk.eyJ1Ijoiam9zZW4iLCJhIjoiY2llcXQ4aTd0MDEzaHZ4a21jejVrcHdyMiJ9.SPCThtA30WGuMPwFxju_8w',
      map: {},
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
        style: 'mapbox://styles/josen/ckg6n0brn0rs919qo99k4rx0x',
        zoom: 9,
        center: [7.2504221, 47.1272345],
        minZoom: 2,
        maxZoom: 12,
      })
      this.map.addControl(new mapboxgl.NavigationControl())
      new mapboxgl.Marker({
        color: '#305596',
      })
        .setLngLat([7.2504221, 47.1272345])
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
