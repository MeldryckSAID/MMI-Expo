<template>
  <MyTitle class="titre" el="h1" size="xlarge"><slot></slot></MyTitle>
  <div class="ligne"></div>
</template>

<style lang="scss" scoped>
.titre {
  text-align: center;
}
.ligne {
  height: 5px;
  background-color: black;
  width: 100%;
}
</style>
