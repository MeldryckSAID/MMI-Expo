

<template>
  <div class="presentation" v-for="item in present" :key="item.id">
    <img
      class="presentation-gtop"
      :src="item.eliot_pp.url"
      :alt="item.eliot_pp.alt"
    />
    <PrismicRichText :field="item.eliot_presentation" />
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
@media (min-width: 435px) {
  .presentation {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  &-gtop {
    position: absolute;
    top: 140px;
    left: 30px;
  }
  img {
    width: 20%;
    height: auto;
  }
}
}
@media (max-width: 435px) {
  .presentation {
    display: flex;
    flex-direction: column-reverse;
    gap: 30px;
    margin-bottom: 20px;
 
    img {
      width: 60%;
      height: auto;
    }
  }
}
</style>
