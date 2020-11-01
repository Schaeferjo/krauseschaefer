<template>
  <client-only>
    <l-map
      id="map"
      :zoom="13"
      :center="[50.8561, 7.2776]"
      :options="{ zoomControl: false }"
    >
      <l-control-zoom position="topright"></l-control-zoom>
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ></l-tile-layer>
      <l-marker :lat-lng="[50.8561, 7.2776]">
        <l-icon
          icon-url="/images/mapmarker.svg"
          :icon-size="[40, 50]"
          :icon-anchor="[20, 50]"
          shadow-url="/images/mapmarker_shadow.svg"
          :shadow-size="[40, 50]"
          :shadow-anchor="[4, 50]"
        ></l-icon>
      </l-marker>
    </l-map>
  </client-only>
</template>

<style lang="scss">
#map {
  width: 100%;
  height: 40vh;
  z-index: 1;
}
</style>
