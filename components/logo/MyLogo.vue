<script setup>
import { computed } from "vue";

import logo from "../components/logo/logos/Logo.vue";
import mmi from "../components/logo/logos/LogoMmi.vue";

const props = defineProps({
  name: String,
  color: String,
  stroke: String,
  size: String,
  fill: String,
});
const getlogo = computed(() => {
  switch (props.name) {
    case "logo":
      return logo;
    case "mmi":
      return mmi;

    default:
      return logo;
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
  <i :class="className" class="logo">
    <component :is="getlogo" />
  </i>
</template>

<style lang="scss" scoped>
.logo {
  align-items: center;
  display: inline-flex;
  justify-content: center;

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
