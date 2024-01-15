<template>
  <div v-for="item in copenhague">
    <img :src="item.copenhague_img.url" :alt="item.copenhague_img.url.alt" />
  </div>
</template>

<script setup>
const props = defineProps({
  copenhague: Array,
});
</script>
