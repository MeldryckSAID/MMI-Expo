<template>
  <div v-for="item in present">
    <img :src="item.logan_pp.url" :alt="item.logan_pp.url.alt" />
    <PrismicRichText :field="item.logan_presentation" />
  </div>
</template>

<script setup>
const props = defineProps({
  present: Array,
});
</script>
