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
  size: String,
  rotate: Boolean,
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
  <i :class="`iconBis -${position} -${size} ${rotate ? '-rotate' : ''}`">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss">
.iconBis {
  position: absolute;
  display: flex;
  width: 50px;
  svg {
    width: 100%;
    height: 100%;
  }

  &.-small {
    width: 20px;
  }
  &.-medium {
    width: 30px;
  }
  &.-big {
    width: 50px;
  }
  &.-topLeft {
    left: 0;
    top: 0;
    transform: translate(-35%, -50%);
    &.-medium,
    &.-small {
      transform: translate(-100%, -50%);
      &.-rotate {
        transform: translate(-100%, -50%) scaleX(-1);
      }
    }
    &.-rotate {
      transform: translate(-35%, -50%) scaleX(-1);
    }
  }
  &.-left {
    left: -75px;
    transform: translateX(-50%);
  }
  &.-topRight {
    right: 0;
    top: 0;
    transform: translate(60%, -80%);
  }
  &.-bottomLeft {
    left: 0;
    bottom: 0;
    transform: translate(-60%, 80%);
  }
  &.-bottomRight {
    right: 0;
    bottom: 0;
    transform: translate(100%, 80%);
    &.-rotate {
      transform: translate(80%, 80%) scaleX(-1);
    }
  }
}
</style>
