<template>
  <main class="layout__page -expo">
    <NuxtPage />
    <NuxtLink to="/" class="layout__link">Retour à l'accueil</NuxtLink>
  </main>
</template>

<style lang="scss">
.layout {
  &__page.-expo {
    margin: 0;
  }
  &__link{
    user-select: none;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    color: white;
    text-decoration: none;
    border: 2px solid white;
    padding: .25rem .5rem;
    transition: all .3s ease;
    &:hover{
      background: white;
      color: black;
    }
  }
}
</style>