<template>
  <div id="hero-bg-image">
    <div id="border-top"></div>
    <div id="border-right" class="border-aside"></div>
    <div id="border-left" class="border-aside"></div>
    <div id="border-bottom"></div>
    <v-parallax src="/images/bg_start.jpg"></v-parallax>
  </div>
</template>

<style lang="scss">
#hero-bg-image {
  position: relative;
  width: 100%;
  height: 42vh;
  overflow: hidden;
  #border-top {
    width: 100%;
    height: 20px;
    display: block;
    position: absolute;
    top: 0;
    z-index: 10;
    background-image: url('../static/images/border_top.svg');
    background-size: auto 10px;
    background-repeat: repeat-x;
  }
  .border-aside {
    width: 20px;
    height: 45vh;
    display: block;
    position: absolute;
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
  #border-bottom {
    width: 280px;
    height: 50px;
    display: block;
    position: absolute;
    left: 40px;
    bottom: 0;
    z-index: 10;
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
</style>
