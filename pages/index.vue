<script setup></script>

<template>
  <div>
    <p class="test">home</p>
    <p class="test2">home</p>
    <p class="test3">home</p>
    <p class="test4">home</p>
  </div>
  <MyIcon name="open" />
  <MyIcon name="close" />
  <MyIcon />
</template>

<style lang="scss">
.test{
  font-size: $h1pc;
  background-color: red;
  font-family: $okine;
}
.test2{
  font-size: $h2pc;
  font-family: $arc;
}
.test3{
  font-size: $h3pc;
  font-family: $roashe;
}
.test4{
  font-size: $h4pc;
  font-family: $okine;
}
</style>
