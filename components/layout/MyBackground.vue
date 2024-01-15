<template>
  <div class="background">
    <span></span>
  </div>
</template>
<style lang="scss" setup>
.background {
  position: fixed;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: auto;
  top: 0;
  left: 0;
  background: #cdcccc;
  filter: blur(3px);
  overflow: hidden;
  z-index: -20;
  &::after{
    content: "";
    position: absolute;
    width: 500px;
    height: 400px;
    border-radius: 50%;
    rotate: -45deg;
    background: white;
    filter: blur(60px);
    z-index: -10;
  }
  &::before{
    content: "";
    position: absolute;
    width: 250px;
    height: 300px;
    border-radius: 50%;
    rotate: 45deg;
    background: white;
    filter: blur(60px);
    z-index: -10;
    right: 0;
    top: 150px;
  }
  span{
    content: "";
    position: absolute;
    width: 250px;
    height: 300px;
    border-radius: 50%;
    rotate: 45deg;
    background: white;
    filter: blur(60px);
    z-index: -10;
    right: 20%;
    top: 350px;
  }
}


</style>
