<template>
  <div class="card">
    <img class="card__img" :src="photo" :alt="'photo de ' + name" />
    <div class="card__info">
      <MyTitle font="okine" el="h5" size="medium">{{ name }}</MyTitle>
      <p class="card__text">{{ pole }}</p>
    </div>
  </div>
</template>
<style lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  * {
    text-align: center;
  }
  width: 300px;
  height: 210px;
  border-radius: 45px;
  background: #e9e9eb;
  &__img {
    --size: 240px;
    width: var(--size);
    height: var(--size);
    border-radius: 100% ;
    object-fit: cover;
  }
}
</style>
<script setup>
defineProps({
  id: Number,
  pole: String,
  name: String,
  photo: String,
});
</script>
