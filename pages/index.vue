<script setup>
const { client } = usePrismic();

const { data: home } = await useAsyncData("Home", () =>
  client.getSingle("home")
);
console.log(home.value.data.slider);

const scrollContainer = ref(null);

const scrollWheel = (e) => {
  let wheeldown = e.deltaY > 0 ? true : false;
  let isRight =
    scrollContainer.value.scrollLeft + scrollContainer.value.clientWidth >=
    scrollContainer.value.scrollWidth;
  let isLeft = scrollContainer.value.scrollLeft === 0;
  if (!isRight && wheeldown) {
    e.preventDefault();
    scrollContainer.value.scrollLeft += e.deltaY;
  }
  if (!isLeft && !wheeldown) {
    e.preventDefault();
    scrollContainer.value.scrollLeft += e.deltaY;
  }
};
onMounted(() => {
  scrollContainer.value.addEventListener("wheel", scrollWheel, true);
});
onUnmounted(() => {
  scrollContainer.value?.removeEventListener("wheel", scrollWheel, true);
});
</script>
<template>
  <div ref="scrollContainer" class="scrollContainer">
    <NuxtLink
      v-for="(item, i) in home.data.slider"
      :key="i"
      :to="`/artiste/${item.slider__link[0].text}`"
      class="scrollContainer__link"
    >
      <NuxtImg :src="item.slider__img.url" :alt="item.slider__alt[0].text" />
    </NuxtLink>
    <NuxtLink
      v-for="(item, i) in home.data.slider"
      :key="i"
      :to="`/artiste/${item.slider__link[0].text}`"
      class="scrollContainer__link"
    >
      <NuxtImg :src="item.slider__img.url" :alt="item.slider__alt[0].text" />
    </NuxtLink>
    <NuxtLink
      v-for="(item, i) in home.data.slider"
      :key="i"
      :to="`/artiste/${item.slider__link[0].text}`"
      class="scrollContainer__link"
    >
      <NuxtImg :src="item.slider__img.url" :alt="item.slider__alt[0].text" />
    </NuxtLink>
  </div>
</template>

<style lang="scss">
.scrollContainer {
  padding-inline: 3rem;
  box-sizing: border-box;
  display: flex;
  overflow-x: scroll;
  @media screen and (min-width: 1025px) {
    overflow-x: hidden;
  }
  gap: 30px;
  width: 100vw;
  height: 80vh;
  &::-webkit-scrollbar {
    display: none;
  }
  &__link {
    display: block;
    flex: none;
    width: 250px;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 2px;
      background: black;
      height: 50%;
      left: 50%;
      z-index: -1;
    }
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        img {
          padding-top: random(50px, 200px);
          width: 100%;
        }
      }
    }
  }
}
</style>
