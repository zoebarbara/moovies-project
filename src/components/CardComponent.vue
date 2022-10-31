<template>
  <!-- <div> -->
  <q-card class="col-3 shadow-3">
    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" />
    <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg" /> -->
    <!-- <img :src="image" :alt="title"/> -->
    <!-- <img src="´${{image}}´" /> -->
    <q-card-section>
      <HeartIconComponent />
      <!-- <div class="text-h6">{{ title.value }}</div>
        <div class="text-subtitle2">{{ description.value }}</div> -->
      <div class="text-h6">{{ movie.title }}</div>
      <div class="text-subtitle2">{{ movie.overview }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import HeartIconComponent from "./HeartIconComponent.vue";
import axios from "axios";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";

const IMG_URL = "https://image.tmdb.org/t/p/w500/";
const props = defineProps({
  movie: Object,
});

// const API_URL = "https://api.themoviedb.org/3";
// const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
// const REGION = "es";
// const headers = {};
// const movieList = ref("");
// const route = useRoute();

// const fetchMovies = async () => {
//   await axios
//     .get(
//       `${API_URL}/movie/popular?api_key=${API_KEY}&language=${REGION}&page=1&region=${REGION}`
//     )
//     .then((response) => {
//       // movieList.value = response.data.results;
//       // const title = movieList.value[0].title;
//     })
//     .catch((error) => console.log(error));
// };

// onMounted(() => {
//   fetchMovies();
// });
</script>

<style>
/* .card-container {
  width: 95%;
  display: flex;
  wrap: no-wrap;
} */
.my-card {
  width: 30%;
  height: 300px;
}
</style>
