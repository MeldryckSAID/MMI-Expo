<script setup>
const { client } = usePrismic();
const { data: expo } = await useAsyncData("galerie", () =>
  client.getAllByType("exposition")
);
useSeoMeta({
  title: "MMI Exposition | Archives Photo",
  ogTitle: "MMI Exposition | Archives Photo",
  description: "Retrouvez toutes les images des expositions passées et en cours",
  ogDescription: "Retrouvez toutes les images des expositions passées et en cours",
  ogImage: "/favicon.png",
});
</script>
<template>
  <MyOutro
    ><span class="relative"
      >Archives photo
      <MyIconBis name="Losange" position="topRight" size="medium" />
      <MyIconBis name="LosangeBis" position="bottomLeft" size="small" /> </span
  ></MyOutro>
  <div class="container" v-for="(exposition, i) in expo" :key="i">
    <div class="background-date">{{ exposition.data.year[0].text }}</div>
    <div class="presentation">
      <MyTitle font="arc" el="h2" size="medium"
        >{{ exposition.data.title[0].text }}
      </MyTitle>
      <p class="text">
        {{ exposition.data.exposant[0].text }}
      </p>
    </div>
    <ul class="galery relative">
      <li>
        <MyIconBis name="Losange" position="topLeft" size="small" />
        <MyIconBis name="BottomLeft" position="bottomLeft" size="big" />
        <MyIconBis name="TopRight" position="topRight" size="medium" />
      </li>
      <li v-for="(img, index) in exposition.data.images" :key="index">
        <NuxtImg format="avif" :src="img.img.url" :alt="img.img.alt" />
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  padding: 140px 0;
}

.presentation .text {
  padding: 2%;
}
.reversed {
  text-align: end;
}
.container {
  position: relative;
  padding: 5%;
}
.galery {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2vmin;
  padding: 0 14px;
}
.galery::after {
  content: "";
  display: block;
  flex-grow: 10;
}
.galery li {
  list-style-type: none;
  height: 250px;
  flex-grow: 1;
}
.galery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.background-date {
  padding-top: 8%;
  position: absolute;
  overflow-x: hidden;
  max-width: 100vw;
  top: -150px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20vw;
  color: $g-gray2;
  z-index: -1;
  pointer-events: none;
  font-family: $okine;
  font-weight: 900;
}

@media (max-width: 425px) {
  .background-date {
    display: none;
  }
}
</style>
