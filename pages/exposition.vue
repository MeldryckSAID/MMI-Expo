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
  Vector3,
  Clock,
} from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

let scene: Scene;
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;

let character: Object3D;
let characterBox: Box3;

const collisionBoxList = <Box3[]>[];

const keys = ref({
  up: false,
  down: false,
  left: false,
  right: false,
});

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

const clock = new Clock();

const cameraHeight = 2;
const cameraDistance = 2;

const animate = () => {
  const delta = clock.getDelta();
  requestAnimationFrame(animate);

  if (modelReady) {
    mixer.update(clock.getDelta());
    mixer.update(delta);
    let speed = 1.5;
    // Update character position based on keyboard input
    if (keys.value.up) character.translateZ(speed * delta);
    if (keys.value.down) character.translateZ(-speed * delta);
    if (keys.value.left) character.rotation.y += speed * delta;
    if (keys.value.right) character.rotation.y -= speed * delta;
    if (keys.value.up || keys.value.left || keys.value.right) {
      setAction(animationActions[1]);
    } else if (keys.value.down) {
      setAction(animationActions[3]);
    } else {
      setAction(animationActions[2]);
    }

    const nextPosition = character.position
      .clone()
      .add(new Vector3(0, 0, speed * delta));
    characterBox.setFromCenterAndSize(
      nextPosition,
      characterBox.getSize(new Vector3())
    );
    collisionBoxList.forEach((box) => {
      if (characterBox.intersectsBox(box)) {
        if (keys.value.up) character.translateZ(-speed * delta);
        if (keys.value.down) character.translateZ(speed * delta);
      }
    });

    // Position the camera behind and slightly above the character
    const x =
      character.position.x -
      cameraDistance * Math.sin(character.rotation.y) -
      0.3;
    const z =
      character.position.z - cameraDistance * Math.cos(character.rotation.y);
    camera.position.set(x, character.position.y + cameraHeight, z);

    // Calculate a point far in front of the character and make the camera look at that point
    const lookAtPoint = new Vector3(
      character.position.x + 10 * Math.sin(character.rotation.y),
      character.position.y,
      character.position.z + 10 * Math.cos(character.rotation.y)
    );
    camera.lookAt(lookAtPoint);
  }
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

    const animationAction = mixer.clipAction((char as Object3D).animations[0]);
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
  document.addEventListener(
    "keydown",
    (e) => {
      if (e.code === "KeyW") keys.value.up = true;
      if (e.code === "KeyS") keys.value.down = true;
      if (e.code === "KeyA") keys.value.left = true;
      if (e.code === "KeyD") keys.value.right = true;
      console.log(keys.value);
      
    },
    false
  ); // keydown

  document.addEventListener(
    "keyup",
    (e) => {
      if (e.code === "KeyW") keys.value.up = false;
      if (e.code === "KeyS") keys.value.down = false;
      if (e.code === "KeyA") keys.value.left = false;
      if (e.code === "KeyD") keys.value.right = false;
    },
    false
  ); //
  window.addEventListener("resize", onWindowResize, false);
});

onUnmounted(() => {
  document.removeEventListener("keydown", () => {});
  document.removeEventListener("keyup", () => {});
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
