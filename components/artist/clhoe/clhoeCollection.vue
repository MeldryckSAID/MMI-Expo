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
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre9.url"
          :alt="item.oeuvre9.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre10.url"
          :alt="item.oeuvre10.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre11.url"
          :alt="item.oeuvre11.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre12.url"
          :alt="item.oeuvre12.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre13.url"
          :alt="item.oeuvre13.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre14.url"
          :alt="item.oeuvre14.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre15.url"
          :alt="item.oeuvre15.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre16.url"
          :alt="item.oeuvre16.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre17.url"
          :alt="item.oeuvre17.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre18.url"
          :alt="item.oeuvre18.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre19.url"
          :alt="item.oeuvre19.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre18.url"
          :alt="item.oeuvre18.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre19.url"
          :alt="item.oeuvre19.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre20.url"
          :alt="item.oeuvre20.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre21.url"
          :alt="item.oeuvre21.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre22.url"
          :alt="item.oeuvre22.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre23.url"
          :alt="item.oeuvre23.alt"
        />
      </li>
      <li v-for="item in collection" :key="item.id">
        <img
          class="copenhague"
          :src="item.oeuvre24.url"
          :alt="item.oeuvre24.alt"
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
