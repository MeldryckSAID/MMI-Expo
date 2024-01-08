<!-- <script setup></script>

<template>
  <div class="tcontainer">
    <div class="tblocHorizontal">
      <img class="tslide" src="/img/a.png" alt="" />
      <img class="tslide" src="/img/b.png" alt="" />
      <img class="tslide" src="/img/c.png" alt="" />
      <img class="tslide" src="/img/d.png" alt="" />
      <img class="tslide" src="/img/e.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
html,
img {
  max-width: 100%; /* Assurer que les images ne dépassent pas la largeur du conteneur */
  height: auto; /* Maintenir le rapport hauteur/largeur des images */
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

.tslide {
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tblocHorizontal {
  display: flex;
  flex-direction: row;
  width: 100%;
  transform: rotate(90deg) translateY(-100%);
  transform-origin: top center;
}
.tcontainer {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg) translateX(-100%);
  transform-origin: top left;
  overflow-x: hidden;

  /* pour ie et mozilla */
  -ms-overlow-style: none;
  scrollbar-width: none;
}
::-webkit-scrollbar {
  display: none;
}
</style> -->

<!-- <script setup></script>

<template>
  <div class="outer-container">
    <div class="container">
      <div class="blocHorizontal">
        <img class="slide" src="/img/a.png" alt="" />
        <img class="slide" src="/img/b.png" alt="" />
        <img class="slide" src="/img/c.png" alt="" />
        <img class="slide" src="/img/d.png" alt="" />
        <img class="slide" src="/img/e.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.outer-container {
  min-width: 100%; /* ou une valeur en pixels selon vos besoins */
  overflow-x: auto;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
}

.blocHorizontal {
  display: flex;
  flex-direction: row;
}

.slide {
  max-width: 100%;
  height: auto;
}

/* Ajouter une classe pour masquer la barre de défilement verticale */
.no-scroll-y {
  overflow: hidden;
}

::-webkit-scrollbar {
  display: none;
}
</style> -->

<template>
  <div class="outer-container">
    <div class="inner-container">
      <div class="blocHorizontal">
        <img class="slide" src="/img/a.png" alt="" />
        <img class="slide" src="/img/b.png" alt="" />
        <img class="slide" src="/img/c.png" alt="" />
        <img class="slide" src="/img/d.png" alt="" />
        <img class="slide" src="/img/e.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
html,
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  overflow: hidden; /* Empêche le défilement vertical du site principal */
}

.outer-container {
  width: 100vw;
  overflow-x: scroll; /* Utilisation de la largeur de la vue pour créer le défilement horizontal */
  white-space: nowrap; /* Empêche le saut de ligne des éléments enfants */
}

.inner-container {
  display: inline-block; /* Ajuste la largeur en fonction du contenu réel */
}

.blocHorizontal {
  display: flex;
  flex-direction: row;
}

.slide {
  max-width: 100%;
  height: auto;
}

/* Ajouter une classe pour masquer la barre de défilement verticale */
.no-scroll-y {
  overflow: hidden;
}

::-webkit-scrollbar {
  display: none;
}
</style>

