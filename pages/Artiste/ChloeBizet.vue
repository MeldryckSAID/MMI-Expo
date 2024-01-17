<template>
  <MyOutro>Chloé BIZET</MyOutro>

  <div class="container">
    <!-- <pre>{{ home.data }}</pre> -->
    <!-- <pre>{{ home.data.logan }}</pre> -->
    <!-- <pre>{{ home.data.collection6 }}</pre> -->

    <ClhoePresentation :present="home.data.chloe" />

    <div class="background-date">Chloé BIZET</div>

    <clhoeCollection :collection="home.data.collection" />
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("artiste_clhoe")
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
