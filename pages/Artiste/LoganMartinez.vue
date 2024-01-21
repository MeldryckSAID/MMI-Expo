<template>
  <MyOutroA>
    <template #title>
      <div class="artiste">
        Logan Martinez
        <div class="artiste-resaux">
          <Myacon name="tt" link="https://lien-vers-tt.com" />
          <Myacon name="Insta" link="https://lien-vers-insta.com" />
          <Myacon name="web" link="https://lien-vers-web.com" />
          <Myacon name="x" link="https://lien-vers-x.com" />
        </div>
      </div>
    </template>
    <template v-slot:content>
      <div>
        <LoganPresentation :present="home.data.logan" />
      </div>
    </template>
  </MyOutroA>

  <div class="container">
    <div class="background-date">Logan Martinez</div>
    <div class="icon">
      <MyIcon class="icon-click" name="Click" />
      <MyIcon class="icon-piou" name="PiouPiou" />
      <MyIcon class="icon-piouB" name="PiouPiouBas" />
    </div>
    <LoganCollection :collection="home.data.collection6" />
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("artiste_logan")
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
.icon {
  &-click {
    left: 30px;
    top: -70px;
    position: absolute;
  }
  &-piou {
    position: absolute;
    top: 10px;
    right: 90px;
  }
  &-piouB {
    position: absolute;
    bottom: -230px;
    left: -70px;
  }
}

.presentation .text {
  padding: 2%;
}
.artiste {
  display: flex;
  gap: 60px;
  align-items: center;

  &-resaux {
    display: flex;
    flex-direction: column;
  }
}
.reversed {
  text-align: end;
}
.container {
  position: relative;
  padding: 5%;
  margin-top: 5%;
  margin-bottom: 20%;
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
