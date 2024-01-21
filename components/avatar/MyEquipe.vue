<script setup>
const data = reactive([
  {
    name: "Ilkay Men",
    pole: "Communication & Design",
    photo: "/img/Nicky_Larson.webp",
  },
  {
    name: "Théo Pasquarelli",
    pole: "Communication & Design",
    photo: "/img/Nicky_Larson.webp",
  },
  {
    name: "Meldryck Saïd",
    pole: "Développement & communication",
    photo: "/img/Nicky_Larson.webp",
  },

  {
    name: "Quentin Heinis",
    pole: "Développement",
    photo: "/img/Nicky_Larson.webp",
  },
  {
    name: "Yanis Richard",
    pole: "Développement",
    photo: "/img/Nicky_Larson.webp",
  },
]);

const { client } = usePrismic();
const { data: team } = await useAsyncData("team", () =>
  client.getSingle("team")
);
</script>
<template>
  <div class="avatar__grid relative">
    <MyIconBis name="TopRight" position="topRight" :rotate="true" />
    <MyIconBis name="Arrow" position="topCenter" :rotate="true" />
    <MyIconBis name="BottomLeft" position="bottomLeft" />

    <div class="avatar" v-for="(item, index) in team.data.member" :key="index">
      <MyAvatar
        :photo="item.img?.url"
        :name="item.nom[0]?.text"
        :pole="item.fonction[0]?.text"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.avatar__grid {
  margin-inline: auto;
  max-width: min(90%, 1400px);
  padding-top: 150px;
  margin-top: 25px;
  margin-bottom: 50px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 175px;
  column-gap: 50px;
  justify-items: center;
}
</style>
