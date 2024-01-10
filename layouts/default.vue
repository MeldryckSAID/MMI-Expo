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
    margin: rem(50) auto;
    max-width: rem(1400);
    min-height: 100vh;
  }
}
</style>