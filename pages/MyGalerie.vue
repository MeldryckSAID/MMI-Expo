<template>
  <MyOutro>Galerie photo</MyOutro>
  <div class="container">
    <ul class="galery">
      <li><img src="/gallery/bamboos.jpg" alt="Bamboos" /></li>
      <li><img src="/gallery/castle.jpg" alt="Castle" /></li>
      <li><img src="/gallery/fuji.jpg" alt="Fuji" /></li>
      <li><img src="/gallery/lights.jpg" alt="lights" /></li>
      <li><img src="/gallery/porte.jpg" alt="porte" /></li>
      <li><img src="/gallery/store.jpg" alt="store" /></li>
      <li><img src="/gallery/bamboos.jpg" alt="Bamboos" /></li>
      <li><img src="/gallery/castle.jpg" alt="Castle" /></li>
      <li><img src="/gallery/fuji.jpg" alt="Fuji" /></li>
      <li><img src="/gallery/lights.jpg" alt="lights" /></li>
      <li><img src="/gallery/porte.jpg" alt="porte" /></li>
      <li><img src="/gallery/store.jpg" alt="store" /></li>
      <li><img src="/gallery/bamboos.jpg" alt="Bamboos" /></li>
      <li><img src="/gallery/castle.jpg" alt="Castle" /></li>
      <li><img src="/gallery/fuji.jpg" alt="Fuji" /></li>
      <li><img src="/gallery/lights.jpg" alt="lights" /></li>
      <li><img src="/gallery/porte.jpg" alt="porte" /></li>
      <li><img src="/gallery/store.jpg" alt="store" /></li>
      <li><img src="/gallery/bamboos.jpg" alt="Bamboos" /></li>
      <li><img src="/gallery/castle.jpg" alt="Castle" /></li>
      <li><img src="/gallery/fuji.jpg" alt="Fuji" /></li>
      <li><img src="/gallery/lights.jpg" alt="lights" /></li>
      <li><img src="/gallery/porte.jpg" alt="porte" /></li>
      <li><img src="/gallery/store.jpg" alt="store" /></li>
    </ul>
  </div>
</template>

<script>
export default {
  // Vous pouvez ajouter ici toute logique spécifique à Vue ou Nuxt si nécessaire
  head() {
    return {
      title: "CSS - Bac à Sable", // Titre de la page
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        // D'autres méta tags si nécessaire
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
*,
::before,
::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  padding: 140px 0;
}

.container {
  padding: 5%;
}
.galery {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2vmin;
  padding: 0 14px;
}
.galery::after {
  content: "";
  display: block;
  flex-grow: 10;
}
.galery li {
  list-style-type: none;
  height: 250px;
  flex-grow: 1;
}
.galery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
