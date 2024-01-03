<template>
  <nuxt-link
    :to="to"
    v-if="to"
    class="button"
  >
    <slot></slot>
  </nuxt-link>

  <button
    v-else
    class="button"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
.button {
  position: relative;
  border: 2px solid $D;
  border-radius: rem(15);
  display: inline-grid;
  place-content: center;
  font-family: $secondary-font;
  font-size: 15px;
  font-weight: 600;
  width: 178px;
  height: 52px;
  overflow: hidden;
  background: linear-gradient(to left, $D 50%, $L 50%);
  background-size: 200% 100%;
  background-position: 0% 0;
  transition: background-position 0.3s, color 0.3s;
  color: black;
  text-decoration: none;
  &:hover {
    background-position: 100% 0;
    color: $L;
    box-shadow: inset 0 0 0 2px rgba($D, 0.5), 0 0 0;
  }
  &.-ssecondary {
    background: linear-gradient(to left, $D 50%, $L 50%);
  }
}
</style>

<script setup>
const props = defineProps({
  to: String,
});
</script>
