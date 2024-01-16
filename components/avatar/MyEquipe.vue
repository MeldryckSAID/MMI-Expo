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
console.log(team.value.data.member);
</script>
<template>
  <div class="avatar__grid">
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
  max-width: 1400px;
  margin-top: 175px;
  margin-bottom: 50px;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 175px;
  column-gap: 50px;
  justify-items: center;
}
</style>
