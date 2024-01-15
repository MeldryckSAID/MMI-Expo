<template>
  <MyOutro>Logan Martinez</MyOutro>

  <div class="container">
    <!-- <pre>{{ home.data }}</pre> -->
    <!-- <pre>{{ home.data.logan }}</pre> -->
    <!-- <pre>{{ home.data.collection }}</pre> -->
    <LoganPresentation :present="home.data.logan" />

    <div class="background-date">Logan</div>
    <div class="presentation">
      <MyTitle class="reversed" font="arc" el="h2" size="medium"
        >Logan Martinez
      </MyTitle>
      <p class="reversed text">
        Logan Martinez, artiste de 19 ans passionné de design graphique, son
        travail est principalement orienté vers la création d’identité visuelle
        ou de création graphique explorant le thème du brutalisme.
      </p>
    </div>
    <ul class="galery" ref="gallery">
      <LoganCollection :collection="home.data.collection6" />
    </ul>
  </div>
</template>

<script setup>
const { client } = usePrismic();
const { data: home } = await useAsyncData("home", () =>
  client.getSingle("artiste_logan")
);

// import { onMounted, ref } from "vue";

// const gallery = ref(null);

// const openLightbox = (src) => {
//   Code pour ouvrir la lightbox
//   let lightbox = document.createElement("div");
//   lightbox.id = "lightbox";
//   lightbox.innerHTML = `<img src="${src}" style="width: 100%">`;
//   document.body.appendChild(lightbox);

//   Fermer la lightbox en cliquant à l'extérieur de l'image
//   lightbox.addEventListener("click", () => {
//     lightbox.remove();
//   });
// };

// onMounted(() => {
//   const images = gallery.value.querySelectorAll("img");
//   images.forEach((img, index, array) => {
//     img.addEventListener("click", () => {
//       openLightbox(img.src);
//     });

//     img.addEventListener("keydown", (e) => {
//       if (e.key === "ArrowRight") {
//         let nextIndex = (index + 1) % array.length;
//         openLightbox(array[nextIndex].src);
//       }
//     });
//   });
// });
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

.presentation .text {
  padding: 2%;
}
.reversed {
  text-align: end;
}
.container {
  position: relative;
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

.background-date {
  padding-top: 8%;
  position: absolute;
  top: -150px;
  font-size: 280px;
  color: $g-gray2;
  z-index: -1;
  pointer-events: none;
  font-family: $okine;
  font-weight: 900;
}

@media (max-width: 425px) {
  .background-date {
    display: none;
  }
}
</style>
