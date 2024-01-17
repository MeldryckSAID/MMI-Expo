<script setup>
import { computed } from "vue";

const props = defineProps({
  el: String,
  size: String,
  color: String,
  font: String,

  text: true,
});

const className = computed(() => ({
  //size
  "-xl": props.size === "xlarge",
  "-l": props.size === "large",
  "-m": props.size === "medium",

  //color

  " -sprimary": props.color === "primary",
  " -white": props.color === "white",

  //font
  " -okine": props.font === "okine",
  " -arc": props.font === "archivo",
  " -roashe": props.font === "roashe",
}));
</script>
<template>
  <p v-if="el === 'p'" :class="className">
    <slot></slot>
  </p>
</template>

<style lang="scss" scoped>
.text {
  font-family: $okine;
  font-size: $text1pc;

  > span {
    color: $b-black;
  }
  &.-xl {
    font-size: $text1pc;
    background-color: aqua;
  }
  &.-l {
    font-size: $text2pc;
    background-color: pink;
  }
  &.-m {
    font-size: $text3pc;
    background-color: red;
  }

  &.-sprimary {
    color: $b-black;
  }
  &.-white {
    color: $w-white;
  }
  &.-okine {
    font-family: $okine;
  }
  &.-arc {
    font-family: $arc;
  }
  &.-roashe {
    font-family: $roashe;
  }
  @media (max-width: 425px) {
    font-size: text1tel;
    font-weight: 700;
    word-wrap: break-word;
    > span {
      color: $b-black;
    }
    &.-xl {
      font-size: $text1tel;
    }
    &.-l {
      font-size: $text2tel;
    }
    &.-m {
      font-size: $text3tel;
    }

    &.-sprimary {
      color: $b-black;
    }
    &.-okine {
      font-family: $okine;
    }
    &.-arc {
      font-family: $arc;
    }
    &.-roashe {
      font-family: $roashe;
    }
  }
  @include x-large-up {
    .title {
      &.-xl {
        font-size: $text1pc;
      }
      &.-l {
        font-size: $text2pc;
      }
      &.-m {
        font-size: $text3pc;
      }

      &.-okine {
        font-family: $okine;
      }
      &.-arc {
        font-family: $arc;
      }
      &.-roashe {
        font-family: $roashe;
      }
    }
  }
}
</style>
