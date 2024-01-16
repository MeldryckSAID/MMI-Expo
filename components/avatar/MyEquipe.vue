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


])
</script>
<template>
  <div class="avatar-conatainer">
    <div class="avatar" v-for="(item, index) in data" :key="index">
      <MyAvatar
        :photo="item.photo"
        :name="item.name"
        :pole="item.pole"
      />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.avatar-conatainer {
  display: grid;
  grid-template-columns: repeat(3, 4fr);
  gap: 20px;
  justify-items: center;
  .avatar {
    padding: 15%;
  }
}

@media (max-width: 768px) {
  .avatar-conatainer {
    display: grid;
    grid-template-columns: repeat(2, 5fr);

    gap: 20px;
    justify-items: center;

    .avatar {
      padding: 15%;
    }
  }
}
@media (max-width: 424px) {
  .avatar-conatainer {
    // display: grid;
    // grid-template-columns: repeat(2, 5fr);
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-items: center;

    .avatar {
      padding: 15%;
    }
  }
}
</style>
<script setup></script>
