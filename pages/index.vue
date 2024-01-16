<template>
  <div class="tcontainer">
    <div class="tblocHorizontal">
      <img src="/artiste/info.webp" alt="" />
      <nuxt-link class="tslide" to="/Artiste/Matthieu">
        <img src="/artiste/FRINGZ_pp.webp" alt=""
      /></nuxt-link>
      <nuxt-link class="tslide" to="/Artiste/eden">
        <img src="/artiste/eden_pp.webp" alt=""
      /></nuxt-link>
      <nuxt-link class="tslide" to="/Artiste/aline">
        <img src="/artiste/aline_pp.webp" alt=""
      /></nuxt-link>
      <nuxt-link class="tslide" to="/Artiste/eliot">
        <img src="/artiste/telio_pp.webp" alt="" />
      </nuxt-link>
      <nuxt-link class="tslide" to="/Artiste/LoganMartinez">
        <img src="/artiste/logan_pp.webp" alt=""
      /></nuxt-link>
      <nuxt-link class="tslide" to="/Artiste/Loup">
        <img src="/artiste/Loup_pp.webp" alt="" />
      </nuxt-link>
      <nuxt-link class="tslide" to="/Artiste/sacha">
        <img src="/artiste/sacha_pp.webp" alt="" />
      </nuxt-link>
      <nuxt-link class="tslide" to="/Artiste/sami">
        <img src="/artiste/sami_pp.webp" alt="" />
      </nuxt-link>
      <nuxt-link class="tslide" to="/Artiste/cloe">
        <img src="/artiste/cloe_pp.webp" alt="" />
      </nuxt-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

const images = ref([]);
const handleMouseWheel = (event) => {
  const scrollContainer = document.querySelector(".tblocHorizontal");
  if (scrollContainer) {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
  }
};

onMounted(() => {
  const tblocHorizontal = document.querySelector(".tblocHorizontal");
  if (tblocHorizontal) {
    tblocHorizontal.addEventListener("wheel", handleMouseWheel, {
      passive: false,
    });
  }
});

onUnmounted(() => {
  const tblocHorizontal = document.querySelector(".tblocHorizontal");
  if (tblocHorizontal) {
    tblocHorizontal.removeEventListener("wheel", handleMouseWheel);
  }
});

onMounted(() => {
  images.value = document.querySelectorAll(".tblocHorizontal img");
  images.value.forEach((image) => {
    const randomVerticalOffset = Math.floor(Math.random() * 500) - 100; // Génère un nombre entre -25 et 25
    image.style.transform = `translateY(${randomVerticalOffset}px)`;
  });
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
    img {
      width: 450px;
      height: fit-content;
      filter: drop-shadow(-18.52px 0px 23.15px rgba(0, 0, 0, 0.2));
    }
  }

  .tslide {
    flex: none;
    width: fit-content;
  }
}
</style>
