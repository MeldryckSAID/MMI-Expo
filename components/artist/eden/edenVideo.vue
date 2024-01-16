<template>
  <div>
    <div class="presentation">
      <MyTitle class="reversed" font="arc" el="h2" size="medium"
        >Vidéos
      </MyTitle>
    </div>
    <ul class="galery">
      <li v-for="item in video" :key="item.id">
        <video controls class="video">
          <source
            :src="item.video1.url"
            :type="getVideoType(item.video1.url)"
          />
          Votre navigateur ne supporte pas les vidéos HTML5.
        </video>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  video: Array,
});

const getVideoType = (url) => {
  // Déterminez le type MIME de la vidéo à partir de l'extension de fichier
  if (url.endsWith(".mp4")) return "video/mp4";
  if (url.endsWith(".webm")) return "video/webm";
  // Ajoutez d'autres formats si nécessaire
};
</script>

<style lang="scss" scoped>
.text {
  padding: 2%;
}
.reversed {
  text-align: end;
}

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
.galery video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
