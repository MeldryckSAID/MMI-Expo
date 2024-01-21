<template>
  <div>
    <MyTitle class="titre" el="h1" size="xlarge">
      <MyIcon class="titre-item-top" name="Diamant" />
      <slot></slot>
      <MyIcon class="titre-item-bottom" name="Sparkle"
    /></MyTitle>
  </div>
  <Myacon class="line" name="line" />
</template>

<style lang="scss" scoped>
.titre {
  margin-top: 10%;
  text-align: center;
  // display: flex;
  // align-items: center;
  &-item {
    &-top {
      display: flex;
      justify-content: flex-start;
    }
    &-bottom {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
