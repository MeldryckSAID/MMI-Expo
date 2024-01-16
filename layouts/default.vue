<script setup></script>
<template>
  <MyHeader class="layout__header" />
  <main class="layout__page">
    <NuxtPage />
    <MyBackground />
  </main>
  <MyFooter class="layout__footer" />
</template>

<style lang="scss">
.layout {
  &__header {
    z-index: 100;
    margin-inline: auto;
  }
  &__page {
    width: 100vw;
    display: grid;
    justify-content: center;
    min-height: 100vh;
    overflow-x: hidden;
  }
}
</style>