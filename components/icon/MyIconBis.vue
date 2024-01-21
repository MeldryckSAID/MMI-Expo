<script setup>
import Click from "./icons/MyClick.vue";
import Arrow from "./icons/MyArrow.vue";
import BottomLeft from "./icons/MyBottomLeft.vue";
import TopRight from "./icons/MyTopRight.vue";
import Losange from "./icons/MyLosange.vue";
import LosangeBis from "./icons/MyLosangeBis.vue";

const props = defineProps({
  name: String,
  position: String,
});

const getIcon = computed(() => {
  switch (props.name) {
    case "Arrow":
      return Arrow;
    case "BottomLeft":
      return BottomLeft;
    case "TopRight":
      return TopRight;
    case "Click":
      return Click;
    case "Losange":
      return Losange;
    case "LosangeBis":
      return LosangeBis;
  }
});
</script>

<template>
  <i :class="`iconBis -${position}`">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss">
.iconBis {
  display: flex;
  width: 50px;
  svg{
    width: 100%;
    height: 100%;
  }
}
</style>
