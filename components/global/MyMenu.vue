<template>
  <MyIcon
    class="open-menu"
    aria-controls="menu"
    :aria-expanded="menuOuvert"
    @click="toggleMenu"
    :class="[menuOuvert ? 'hidden' : '']"
    name="open"
  />
  <!-- Menu hamburger déroulé -->

  <div class="menu-container" :class="[menuOuvert ? 'open' : '']">
    <div class="menu-header">
      <MyIcon name="close" class="close-menu" @click.stop="toggleMenu" />
    </div>
    <div class="menu-container-links">
      <div class="menu-container-links-link">
        <MyLinks @click.stop="toggleMenu" to="/">Home</MyLinks>
        <MyLinks @click.stop="toggleMenu" :isReversed="true" to="/MyContact"
          >Contact</MyLinks
        >
        <MyLinks @click.stop="toggleMenu" to="/MyAbout">À propos</MyLinks>
        <MyLinks @click.stop="toggleMenu" :isReversed="true" to="/MyGalerie"
          >Galeris Photos</MyLinks
        >
        <MyLinks @click.stop="toggleMenu" to="/exposition"
          >VISITE VIRTUELLE
        </MyLinks>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

let menuOuvert = ref(false);

const toggleMenu = () => {
  menuOuvert.value = !menuOuvert.value;
};
</script>

<style lang="scss" scoped>
/* Button  menu */

.open-menu,
.close-menu {
  cursor: pointer;
}
/* Menu container */
.menu-container {
  position: fixed;
  inset: 0;
  transform: translateX(100%);
  transition: transform 1000ms ease;
  z-index: 90;
  background-color: $g-gray2;
  color: white;
  &-links {
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    &-link {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1rem;
    }
  }
}

/* Displayed state */
.menu-container.open {
  transform: translateX(0);
}

/* Logo and title styles */
.menu-header {
  margin: 0.5rem;
  display: flex;
  align-items: center;
}

.menu-header p {
  font-weight: bold;
  font-size: $menupc;
  text-align: left;
}

@media (max-width: 425px) {
  .menu-container {
    background-color: $g-gray2;
    display: flex;

    flex-direction: column;
  }
  .menu-links {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  }
}
</style>
