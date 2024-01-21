<template>
  <MyOutro>Archives photo</MyOutro>
  <div class="container">
    <div class="background-date">2023-2024</div>
    <div class="presentation">
      <MyTitle font="arc" el="h2" size="medium"
        >Exposition 2023-2024, 1ère édition
      </MyTitle>
      <p class="text">
        Pour notre premiere éditions nous avons l'iminse honneur de vous
        présenter nos etudiants qui ont bien voulu se lancer voici les oeuvres
        de : <br />
        <span class="name"> Fringz, <br /> </span>
        <span class="name"> Loup Lobato,<br /> </span>
        <span class="name"> Telio.arts,<br /> </span>
        <span class="name"> Sacha Wicky,<br /> </span>
        <span class="name"> s_comic_s,<br /> </span>
        <span class="name"> Eden Bourezg,<br /> </span>
        <span class="name"> Logan Martinez,<br /> </span>
        <span class="name"> Aline Rose,<br /> </span>
        <span class="name"> Chloé Bizet,<br /> </span>
      </p>
    </div>
    <div class="select-container">
      <select id="collectionFilter">
        <option value="all">Toutes les Collections</option>
        <option value="matCollection">Collection Matthieu</option>
        <option value="edenCollection">Collection Eden</option>
        <option value="edenVideo">Collection Eden Video</option>
        <option value="alineCollection">Collection Aline</option>
        <option value="chloeCollection">Collection Chloe</option>
        <option value="eliotCollection">Collection Eliot</option>
        <option value="loupCollection">Collection Loup</option>
        <option value="sachaCollection">Collection Sacha</option>
        <option value="SachaVideo">Collection Sacha Video</option>
        <option value="samiCollection">Collection Sami</option>
      </select>
    </div>

    <div id="matCollection" class="collection">
      <matCollection :collection="mat.data.collection" />
    </div>
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
    <div id="edenCollection" class="collection">
      <edenCollection :collection="eden.data.collection" />
    </div>
    <div id="edenVideo" class="collection">
      <edenVideo :video="eden.data.video" />
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
const { data: mat } = await useAsyncData("mat", () =>
  client.getSingle("artiste_matthieu")
);
const { data: eden } = await useAsyncData("eden", () =>
  client.getSingle("artiste_eden")
);

onMounted(() => {
  document
    .getElementById("collectionFilter")
    .addEventListener("change", handleFilterChange);

  function handleFilterChange() {
    const selectedCollection =
      document.getElementById("collectionFilter").value;
    if (selectedCollection === "all") {
      showAllCollections();
    } else {
      filterCollections(selectedCollection);
    }
  }

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

.name {
  color: $r-red;
}
.presentation .text {
  padding: 2%;
}
.text {
  font-family: $okine;
  // font-weight:bolder;
}
.reversed {
  text-align: end;
}
.container {
  position: relative;
  padding: 5%;
}

.background-date {
  padding-top: 8%;
  position: absolute;
  top: -150px;
  font-size: 260px;
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

.select-container {
  position: relative;
  display: inline-block;
  width: 200px;
  margin: 20px;
  select {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    font-size: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;
    appearance: none;
    background-size: 12px;

    &:hover {
      border-color: #888;
    }

    &:focus {
      outline: none;
      border-color: #555;
    }
  }

  &:after {
    content: "";
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border-width: 5px 5px 0;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
    pointer-events: none;
  }
}
</style>
