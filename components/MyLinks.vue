<template>
  <nuxt-link :to="to" v-if="to" class="links" :class="{ reversed: isReversed }">
    <slot></slot>
    <MyIcon name="line" />
  </nuxt-link>

  <button v-else class="links" :class="{ reversed: isReversed }">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.links {
  color: $b-black;
  text-decoration: none;
  font-family: $roashe;
  font-size: $menupc;
  display: flex;
  flex-direction: column;
  width: fit-content;
  justify-content: center;
  align-items: flex-start;

  &.reversed {
    display: flex;
    align-items: flex-end;
  }
}
.line {
  width: max-content;
  display: flex;
  justify-items: center;
  align-items: center;
}

@media (max-width: 425px) {
  .links {
    font-size: $menutel;
  }
}
@media (min-width: 426px) {
  .links {
    width: 600px;
  }
}
</style>

<script setup>
const props = defineProps({
  to: String,
  isReversed: Boolean,
});
</script>
