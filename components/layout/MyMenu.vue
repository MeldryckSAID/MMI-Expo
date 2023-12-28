<template>
  <div class="MenuIcon">
    <MyIcon v-if="isOpen" name="open" @click="toggleMenu" />
    <MyIcon v-else name="close" @click="toggleMenu" />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style lang="scss" scoped>
.MenuIcon{
  cursor:pointer
}
</style>

