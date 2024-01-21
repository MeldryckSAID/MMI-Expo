<script setup></script>
<template>
  <MyHeader class="error__header" />
  <main class="error__page">
    <div class="content">
      <h1 class="relative">
        Erreur 404 - Page non trouvée
        <MyIconBis name="TopRight" position="topRight" size="big" />
        <MyIconBis name="BottomLeft" position="bottomLeft" size="medium" />
      </h1>
      <p>
        Désolé, la page que vous recherchez semble introuvable. Il est possible
        qu'elle ait été déplacée, renommée ou supprimée. Retournez à la page
        d'accueil pour trouver ce que vous cherchez.
      </p>
      <NuxtLink to="/" class="error__link relative">
        <MyIconBis name="Click" position="topLeft" size="giga" />
        Retour à la page d'accueil
      </NuxtLink>
    </div>
    <MyBackground />
  </main>
  <MyFooter class="error__footer" />
</template>

<style lang="scss">
.error__link {
  background: #000;
  padding: 20px 40px;
  color: #fff;
  margin-top: 150px;
  display: grid;
  max-width: fit-content;
  place-items: center;
  text-decoration: none;
  margin-inline: auto;
}
.error {
  h1 {
    width: fit-content;
    margin-inline: auto;
    margin-top: 75px;
    height: fit-content;
    text-align: center;
  }
  p {
    margin: 50px 0;
    max-width: 600px;
    margin-inline: auto;
  }
  &__header {
    z-index: 100;
    margin-inline: auto;
  }
  &__page {
    max-width: 100vw;
    display: grid;
    justify-content: center;
    min-height: 100vh;
    overflow-x: hidden;
    padding-inline: 5%;
    .content {
      margin-top: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      max-width: 650px;
      height: fit-content;
    }
  }
}
</style>
