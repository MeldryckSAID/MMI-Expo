<template>
  <div class="avatar-conatainer">
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Ilkay Men"
        pole="Communication & Design"
      />
    </div>
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Théo Pasquarelli"
        pole="Communication & Design"
      />
    </div>
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Valentin Tholomier"
        pole="Communication"
      />
    </div>
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Benoît Fasel"
        pole="Communication"
      />
    </div>
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Jules Houbron"
        pole="Design"
      />
    </div>
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Maël Grosjean"
        pole=" Design"
      />
    </div>
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Noah Lafourcade"
        pole="Design"
      />
    </div>
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Meldryck Saïd"
        pole="Communication & Developpement"
      />
    </div>
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Quentin Heinis"
        pole="Developpement"
      />
    </div>
    <div class="avatar">
      <MyAvatar
        photo="/img/Nicky_Larson.webp"
        name="Yanis Richard"
        pole="Developpement"
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
