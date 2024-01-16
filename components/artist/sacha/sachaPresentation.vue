<template>
  <div class="presentation" v-for="item in present">
    <PrismicRichText :field="item.sacha_presentation" />
    <img :src="item.sacha_pp.url" :alt="item.sacha_pp.alt" />
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
  margin-bottom: 20px;
  img {
    width: 30%;
    height: auto;
  }
}
</style>
