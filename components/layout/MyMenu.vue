<template>
 
    <MyIcon
      class="menu-button"
      aria-controls="menu"
      :aria-expanded="menuOuvert"
      @click="menuOuvert = !menuOuvert"
      :class="[menuOuvert ? 'hidden' : '']"
      name="close"
    />


  <!-- Menu hamburger déroulé -->
  <div class="menu-container" :class="[menuOuvert ? 'open' : '']">
    <div class="menu-header">
      <nuxt-link to="/">
        <MyIcon name="open" class="stroke-white stroke-2" />
      </nuxt-link>
    </div>
    <p>test</p>
  </div>
</template>

<script setup>
let menuOuvert = ref(false);
</script>

<style lang="scss" scoped>
/* Button to hide menu */


/* Menu container */
.menu-container {
  position: fixed;
  inset: 0;
  transform: translateX(-100%);
  transition: transform 1000ms ease;
  z-index: 90;
  background-color: aqua;
  color: white;
}

/* Displayed state */
.menu-container.open {
  transform: translateX(0);
}

/* Logo and title styles */
.menu-header {
  margin: 5rem;
  display: flex;
  align-items: center;
}

.menu-header p {
  font-weight: bold;
  font-size: 40px;
  text-align: left;
}

</style>
