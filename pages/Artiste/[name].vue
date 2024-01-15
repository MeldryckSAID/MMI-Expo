<script setup>
const route = useRoute();
const name = route.params.name;
const { client } = usePrismic();
const { data: artiste } = await useAsyncData("Artiste", () => {
  const document = client.getByUID("artistes", name);
  if (document) {
    return document;
  } else {
    throw createError({ statusCode: 404, message: "Page not found" });
  }
});
</script>

<template>
  <div class="p-artiste">
    <div class="p-artiste__intro">
      <NuxtImg
        :src="artiste.data.presentation__img.url"
        :alt="'image de ' + artiste.data.name[0].text"
        class="p-artiste__img"
      />
      <h1 class="p-artiste__title">
        {{ artiste.data.name[0].text }}
        <span>{{ artiste.data.type[0].text }}</span>
      </h1>
      <p>{{ artiste.data.description[0].text }}</p>
    </div>
    <img src="/img/Rectangle.png" aria-hidden class="p-artiste__imgdeco" />

    <div class="p-artiste__grid">
      <div v-for="(img, i) in artiste.data.artiste__art" :key="i">
        <NuxtImg
          format="avif"
          :src="img.art__img.url"
          :alt="img.art__name[0].text"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.p-artiste {
  padding-top: 3rem;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__intro {
    display: grid;
    max-width: 90%;
    grid-template-areas:
      "title"
      "img"
      "text";
    gap: 2rem;
    place-items: center;
    @include large-up {
      place-items: start;
      grid-template-areas:
        "img title"
        "img text";
    }
  }
  &__img {
    grid-area: img;
    width: 300px;
  }
  p {
    grid-area: text;
    max-width: 700px;
    margin-bottom: 1rem;
    padding: 1rem;
  }
  &__title {
    grid-area: title;
    display: flex;
    width: fit-content;
    flex-direction: column;
    text-transform: uppercase;
    font-family: "Archivo", sans-serif;
    font-weight: 900;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
    @include large-up {
      text-align: left;
    }
  }
  &__imgdeco {
    position: absolute;
    top: 150px;
    left: 0;
    right: 0;
    z-index: -1;
    width: 100%;
  }
  &__grid {
    max-width: 90%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 2rem 0;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
}
</style>
