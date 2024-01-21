<template>
  <div class="outro">
    <div class="outro-presentation">
      <MyTitle class="outro-presentation-titre" el="h1" size="xlarge">
        <div class="outro-presentation-titre-item">
          <MyIcon class="outro-presentation-titre-item-top" name="Diamant" />
          <slot name="title"></slot>
          <MyIcon class="outro-presentation-titre-item-bottom" name="Sparkle" />
        </div>
      </MyTitle>
    </div>
    <Myacon class="outro-line" name="line" />
    <p>
      <slot name="content"></slot>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  lienTT: String,
  lienInsta: String,
  lienWeb: String,
  lienX: String,
});
</script>

<style lang="scss" scoped>
.outro {
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    display: grid;

    width: 800px;
  }
  &-item {
    display: flex;
    flex-direction: column;
  }
  &-presentation {
    display: flex;
    align-items: center;
    gap: 30px;

    &-titre {
      text-align: center;
      &-item {
        display: flex;
        flex-direction: row;
        gap: 10px;
        &-top {
          display: flex;
          align-items: flex-start;
        }
        &-bottom {
          display: flex;
          align-items: flex-end;
        }
      }
    }
  }
}

@media (max-width: 435px) {
  .outro {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2%;
    &-line {
      width: 100%;
      height: 30%;
    }
    &-item {
      display: flex;
      flex-direction: column;
    }
    &-presentation {
      align-items: center;

      display: flex;
      gap: 30px;

      &-titre {
        text-align: center;
      }
      &-item {
        display: flex;
        flex-direction: column;
        gap: 10px;
        &-top {
          display: flex;
        }
      }
    }
  }
}
</style>
