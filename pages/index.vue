<template>
  <div class="tcontainer">
    <div class="tblocHorizontal">
      <img class="tslide" src="/img/a.png" alt="" />
      <img class="tslide" src="/img/b.png" alt="" />
      <img class="tslide" src="/img/b.png" alt="" />
      <img class="tslide" src="/img/c.png" alt="" />
      <img class="tslide" src="/img/c.png" alt="" />
      <img class="tslide" src="/img/d.png" alt="" />
      <img class="tslide" src="/img/d.png" alt="" />
      <img class="tslide" src="/img/e.png" alt="" />
      <img class="tslide" src="/img/e.png" alt="" />
    </div>
  </div>
  
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";

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
</script>

<style scoped>
.tcontainer {
  .tblocHorizontal {
    display: flex;
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .tslide {
    flex: none;
  }
}
</style>
