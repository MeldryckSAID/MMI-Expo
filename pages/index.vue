<template>
  <div ref="Container" class="Container">
    <div
      v-for="(artiste, index) in artistes"
      :key="artiste.id"
      class="Container__link"
    >
      <!-- Condition pour vérifier si l'élément est le premier -->
      <img v-if="index === 0" :src="artiste.image" :alt="artiste.name" />
      <NuxtLink v-else :to="`/Artiste/${artiste.name}`">
        <img :src="artiste.image" :alt="artiste.name" />
      </NuxtLink>
    </div>
  </div>

</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
const Container = ref(null);

// Données fusionnées des artistes
const artistes = ref([
  //  données artiste
  { id: 0, image: "/artiste/info.webp" },
  { id: 2, name: "MatthieuHoareau", image: "/artiste/FRINGZ_pp.webp" },
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
  let wheeldown = event.deltaY > 0;
  let isRight =
    Container.value.scrollLeft + Container.value.clientWidth >=
    Container.value.scrollWidth;
  let isLeft = Container.value.scrollLeft === 0;
  if (!isRight && wheeldown) {
    event.preventDefault();
    Container.value.scrollLeft += event.deltaY;
  }
  if (!isLeft && !wheeldown) {
    event.preventDefault();
    Container.value.scrollLeft += event.deltaY;
  }
};

const randomizeImagePosition = () => {
  const images = document.querySelectorAll(".Container__link img");
  images.forEach((img) => {
    const maxOffset = 200; // Ajustez en fonction de la hauteur disponible
    const randomVerticalOffset = Math.random() * maxOffset - maxOffset / 2;
    img.style.transform = `translateY(${randomVerticalOffset}px)`;
  });
};

onMounted(() => {
  Container.value.addEventListener("wheel", handleMouseWheel, true);
  randomizeImagePosition();
});
onUnmounted(() => {
  Container.value?.removeEventListener("wheel", handleMouseWheel, true);
});
</script>

<style lang="scss">
.Container {
  position: absolute;
  top: 0px;
  right: 0;
  width: 90%;
  height: 1100px;
  display: flex;
  z-index: 1;
  gap: 40px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__link {
    position: relative;
    display: flex;
    align-items: center;
    flex: none;
    width: fit-content;

    img {
      width: 450px;
      height: fit-content;
      filter: drop-shadow(-18.52px 0px 23.15px rgba(0, 0, 0, 0.2));
      position: relative;
      transition: transform 0.3s ease;
    }
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      top: 123px;
      z-index: -1;
      height: 40%;
      width: 5px;
      background-color: black;
      transform: translateX(-50%);
    }
  }
}
</style>
