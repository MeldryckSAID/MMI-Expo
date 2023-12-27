<script setup></script>
<template>
  <MyHeader class="layout__header" />
  <main class="layout__page">
    <NuxtPage />
  </main>
  <MyFooter class="layout__footer" />
</template>

<style lang="scss">
.layout {
  &__header {
    $topGap: rem(20);
    @include medium-up {
      $topGap: rem(50);
    }
    z-index: 100;
    max-width: rem(1400);
    margin-inline: auto;
    margin-top: $topGap;
  }
  &__page {
    width: 100vw;
    margin:  rem(50) auto;
    max-width: rem(1400);
    min-height: 100vh;
  }
}
</style>
