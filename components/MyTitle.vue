<script setup>
import { computed } from "vue";

const props = defineProps({
  el: String,
  size: String,
  color: String,
  font: String,
});

const className = computed(() => ({
  title: true,

  //size
  "-xl": props.size === "xlarge",
  "-l": props.size === "large",
  "-m": props.size === "medium",
  "-s": props.size === "small",

  //color

  " -sprimary": props.color === "primary",

  //font
  " -okine": props.font === "okine",
  " -arc": props.font === "archivo",
  " -roashe": props.font === "roashe",
}));
</script>
<template>
  <h4 v-if="el === 'h4'" :class="className">
    <slot></slot>
  </h4>
  <h3 v-else-if="el === 'h3'" :class="className">
    <slot></slot>
  </h3>
  <h2 v-else-if="el === 'h2'" :class="className">
    <slot></slot>
  </h2>
  <h1 v-else :class="className">
    <slot></slot>
  </h1>
</template>

<style lang="scss" scoped>
.title {
  font-family: $arc;
  font-size: $h1pc;
  font-weight: 700;
  word-wrap: break-word;
  > span {
    color: $b-black;
  }
  &.-xl {
    font-size: $h1pc;
  }
  &.-l {
    font-size: $h2pc;
  }
  &.-m {
    font-size: $h3pc;
  }
  &.-s {
    font-size: $h4pc;
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
  @media (max-width: 425px) {
    font-size: rem(1.5);
    font-weight: 700;
    word-wrap: break-word;
    > span {
      color: $b-black;
    }
    &.-xl {
      font-size: $h1tel;
    }
    &.-l {
      font-size: $h2tel;
    }
    &.-m {
      font-size: $h3tel;
    }
    &.-s {
      font-size: $h4tel;
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
        font-size: $h1tel;
      }
      &.-l {
        font-size: $h2tel;
      }
      &.-m {
        font-size: $h3tel;
      }
      &.-s {
        font-size: $h4tel;
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
