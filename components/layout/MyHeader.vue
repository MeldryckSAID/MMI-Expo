<script setup></script>

<template>
  <header>
    <div class="header__content">
      <nuxt-link to="/exposition"
        ><MyIcon class="virtuel" name="visite"
      /></nuxt-link>

      <nuxt-link to="/" class="link"> <MyLogo name="logo" /> </nuxt-link>

      <MyMenu />
    </div>
  </header>
</template>

<style lang="scss">
.header__content {
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-inline: 10%;
  padding-bottom: 1%;
  padding-top: 1%;
  align-items: center;
  border-bottom: 1px solid var(--Black, #000);
  box-shadow: 0px 2px 15px 2px rgba(0, 0, 0, 0.48);
  .virtuel {
    display: none;
    visibility: hidden;
  }
}
@media (min-width: 425px) {
  .header__content {
    justify-content: space-between;
    .virtuel {
      display: flex;
      visibility: visible;
    }
  }

}
</style>
