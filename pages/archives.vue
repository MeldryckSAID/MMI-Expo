<script setup>
const { client } = usePrismic();
const { data: artistes } = await useAsyncData("artistes", () =>
  client.getAllByType("artistes")
);

const exposition = ref([]);

artistes.value.forEach((artiste) => {
  let imgList = [];
  artiste.data.artiste__art.forEach((art) => {
    let img = art.art__img.url;
    let alt = art.art__img.alt;
    imgList.push({ img: img, alt: alt });
  });
  let data = {
    name: artiste.data.name[0].text,
    images: imgList,
  };
  let index = exposition.value.findIndex((expo) => {
    return expo.year == artiste.data.year[0].text;
  });
  if (index == -1) {
    exposition.value.push({
      year: artiste.data.year[0].text,
      data: [data],
    });
  } else {
    exposition.value[index].data.push(data);
  }
});

exposition.value.sort((a, b) => {
  return a.year - b.year;
});

let selectedYear = ref();

const filteredByYear = computed(() => {
  if (selectedYear.value) {
    return exposition.value.filter((expo) => {
      return expo.year == selectedYear.value;
    });
  } else {
    return exposition.value;
  }
});

useSeoMeta({
  title: "MMI Exposition | Archives Photo",
  ogTitle: "MMI Exposition | Archives Photo",
  description:
    "Retrouvez toutes les images des expositions passées et en cours",
  ogDescription:
    "Retrouvez toutes les images des expositions passées et en cours",
  ogImage: "/favicon.png",
});
</script>
<template>
  <MyOutro
    ><span class="relative"
      >Archives photo
      <MyIconBis name="Losange" position="topRight" size="medium" />
      <MyIconBis name="LosangeBis" position="bottomLeft" size="small" /> </span
  ></MyOutro>
  <select>
    <option value="" disabled selected>Année</option>
    <option value="" @click="selectedYear = ''">Toutes</option>
    <option
      v-for="(expo, i) in exposition"
      :key="i"
      :value="expo.year"
      @click="selectedYear = expo.year"
    >
      {{ expo.year }}
    </option>
  </select>
  <div class="container" v-for="(expo, i) in filteredByYear" :key="i">
    <div class="background-date">
      {{ expo.year }}
    </div>
    <div class="presentation">
      <MyTitle font="arc" el="h2" size="medium"
        >Exposition {{ expo.year }} - {{ parseInt(expo.year) + 1 }}
      </MyTitle>
      <p class="text">
        {{
          expo.data
            .reduce((acc, curr) => {
              return acc + curr.name + ", ";
            }, "")
            .slice(0, -2)
        }}
      </p>
    </div>
    <div class="galery relative">
      <MyIconBis name="Losange" position="topLeft" size="small" />
      <MyIconBis name="BottomLeft" position="bottomLeft" size="big" />
      <MyIconBis name="TopRight" position="topRight" size="medium" />
      <div v-for="(artistes, index) in expo.data" :key="index">
        <NuxtImg
          format="avif"
          v-for="img in artistes.images"
          :key="img"
          :src="img.img"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
select {
  max-width: 200px;
  border: 2px solid #000;
  background: none;
  padding: 1rem;
  margin-left: 5%;
  margin-top: 5%;
}
.presentation .text {
  padding: 2%;
}
.reversed {
  text-align: end;
}
.container {
  position: relative;
  padding-inline: 5%;
}
.galery {
  position: relative;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 3rem 0;
  img {
    width: 100%;
    object-fit: cover;
  }
}

.background-date {
  display: none;
}

@media (min-width: 625px) {
  .background-date {
    padding-top: 8%;
    position: absolute;
    overflow-x: hidden;
    max-width: 100vw;
    top: -150px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20vw;
    color: $g-gray2;
    z-index: -1;
    pointer-events: none;
    font-family: $okine;
    font-weight: 900;
  }
}
</style>
