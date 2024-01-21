<script setup>
import { computed } from "vue";

import Insta from "../components/acon/acons/AconInsta.vue";
import X from "../components/acon/acons/AconX.vue";
import Web from "../components/acon/acons/AconWebsite.vue";
import TikTok from "../components/acon/acons/AconTt.vue";
import Line from "../components/acon/acons/AconLine.vue";

const props = defineProps({
  name: String,
  color: String,
  stroke: String,
  size: String,
  fill: String,
  link: String,
});
const getIcon = computed(() => {
  switch (props.name) {
    case "X":
      return X;
    case "Insta":
      return Insta;
    case "web":
      return Web;
    case "tt":
      return TikTok;
    case "line":
      return Line;

    default:
      return X;
  }
});

const className = computed(() => ({
  " -primary": props.color === "primary",
  " -secondary": props.color === "secondary",

  " -sprimary": props.stroke === "primary",
  " -ssecondary": props.stroke === "secondary",
  " -ssans": props.stroke === "base",

  " -small": props.size === "small",
  " -regular": props.size === "regular",
  " -big": props.size === "big",

  " -fblack": props.fill === "black",
  " -fsans": props.fill === "base",
  " -fwhite": props.fill === "white",
}));
</script>

<template>
  <a :href="link">
    <i :class="className" class="icon">
      <component :is="getIcon" />
    </i>
  </a>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  display: inline-flex;
  // height: rem(50);
  justify-content: center;
  // width: rem(50);

  //background
  &.-primary {
    background: red;
  }
  &.-secondary {
    background: aqua;
  }

  //fill
  &-.fwhite {
    fill: aqua;
  }
  &-.fblack {
    fill: red;
  }
  &-.fsans {
    fill: none;
  }

  //stroke

  &.-sprimary {
    color: red;
  }
  &.-ssecondary {
    color: aqua;
  }

  &.-ssans {
    color: none;
  }
  //Size
  &.-small {
    svg {
      scale: 0.5;
    }
    height: rem(25);
    width: rem(25);
  }
  &.-regular {
    height: rem(50);
    width: rem(50);
  }
  &.-big {
    svg {
      scale: 1.5;
    }
    height: rem(100);
    width: rem(100);
  }
}
</style>
