<script setup>
import { computed } from "vue";

import close from "../components/icon/icons/IconMenuClose.vue";
import open from "../components/icon/icons/IconMenuOpen.vue";
import visite from "../components/icon/icons/IconVisite.vue";
import logo from "../components/icon/icons/Logo.vue";

const props = defineProps({
  name: String,
  color: String,
  stroke: String,
  size: String,
  fill: String,
});
const getIcon = computed(() => {
  switch (props.name) {
    case "open":
      return open;
    case "close":
      return close;
    case "visite":
      return visite;
    case "logo":
      return logo;
    

    default:
      return open;
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
  <i :class="className" class="icon">
    <component :is="getIcon" />
  </i>
</template>

<style lang="scss" scoped>
.icon {
  align-items: center;
  display: inline-flex;
  height: rem(50);
  justify-content: center;
  width: rem(50);

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
