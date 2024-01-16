<template>
  <div>
    <ul class="galery">
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre1.url"
          :alt="item.oeuvre1.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre2.url"
          :alt="item.oeuvre2.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre3.url"
          :alt="item.oeuvre3.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre4.url"
          :alt="item.oeuvre4.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre5.url"
          :alt="item.oeuvre5.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre6.url"
          :alt="item.oeuvre6.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre7.url"
          :alt="item.oeuvre7.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre8.url"
          :alt="item.oeuvre8.alt"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  collection: Array,
});
</script>

<style lang="scss" scoped>
.galery {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2vmin;
  padding: 0 14px;
}
.galery::after {
  content: "";
  display: block;
  flex-grow: 10;
}
.galery li {
  list-style-type: none;
  height: 350px;
  flex-grow: 1;
}
.galery img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
