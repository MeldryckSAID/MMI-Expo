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
        name="Ilkay Men"
        pole="Communication & Design"
      />
    </div>
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
        name="Ilkay Men"
        pole="Communication & Design"
      />
    </div>
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
        name="Ilkay Men"
        pole="Communication & Design"
      />
    </div>
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
        name="Ilkay Men"
        pole="Communication & Design"
      />
    </div>
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
        name="Ilkay Men"
        pole="Communication & Design"
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
