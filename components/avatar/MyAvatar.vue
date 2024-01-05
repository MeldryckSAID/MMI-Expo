<template>
  <div class="parent">
    <div class="profil">
      <img class="image-container" :src="photo" alt="" />
    </div>
    <div class="information">
      <MyTitle font="okine" el="h5" size="medium">{{ name }}</MyTitle>
      <p class="text">{{ pole }}</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.parent {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .profil {
    position: absolute;
    z-index: 3;
    top: -120px;
    .image-container {
      width: 100%;
      height: 100%;
      width: 242px;
      height: 242px;
      flex-shrink: 0;
      border-radius: 69px;
    }
  }
  .information {
    width: 322px;
    height: 210px;
    border-radius: 47px;
    background-color: $g-gray2;

    z-index: 2;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .text {
      color: black;
      font-family: $okine;
      font-size: 15px;
    }
  }
}
@media (max-width: 1024px) {
  .profil {
    position: absolute;
    z-index: 3;
    top: -120px;

    .image-container {
      width: 100%;
      height: 100%;
      width: 120px;
      height: 110px;
      flex-shrink: 0;
      border-radius: 69px;
    }
  }
  .information {
    width: 150px;
    height: 110px;
    border-radius: 47px;
    z-index: 2;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    .text {
      color: black;
      font-family: $okine;
      font-size: 15px;
    }
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
