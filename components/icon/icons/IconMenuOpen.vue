<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="59"
      height="41"
      viewBox="0 0 59 41"
      fill="none"
      class="openn"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      :class="{ hover: isHovered }"
    >
      <path
        ref="path1"
        d="M14.9854 2.73193L51.0156 38.2681"
        stroke="black"
        stroke-width="3.66667"
        stroke-linecap="round"
        :stroke-dasharray="path1Length"
        :stroke-dashoffset="path1Offset"
      />
      <path
        ref="path2"
        d="M14.9851 38.268L51.0154 2.73184"
        stroke="black"
        stroke-width="3.66667"
        stroke-linecap="round"
        :stroke-dasharray="path2Length"
        :stroke-dashoffset="path2Offset"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      path1Length: 0,
      path1Offset: 0,
      path2Length: 0,
      path2Offset: 0,
    };
  },
  methods: {
    onMouseOver() {
      this.isHovered = true;
      this.animatePath(this.$refs.path1, "path1Length", "path1Offset");
      this.animatePath(this.$refs.path2, "path2Length", "path2Offset", true);
    },
    onMouseOut() {
      this.isHovered = false;
      this.resetPathAnimation("path1Offset");
      this.resetPathAnimation("path2Offset");
    },
    animatePath(path, lengthProp, offsetProp, reverse = false) {
      const length = path.getTotalLength();
      this[lengthProp] = length;
      this[offsetProp] = reverse ? -length : length;
    },
    resetPathAnimation(offsetProp) {
      this[offsetProp] = 0;
    },
  },
};
</script>

<style scoped>
.hover path {
  transition: stroke-dashoffset 0.5s ease-out;
}
@media (max-width: 425px) {
  .openn {
    width: 40px;
  }
}
</style>
