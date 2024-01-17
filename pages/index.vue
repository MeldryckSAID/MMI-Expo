
<template>
  <div class="tcontainer">
    <div class="tblocHorizontal">
      <div class="imageContainer" v-for="index in 1" :key="index">
        <img src="/artiste/info.webp" alt="" />
      </div>
      <div class="imageContainer" v-for="artiste in artistes" :key="artiste.id">
        <nuxt-link class="tslide" :to="`/Artiste/${artiste.name}`">
          <img :src="artiste.image" alt="" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const tblocHorizontal = ref(null);
const artistes = ref([
  // Remplissez avec vos données d'artiste
  // Ajoutez d'autres artistes ici

  { id: 1, name: "MatthieuHoareau", image: "/artiste/FRINGZ_pp.webp" },
  { id: 2, name: "SachaWicky", image: "/artiste/sacha_pp.webp" },
  { id: 3, name: "LoganMartinez", image: "/artiste/logan_pp.webp" },
  { id: 4, name: "EdenBourezg", image: "/artiste/eden_pp.webp" },
  { id: 5, name: "LoupLobato", image: "/artiste/Loup_pp.webp" },
  { id: 6, name: "AlineRose", image: "/artiste/aline_pp.webp" },
  { id: 7, name: "ChloeBizet", image: "/artiste/cloe_pp.webp" },
  { id: 8, name: "EliotGros", image: "/artiste/telio_pp.webp" },
  { id: 9, name: "SamiGhorzi", image: "/artiste/sami_pp.webp" },
]);

const handleMouseWheel = (event) => {
  if (tblocHorizontal.value) {
    event.preventDefault();
    tblocHorizontal.value.scrollLeft += event.deltaY;
  }
};

onMounted(() => {
  tblocHorizontal.value = document.querySelector(".tblocHorizontal");
  if (tblocHorizontal.value) {
    tblocHorizontal.value.addEventListener("wheel", handleMouseWheel, {
      passive: false,
    });
  }
  const imageContainers = document.querySelectorAll(
    ".tblocHorizontal .imageContainer"
  );
  imageContainers.forEach((container) => {
    const randomVerticalOffset = Math.floor(Math.random() * 300) - 20;
    container.style.transform = `translateY(${randomVerticalOffset}px)`;

    const image = container.querySelector("img");
    const createLine = () => {
      const imageHeight = image.clientHeight;
      const lineLength = imageHeight * 0.9;
      const line = container.appendChild(document.createElement("div"));
      line.style.position = "absolute";
      line.style.left = "50%";
      line.style.top = "0";
      line.style.height = `${lineLength}px`;
      line.style.width = "5px";
      line.style.backgroundColor = "#000";
      line.style.zIndex = "-1";
    };

    if (image.complete) {
      createLine();
    } else {
      image.onload = createLine;
    }
  });
});

onUnmounted(() => {
  if (tblocHorizontal.value) {
    tblocHorizontal.value.removeEventListener("wheel", handleMouseWheel);
  }
});
</script>

<style scoped>
.tcontainer {
  .tblocHorizontal {
    display: flex;
    gap: 40px;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
    .imageContainer {
      position: relative;
      display: flex;
      align-items: center;
     
      img {
        width: 450px;
    
        height: fit-content;
        filter: drop-shadow(-18.52px 0px 23.15px rgba(0, 0, 0, 0.2));
      }
    }
  }
  .tslide {
    flex: none;
    width: fit-content;
  }
}
</style>
