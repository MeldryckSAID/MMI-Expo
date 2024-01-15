<template>
  <div class="p-merci">
    <h1>Votre message a bien été envoyé</h1>
    <nuxt-link class="link" to="/">Retourner à l'accueil</nuxt-link>
  </div>
</template>
<style lang="scss" >
.p-merci {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  gap: 2rem;
  h1{
    padding: 1rem;
    text-align: center;
  }
  .link {
    box-sizing: border-box;
    color: white;
    text-decoration: none;
    background: #000;
    padding: 16px 42px;
  }
}
</style>
