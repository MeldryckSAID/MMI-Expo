<template>
  <div class="presentation" v-for="item in present">
    <PrismicRichText :field="item.loup_presentation" />
    <img :src="item.loup_pp.url" :alt="item.loup_pp.alt" />
  </div>
</template>

<script setup>
const props = defineProps({
  present: Array,
});
</script>

<style lang="scss" scoped>
.presentation {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom:20px;
  img {
    width: 30%;
    height: auto;
  }
}
</style>
