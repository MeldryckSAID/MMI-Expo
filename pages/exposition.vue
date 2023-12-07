<script lang="ts" setup>
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PlaneGeometry,
  MeshStandardMaterial,
  Scene,
  Box3,
  WebGLRenderer,
  PerspectiveCamera,
  PointLight,
} from "three";

let scene: Scene;
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;

const setup = () => {
  scene = new Scene();
  camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const light = new PointLight(0xffffff, 1000);
  light.position.set(2.5, 7.5, 15);
  scene.add(light);

  camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.set(0.8, 1.4, 1.0);
  renderer = new WebGLRenderer({ canvas: canvas.value });
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Create a plane geometry for the ground
  const groundGeometry = new PlaneGeometry(100, 100, 32, 32);

  // Create a basic material for the ground
  const groundMaterial = new MeshStandardMaterial({ color: 0xffffff });

  // Create a mesh with the geometry and material
  const ground = new Mesh(groundGeometry, groundMaterial);

  // Rotate the ground to be horizontal
  ground.rotation.x = -Math.PI / 2;

  // Add the ground to the scene
  scene.add(ground);
  render()
};

const canvas = ref(null);

const animate = () => {
  requestAnimationFrame(animate);
  render()
};

function render() {
  renderer.render(scene, camera);
}

onMounted(() => {
  setup();
  animate();
});

onUnmounted(() => {

});
</script>

<template>
  <canvas ref="canvas" class="canvas" />
</template>

<style lang="scss">
.canvas {
  display: flex;
  width: 100vw;
  height: 100vh;
}
</style>
