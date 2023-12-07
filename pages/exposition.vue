<script lang="ts" setup>
import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  AnimationMixer,
  AnimationAction,
  PlaneGeometry,
  MeshStandardMaterial,
  Scene,
  Box3,
  WebGLRenderer,
  PerspectiveCamera,
  PointLight,
} from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

let scene: Scene;
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;

let character: Object3D;
let characterBox: Box3;

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
  render();
};

const canvas = ref(null);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  render();
}

const animate = () => {
  requestAnimationFrame(animate);
  render();
};

function render() {
  renderer.render(scene, camera);
}

let mixer: AnimationMixer;
let modelReady = false;
const animationActions: AnimationAction[] = [];
let activeAction: AnimationAction;
let lastAction: AnimationAction;
const fbxLoader: FBXLoader = new FBXLoader();

fbxLoader.load(
  "/fbx/character/char.fbx",
  (char) => {
    character = char;
    char.scale.set(0.01, 0.01, 0.01);
    mixer = new AnimationMixer(char);

    const animationAction = mixer.clipAction(
      (char as Object3D).animations[0]
    );
    animationActions.push(animationAction);
    activeAction = animationActions[0];

    scene.add(char);

    //add an animation from another file
    fbxLoader.load(
      "/fbx/animations/Walking.fbx",
      (walkAnim) => {
        console.log("loaded walking");

        const animationAction = mixer.clipAction(
          (walkAnim as Object3D).animations[0]
        );
        animationActions.push(animationAction);

        fbxLoader.load(
          "/fbx/animations/Idle.fbx",
          (idleAnim) => {
            console.log("loaded Idle");

            const animationAction = mixer.clipAction(
              (idleAnim as Object3D).animations[0]
            );
            animationActions.push(animationAction);

            setAction(animationActions[2]);

            fbxLoader.load(
              "/fbx/animations/WalkingB.fbx",
              (walkBackAnim) => {
                console.log("loaded WalkingBackwards");

                const animationAction = mixer.clipAction(
                  (walkBackAnim as Object3D).animations[0]
                );
                animationActions.push(animationAction);

                modelReady = true;
                characterBox = new Box3().setFromObject(character);
              },
              (xhr) => {
                // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
              },
              (error) => {
                console.log(error);
              }
            );
          },
          (xhr) => {
            // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (xhr) => {
        // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (xhr) => {
    // console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
  },
  (error) => {
    console.log(error);
  }
);

const animations = {
  default: function () {
    setAction(animationActions[0]);
  },
  walking: function () {
    setAction(animationActions[1]);
  },
  Idle: function () {
    setAction(animationActions[2]);
  },
  walkingBackwards: function () {
    setAction(animationActions[3]);
  },
};

const setAction = (toAction: AnimationAction) => {
  if (toAction != activeAction) {
    lastAction = activeAction;
    activeAction = toAction;
    //lastAction.stop()
    lastAction.fadeOut(1);
    activeAction.reset();
    activeAction.fadeIn(1);
    activeAction.play();
  }
};

onMounted(() => {
  setup();
  animate();
  window.addEventListener("resize", onWindowResize, false);
});

onUnmounted(() => {
  window.removeEventListener("resize", onWindowResize, false);
});

definePageMeta({
  layout: "exposition",
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
