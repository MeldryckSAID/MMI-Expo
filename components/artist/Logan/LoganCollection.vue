<template>
  <div>
    <ul class="galery">
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre2.url"
          :alt="item.oeuvre2.alt"
          @click="showDetails(item.oeuvre2, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre3.url"
          :alt="item.oeuvre3.alt"
          @click="showDetails(item.oeuvre3, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre4.url"
          :alt="item.oeuvre4.alt"
          @click="showDetails(item.oeuvre4, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre5.url"
          :alt="item.oeuvre5.alt"
          @click="showDetails(item.oeuvre5, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre6.url"
          :alt="item.oeuvre6.alt"
          @click="showDetails(item.oeuvre6, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre7.url"
          :alt="item.oeuvre7.alt"
          @click="showDetails(item.oeuvre7, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre8.url"
          :alt="item.oeuvre8.alt"
          @click="showDetails(item.oeuvre8, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre9.url"
          :alt="item.oeuvre9.alt"
          @click="showDetails(item.oeuvre9, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre10.url"
          :alt="item.oeuvre10.alt"
          @click="showDetails(item.oeuvre10, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre11.url"
          :alt="item.oeuvre11.alt"
          @click="showDetails(item.oeuvre11, index)"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre12.url"
          :alt="item.oeuvre12.alt"
          @click="showDetails(item.oeuvre12, index)"
        />
      </li>
    </ul>

   <div class="image-details" v-if="selectedImage">
      <div class="image-details-close">
        <MyIcon
          class="image-details-close-item"
          @click="hideDetails()"
          name="x"
        />
      </div>
      <div class="image-details-container">
        <div class="image-details-container-navigation">
          <!-- <MyIcon @click="showPreviousImage" name="previous" /> -->
          <img :src="selectedImage.url" />
          <!-- <MyIcon @click="showNextImage" name="next" /> -->
        </div>
        <div class="image-details-container-info">
          <MyTitle el="h2">{{ selectedImage.title }}</MyTitle>
          <p>{{ selectedImage.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  collection: Array,
});

const selectedImage = ref(null);
const currentIndex = ref(1);

const showDetails = (oeuvre, index) => {
  currentIndex.value = index;
  selectedImage.value = {
    url: oeuvre.url,
    title: oeuvre.title,
    description: oeuvre.alt,
  };
};

const showNextImage = () => {
  let nextIndex = currentIndex.value + 1;
  if (nextIndex >= props.collection.length) {
    nextIndex = 0; // Revenir au début si on atteint la fin
  }
  showDetails(props.collection[nextIndex], nextIndex);
};

const showPreviousImage = () => {
  let prevIndex = currentIndex.value - 1;
  if (prevIndex < 0) {
    prevIndex = props.collection.length - 1; // Aller à la fin si on est au début
  }
  showDetails(props.collection[prevIndex], prevIndex);
};

const hideDetails = () => {
  selectedImage.value = null;
};
</script>

<style lang="scss" scoped>
.galery {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2vmin;
  padding: 0 14px;

  &::after {
    content: "";
    display: block;
    flex-grow: 10;
  }

  li {
    cursor: pointer;
    list-style-type: none;
    height: 350px;
    flex-grow: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.image-details {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: $w-white;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 80%;
    max-height: 60%;
    margin-bottom: 20px;
  }
  &-close {
    width: 100vh;
    display: flex;
    justify-content: flex-end;
    &-item {
      display: flex;

      padding: 20px;
      border-radius: 100%;
    }

    cursor: pointer;
  }

  &-container {
    display: flex;
    flex-direction: column;

    align-items: center;
    &-navigation {
      width: fit-content;
      display: flex;
      justify-content: space-around;
      height: 400px;
      gap: 30px;
      align-items: center;

      height: 500px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
      margin-bottom: 20px;
    }
    &-info {
      text-align: center;
      max-width: 90%;

      h2 {
        font-size: 2rem;
        margin-bottom: 10px;
      }

      p {
        font-size: 1.25rem;
        line-height: 1.5;
        font-family: $okine;
      }
    }
  }
}

@media (max-width: 435px) {
  .image-details {
    display: grid;

    img {
      max-width: 90%;
      max-height: 70%;
    }

    &-close {
      width: 310px;
      justify-content: start;
      padding: 10px;

      &-item {
        padding: 15px;
      }
    }

    &-container {
      &-navigation {
        width: fit-content;
        display: flex;
        justify-content: space-around;
        height: 400px;
        gap: 30px;
        align-items: center;

        height: 500px;
      }
      &-info {
        h2 {
          font-size: 1.5rem;
        }

        p {
          font-size: 0.625rem;

          width: 310px;
        }
      }
    }
  }
}
</style>
