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
  MathUtils,
  MeshPhongMaterial,
  TextureLoader,
  Raycaster,
  Vector2,
} from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

const canvas = ref(undefined);

let scene: Scene;
let camera: PerspectiveCamera;
let renderer: WebGLRenderer;

let character: Object3D;
let characterBox: Box3;
let canMove = ref(true);

let listIntersect: Mesh[] = [];

let listArt = ["stockholm.jpg", "image1.avif", "image2.webp"];

let isLoaded = ref(false);

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
  const light = new PointLight(0xffffff, 10000, 1000);
  light.position.set(0, 50, 0);
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
  const groundMaterial = new MeshPhongMaterial({
    color: 0x151515,
    specular: 0xffffff,
    shininess: 50,
    emissive: 0x101010,
  });

  // Create a mesh with the geometry and material
  const ground = new Mesh(groundGeometry, groundMaterial);

  // Rotate the ground to be horizontal
  ground.rotation.x = -Math.PI / 2;

  // Add the ground to the scene
  scene.add(ground);

  //add 4 walls
  const wallGeometry = new BoxGeometry(60, 30, 5);
  const wallGeometry2 = new BoxGeometry(30, 30, 5);
  const wallMaterial = new MeshPhongMaterial({
    color: 0x323232,
    specular: 0xffffff,
    shininess: 50,
    emissive: 0x323232,
  });
  const wall1 = new Mesh(wallGeometry, wallMaterial);
  const wall2 = new Mesh(wallGeometry2, wallMaterial);
  const wall3 = new Mesh(wallGeometry, wallMaterial);
  const wall4 = new Mesh(wallGeometry2, wallMaterial);
  wall1.position.set(0, 0, 15);
  wall2.position.set(30, 0, 0);
  wall2.rotation.y = Math.PI / 2;
  wall3.position.set(0, 0, -15);
  wall4.position.set(-30, 0, 0);
  wall4.rotation.y = Math.PI / 2;
  scene.add(wall2, wall1, wall3, wall4);
  collisionBoxList.push(
    new Box3().setFromObject(wall1),
    new Box3().setFromObject(wall2),
    new Box3().setFromObject(wall3),
    new Box3().setFromObject(wall4)
  );
  let rotation = 0;
  let j = 0;
  let etage = 0;
  let etageI = 0;

  listArt.forEach((art, i) => {
    //add smaller wall inside to post images
    const wallImageGeometry = new BoxGeometry(16 / 2, 9 / 2, 1);
    const wallImage = new Mesh(wallImageGeometry, wallMaterial);
    let xStart = -18;

    let x = i < 12 ? i * 9 + xStart : etageI * 9 + xStart;
    let y = 3 + 6 * etage;
    let z = 13.2;

    if (etage > 0) etageI++;

    switch (rotation) {
      case 0:
        if (x > 18) {
          x = 28.2;
          z = 0;
          wallImage.rotation.y = Math.PI / 2;
          rotation = 2;
        }
        break;
      case 2:
        x = 18 - j * 9;
        z = -13.2;
        wallImage.rotation.y = Math.PI;
        j++;

        if (x < -18) {
          x = -28.2;
          z = 0;
          wallImage.rotation.y = -Math.PI / 2;
          rotation = 0;
          etage++;
          j = 0;
          etageI = 0;
        }

        break;
    }

    wallImage.position.set(x, y, z);

    //add an image on the wall
    const imageGeometry = new BoxGeometry(16 / 2, 9 / 2, 0.25);
    const imageMaterial = new MeshBasicMaterial({
      map: new TextureLoader().load("/" + art),
    });
    const image = new Mesh(imageGeometry, imageMaterial);
    image.position.set(0, 0, -0.6);
    wallImage.add(image);
    wallImage.name = art;

    scene.add(wallImage);
    listIntersect.push(wallImage);
  });

  render();
};

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
    let speed = 5;
    // Update character position based on keyboard input
    if (keys.value.up && canMove.value) character.translateZ(speed * delta);
    if (keys.value.down && canMove.value) character.translateZ(-speed * delta);
    if (keys.value.left && canMove.value) character.rotation.y += speed * delta;
    if (keys.value.right && canMove.value)
      character.rotation.y -= speed * delta;
    if (
      (keys.value.up || keys.value.left || keys.value.right) &&
      canMove.value
    ) {
      setAction(animationActions[1], false);
    } else if (keys.value.down && canMove.value) {
      setAction(animationActions[1], true);
    } else {
      setAction(animationActions[2], false);
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
        if (keys.value.up) character.translateZ(-speed * delta * 2);
        if (keys.value.down) character.translateZ(speed * delta * 2);
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

            setAction(animationActions[2], false);

            modelReady = true;
            isLoaded.value = true;
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

const setAction = (toAction: AnimationAction, reverse: boolean) => {
  if (toAction != activeAction) {
    lastAction = activeAction;
    activeAction = toAction;
    lastAction.fadeOut(1);
    activeAction.reset();
    activeAction.fadeIn(1);
    activeAction.play();
    if (reverse) {
      activeAction.timeScale = -1;
    } else {
      activeAction.timeScale = 1;
    }
  }
};

const keydownHandler = (e: KeyboardEvent) => {
  if (e.code === "KeyW") keys.value.up = true;
  if (e.code === "KeyS") keys.value.down = true;
  if (e.code === "KeyA") keys.value.left = true;
  if (e.code === "KeyD") keys.value.right = true;
};

const keyupHandler = (e: KeyboardEvent) => {
  if (e.code === "KeyW") keys.value.up = false;
  if (e.code === "KeyS") keys.value.down = false;
  if (e.code === "KeyA") keys.value.left = false;
  if (e.code === "KeyD") keys.value.right = false;
};

const raycaster = new Raycaster();
const mouse = new Vector2();
let src = ref("");

const onClick = (e: MouseEvent) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  if (src.value === "") {
    //detect only if not already looking at an image

    const intersects = raycaster.intersectObjects(listIntersect);
    if (intersects.length > 0) {
      src.value = intersects[0].object.parent?.name || "";
      canMove.value = false;
      raycaster.layers.disableAll();
    }
  }
};
const escape = (e: KeyboardEvent) => {
  if (e.code === "Escape") {
    hideImg();
  }
};

const hideImg = () => {
  src.value = "";
  canMove.value = true;
  setTimeout(() => {
    raycaster.layers.enableAll();
  }, 100);
};

type keyValue = "KeyA" | "KeyW" | "KeyS" | "KeyD";

const keyClick = (keyValue: keyValue, isPressed: boolean) => {
  if (keyValue === "KeyW") keys.value.up = isPressed ? true : false;
  if (keyValue === "KeyS") keys.value.down = isPressed ? true : false;
  if (keyValue === "KeyA") keys.value.left = isPressed ? true : false;
  if (keyValue === "KeyD") keys.value.right = isPressed ? true : false;
  if (isPressed) {
    raycaster.layers.disableAll();
  } else {
    setTimeout(() => {
      raycaster.layers.enableAll();
    }, 100);
  }
};

onMounted(() => {
  setup();
  animate();

  document.addEventListener("click", onClick, false);
  document.addEventListener("keydown", keydownHandler, false);
  document.addEventListener("keyup", keyupHandler, false);
  document.addEventListener("keyup", escape, false);

  window.addEventListener("resize", onWindowResize, false);
});

onUnmounted(() => {
  document.removeEventListener("click", onClick, false);
  document.removeEventListener("keydown", keydownHandler, false);
  document.removeEventListener("keyup", keyupHandler, false);
  window.removeEventListener("resize", onWindowResize, false);
});

definePageMeta({
  layout: "exposition",
});
</script>

<template>
  <div class="exposition">
    <div class="loader" :class="{ '-show': isLoaded }"></div>
    <div class="exposition__wrapper" :class="{ '-show': src }">
      <span @click="hideImg()">X</span>
      <img :src="src" aria-hidden class="exposition__image" />
    </div>
    <div class="exposition__cursor">
      <div
        class="exposition__keyArrow -left"
        @pointerdown="keyClick('KeyA', true)"
        @pointerup="keyClick('KeyA', false)"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 185.343 185.343"
        >
          <g>
            <g>
              <path
                style="fill: #fff"
                d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
          l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
          c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div
        class="exposition__keyArrow -up"
        @pointerdown="keyClick('KeyW', true)"
        @pointerup="keyClick('KeyW', false)"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 185.343 185.343"
        >
          <g>
            <g>
              <path
                style="fill: #fff"
                d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
          l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
          c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div
        class="exposition__keyArrow -down"
        @pointerdown="keyClick('KeyS', true)"
        @pointerup="keyClick('KeyS', false)"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 185.343 185.343"
        >
          <g>
            <g>
              <path
                style="fill: #fff"
                d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
          l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
          c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
              />
            </g>
          </g>
        </svg>
      </div>
      <div
        class="exposition__keyArrow -right"
        @pointerdown="keyClick('KeyD', true)"
        @pointerup="keyClick('KeyD', false)"
      >
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 185.343 185.343"
        >
          <g>
            <g>
              <path
                style="fill: #fff"
                d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
          l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
          c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="exposition__keys">
      <span>avancer : Z</span>
      <span>reculer : S</span>
      <span>gauche : Q</span>
      <span>droite : D</span>
      <span>quitter image : esc</span>
      <span>voir image : click souris</span>
    </div>
    <canvas ref="canvas" class="canvas" :class="{ '-show': isLoaded }" />
  </div>
  <div class="expoWarning">
    Turn your screen || tournez votre écrans en paysage
  </div>
</template>

<style lang="scss">
.loader {
  background: black;
  width: 100vw;
  height: 100vh;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
    border-radius: 50%;
    border: 4px solid $white;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }
  &.-show {
    display: none;
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.canvas {
  display: none;
  width: 100vw;
  height: 100vh;
  &.-show {
    display: flex;
  }
}

.exposition {
  visibility: visible;
  @media (orientation: portrait) {
    visibility: hidden;
  }
  &__image {
    width: 80vw;
    height: 80vh;
    object-fit: contain;
    z-index: 150;
  }
  &__cursor {
    position: absolute;
    z-index: 10;
    bottom: 1rem;
    left: 1rem;
    display: grid;
    grid-template:
      "left up right"
      "left down right";
    @media (min-width: 1500px) {
      display: none;
    }
    .exposition__keyArrow {
      display: grid;
      box-sizing: border-box;
      place-items: flex-end;
      svg {
        border: 3px solid white;
        box-sizing: border-box;
        padding: 0.75rem;
        width: 50px;
        height: 50px;
      }
      &.-left {
        grid-area: left;
        svg {
          transform: rotate(180deg);
        }
      }
      &.-right {
        grid-area: right;
      }
      &.-up {
        grid-area: up;
        svg {
          transform: rotate(-90deg);
        }
      }
      &.-down {
        grid-area: down;
        svg {
          transform: rotate(90deg);
        }
      }
    }
  }
  &__keys {
    position: absolute;
    top: 0;
    left: 0;
    color: $white;
    font-size: 1rem;
    z-index: 100;
    padding: 1rem;
    display: none;
    @media (min-width: 1500px) {
      display: unset;
    }
    & span {
      display: block;
      margin-bottom: 0.5rem;
    }
  }
  &__wrapper {
    position: absolute;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.555);
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: none;
    & span {
      position: absolute;
      top: 1rem;
      right: 1rem;
      border: 1px solid $white;
      width: 2rem;
      height: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 1rem;
      color: $white;
      font-size: 2rem;
      cursor: pointer;
    }
    &.-show {
      display: flex;
    }
  }
}
.expoWarning {
  position: absolute;
  top: 0;
  display: grid;
  place-content: center;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
