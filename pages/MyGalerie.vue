<template>
  <MyOutro>Archive photo</MyOutro>
  <div class="container">
    <div class="background-date">2023-2024</div>
    <div class="presentation">
      <MyTitle font="arc" el="h2" size="medium"
        >Exposition 2023-2024, 1ère édition
      </MyTitle>
      <p class="text">
        Fringz, Loup Lobato, Telio.arts, Sacha Wicky, s_comic_s, Eden Bourezg,
        Logan Martinez, Aline Rose, Chloé Bizet, Matys Ouvrard et Luca Thomesse,
      </p>
    </div>
    <alineCollection :collection="aline.data.collection" />
    <clhoeCollection :collection="clhoe.data.collection" />
    <eliotCollection :collection="eliot.data.collection" />
    <LouCollection :collection="loup.data.collection" />
    <sachaCollection :collection="sacha.data.collection" />
    <SachaVideo :video="sacha.data.video" />
    <samiCollection :collection="sami.data.collection" />
    <!-- <ul class="galery">
      <li><img src="/gallery/bamboos.jpg" alt="Bamboos" /></li>
      <li><img src="/gallery/castle.jpg" alt="Castle" /></li>
      <li><img src="/gallery/fuji.jpg" alt="Fuji" /></li>
      <li><img src="/gallery/lights.jpg" alt="lights" /></li>
      <li><img src="/gallery/porte.jpg" alt="porte" /></li>
      <li><img src="/gallery/store.jpg" alt="store" /></li>
      <li><img src="/gallery/bamboos.jpg" alt="Bamboos" /></li>
      <li><img src="/gallery/castle.jpg" alt="Castle" /></li>
      <li><img src="/gallery/fuji.jpg" alt="Fuji" /></li>
      <li><img src="/gallery/lights.jpg" alt="lights" /></li>
      <li><img src="/gallery/porte.jpg" alt="porte" /></li>
      <li><img src="/gallery/store.jpg" alt="store" /></li>
      <li><img src="/gallery/bamboos.jpg" alt="Bamboos" /></li>
      <li><img src="/gallery/castle.jpg" alt="Castle" /></li>
      <li><img src="/gallery/fuji.jpg" alt="Fuji" /></li>
      <li><img src="/gallery/lights.jpg" alt="lights" /></li>
      <li><img src="/gallery/porte.jpg" alt="porte" /></li>
      <li><img src="/gallery/store.jpg" alt="store" /></li>
      <li><img src="/gallery/bamboos.jpg" alt="Bamboos" /></li>
      <li><img src="/gallery/castle.jpg" alt="Castle" /></li>
      <li><img src="/gallery/fuji.jpg" alt="Fuji" /></li>
      <li><img src="/gallery/lights.jpg" alt="lights" /></li>
      <li><img src="/gallery/porte.jpg" alt="porte" /></li>
      <li><img src="/gallery/store.jpg" alt="store" /></li>
      <li><img src="/gallery/1.png" alt="store" /></li>
      <li><img src="/gallery/2.png" alt="Bamboos" /></li>
      <li><img src="/gallery/3.png" alt="Castle" /></li>
      <li><img src="/gallery/4.png" alt="Fuji" /></li>
      <li><img src="/gallery/5.png" alt="lights" /></li>
      <li><img src="/gallery/6.png" alt="porte" /></li>
      <li><img src="/gallery/7.png" alt="store" /></li>
      <li><img src="/gallery/8.png" alt="Bamboos" /></li>
      <li><img src="/gallery/9.png" alt="Castle" /></li>
      <li><img src="/gallery/10.png" alt="Fuji" /></li>
      <li><img src="/gallery/11.png" alt="lights" /></li>
      <li><img src="/gallery/12.png" alt="porte" /></li>
      <li><img src="/gallery/13.png" alt="store" /></li>
      <li><img src="/gallery/14.png" alt="store" /></li>
      <li><img src="/gallery/15.png" alt="store" /></li>
      <li><img src="/gallery/16.png" alt="store" /></li>
      <li><img src="/gallery/17.png" alt="store" /></li>
      <li><img src="/gallery/18.png" alt="store" /></li>
    </ul> -->
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: sacha } = await useAsyncData("sacha", () =>
  client.getSingle("artiste_sacha")
);
const { data: eliot } = await useAsyncData("eliot", () =>
  client.getSingle("artist_eliot")
);
const { data: aline } = await useAsyncData("aline", () =>
  client.getSingle("artist_aline")
);
const { data: clhoe } = await useAsyncData("clhoe", () =>
  client.getSingle("artiste_clhoe")
);
const { data: logan } = await useAsyncData("logan", () =>
  client.getSingle("artiste_logan")
);
const { data: loup } = await useAsyncData("loup", () =>
  client.getSingle("artiste_loup")
);
const { data: sami } = await useAsyncData("sami", () =>
  client.getSingle("artiste_sami")
);
</script>

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
  top: -150px;
  font-size: 280px;
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
