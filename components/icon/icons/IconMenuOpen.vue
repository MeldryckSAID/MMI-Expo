<template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="26"
      viewBox="0 0 63 26"
      fill="none"
      class="openn"
      @mouseover="onMouseOver"
      @mouseout="onMouseOut"
      :class="{ hover: isHovered }"
    >
      <path
        ref="path1"
        d="M9.7002 2L53.7002 2"
        stroke="black"
        stroke-width="3.66667"
        stroke-linecap="round"
        :stroke-dasharray="path1Length"
        :stroke-dashoffset="path1Offset"
      />
      <path
        ref="path2"
        d="M2 13L46 13"
        stroke="black"
        stroke-width="3.66667"
        stroke-linecap="round"
        :stroke-dasharray="path2Length"
        :stroke-dashoffset="path2Offset"
      />
      <path
        ref="path3"
        d="M16.667 24L60.667 24"
        stroke="black"
        stroke-width="3.66667"
        stroke-linecap="round"
        :stroke-dasharray="path3Length"
        :stroke-dashoffset="path3Offset"
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
      path3Length: 0,
      path3Offset: 0,
    };
  },
  methods: {
    onMouseOver() {
      this.isHovered = true;
      this.animatePath(this.$refs.path1, "path1Length", "path1Offset");
      this.animatePath(this.$refs.path2, "path2Length", "path2Offset", true);
      this.animatePath(this.$refs.path3, "path3Length", "path3Offset");
    },
    onMouseOut() {
      this.isHovered = false;
      this.resetPathAnimation("path1Offset");
      this.resetPathAnimation("path2Offset");
      this.resetPathAnimation("path3Offset");
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

<!-- <template>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="63"
      height="26"
      viewBox="0 0 63 26"
      fill="none"
      @mouseover="onMouseOver"
      :class="{ hover: isHovered }"
    >
      <path
        ref="path1"
        d="M9.7002 2L53.7002 2"
        stroke="black"
        stroke-width="3.66667"
        stroke-linecap="round"
        :stroke-dasharray="path1Length"
        :stroke-dashoffset="path1Offset"
      />
      <path
        ref="path2"
        d="M2 13L46 13"
        stroke="black"
        stroke-width="3.66667"
        stroke-linecap="round"
        :stroke-dasharray="path2Length"
        :stroke-dashoffset="path2Offset"
      />
      <path
        ref="path3"
        d="M16.667 24L60.667 24"
        stroke="black"
        stroke-width="3.66667"
        stroke-linecap="round"
        :stroke-dasharray="path3Length"
        :stroke-dashoffset="path3Offset"
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
      path3Length: 0,
      path3Offset: 0,
    };
  },
  methods: {
    onMouseOver() {
      this.isHovered = true;
      this.animatePath(this.$refs.path1, "path1Length", "path1Offset");
      this.animatePath(this.$refs.path2, "path2Length", "path2Offset", true);
      this.animatePath(this.$refs.path3, "path3Length", "path3Offset");
    },
    animatePath(path, lengthProp, offsetProp, reverse = false) {
      const length = path.getTotalLength();
      this[lengthProp] = length;
      this[offsetProp] = reverse ? -length : length;
    },
  },
};
</script>

<style scoped>
.hover path {
  animation: dash-animation 2s linear infinite alternate;
}

@keyframes dash-animation {
  to {
    stroke-dashoffset: 0;
  }
}
</style> -->
