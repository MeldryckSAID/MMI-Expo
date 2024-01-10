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
  border: 2px solid $b-black;
  border-radius: 2px;
  display: inline-grid;
  place-content: center;
  font-family: $okine;
  font-size: $text2pc;
  font-weight: 600;
  width: 178px;
  height: 52px;
  overflow: hidden;
  background: linear-gradient(to left, $b-black 50%, $w-white 50%);
  background-size: 200% 100%;
  background-position: 0% 0;
  transition: background-position 0.3s, color 0.3s;
  color: black;
  text-decoration: none;
  &:hover {
    background-position: 100% 0% ;
    color: $w-white;
    box-shadow: inset 0 0 0 2px rgba($b-black, 0.5), 0 0 0;
  }
  &.-ssecondary {
    background: linear-gradient(to left, $b-black 50%, $w-white 50%);
  }
}
</style>

<script setup>
const props = defineProps({
  to: String,
});
</script>
