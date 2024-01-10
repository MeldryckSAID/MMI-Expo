<script setup>
import { onMounted, onUnmounted } from "vue";

// Gérer l'événement de roulette de la souris pour le défilement horizontal
const handleMouseWheel = (event) => {
  const scrollContainer = document.querySelector(".tblocHorizontal");
  if (scrollContainer) {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
  }
};

// Crochets de cycle de vie pour les écouteurs d'événements
onMounted(() => {
  console.log("Composant monté");
  document.addEventListener("wheel", handleMouseWheel, { passive: false });
});

onUnmounted(() => {
  document.removeEventListener("wheel", handleMouseWheel);
});
</script>

<template>
  <div class="tcontainer">
    <div class="tblocHorizontal">
      <div class="tblocHorizontal-content">
        <div class="tblocHorizontal-content-fil"></div>
        <img class="tslide" src="/img/a.png" alt="" />
      </div>

      <img class="tslide" src="/img/b.png" alt="" />
      <img class="tslide" src="/img/c.png" alt="" />
      <img class="tslide" src="/img/d.png" alt="" />
      <img class="tslide" src="/img/e.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tcontainer {
 
  .tblocHorizontal {
    border: 1px solid red;
    display: flex;
    overflow-x: auto;

    &-content {
      position: relative;
      &-fil {
        width: 4px;
        height: 40vh;
        background-color: red;
        position: absolute;
        top: -100px;
        left: 50%;
      }
    }
  }
}
</style>