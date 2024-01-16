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
    <button id="removeFilters">Toutes les Collections</button>
    <button id="filterAline">Collection Aline</button>
    <button id="filterChloe">Collection Chloe</button>
    <button id="filtereliot">Collection Eliot</button>
    <button id="filterloup">Collection Loup</button>
    <button id="filtersacha">Collection Sacha</button>
    <button id="filtervideo">Collection Video</button>
    <button id="filtersami">Collection Sami</button>

    <div id="alineCollection" class="collection">
      <alineCollection :collection="aline.data.collection" />
    </div>
    <div id="loupCollection" class="collection">
      <LouCollection :collection="loup.data.collection" />
    </div>
    <div id="chloeCollection" class="collection">
      <clhoeCollection :collection="clhoe.data.collection" />
    </div>
    <div id="eliotCollection" class="collection">
      <eliotCollection :collection="eliot.data.collection" />
    </div>
    <div id="sachaCollection" class="collection">
      <sachaCollection :collection="sacha.data.collection" />
    </div>
    <div id="SachaVideo" class="collection">
      <SachaVideo :video="sacha.data.video" />
    </div>
    <div id="samiCollection" class="collection">
      <samiCollection :collection="sami.data.collection" />
    </div>
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

onMounted(() => {
  document
    .getElementById("removeFilters")
    .addEventListener("click", showAllCollections);

  document.getElementById("filterAline").addEventListener("click", function () {
    filterCollections("alineCollection");
  });
  document.getElementById("filterChloe").addEventListener("click", function () {
    filterCollections("chloeCollection");
  });
  document.getElementById("filtereliot").addEventListener("click", function () {
    filterCollections("eliotCollection");
  });
  document.getElementById("filtersacha").addEventListener("click", function () {
    filterCollections("sachaCollection");
  });
  document.getElementById("filtervideo").addEventListener("click", function () {
    filterCollections("SachaVideo");
  });
  document.getElementById("filterloup").addEventListener("click", function () {
    filterCollections("loupCollection");
  });
  document.getElementById("filtersami").addEventListener("click", function () {
    filterCollections("samiCollection");
  });

  function showAllCollections() {
    document.querySelectorAll(".collection").forEach((el) => {
      el.classList.remove("hidden");
    });
  }

  function filterCollections(collectionId) {
    document.querySelectorAll(".collection").forEach((el) => {
      el.classList.add("hidden");
    });
    document.getElementById(collectionId).classList.remove("hidden");
  }
});
</script>

<style lang="scss" scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.hidden {
  display: none;
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
