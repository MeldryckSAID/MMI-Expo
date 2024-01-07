<script setup></script>

<template>
  <div class="slide"> 
    <img src="/img/a.png" alt="" />
    <img src="/img/b.png" alt="" />
    <img src="/img/c.png" alt="" />
    <img src="/img/d.png" alt="" />
    <img src="/img/e.png" alt="" />
  </div>
</template>

<style lang="scss" scoped>
html, body {
  overflow-x: auto; /* Activer le défilement horizontal sur l'ensemble de la page */
  overflow-y: hidden; /* Désactiver le défilement vertical */
  margin: 0; /* Supprimer les marges par défaut pour empêcher le défilement vertical inutile */
}

.slide {
  display: flex;
  justify-content: space-around;
  gap: 200px;
  white-space: nowrap; /* Empêcher les images de passer à la ligne suivante */
  width: 100vw; /* Assurer que le conteneur prend la largeur complète de la vue */
}

img {
  max-width: 100%; /* Assurer que les images ne dépassent pas la largeur du conteneur */
  height: auto; /* Maintenir le rapport hauteur/largeur des images */
}
</style>
