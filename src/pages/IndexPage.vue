<template>
  <q-page class="flex flex-center">
    <h4>Most treding films</h4>

    <div
      class="full-width row wrap justify-center items-start content-start q-gutter-md"
    >
      <CardComponent
        v-for="movie in movieList"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </q-page>

  <div class="q-pa-lg flex flex-center">
    <q-pagination v-model="current" :max="5" input></q-pagination>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import CardComponent from "src/components/CardComponent.vue";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const REGION = "es";
const headers = {};
const movieList = ref("");
const route = useRoute();

const props = defineProps({
  movie: Object,
});

const fetchMovies = async () => {
  await axios
    .get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=${REGION}&page=1&region=${REGION}`
    )
    .then((response) => {
      movieList.value = response.data.results;
      console.log(movieList.value);
      console.log(movieList.value[0].title);
      console.log(movieList.value[0].title);
    })
    .catch((error) => console.log(error));
};
const IMG_URL = "https://image.tmdb.org/t/p/w500/";
// console.log(IMG_URL + movie.poster_path);

onMounted(() => {
  fetchMovies();
});
</script>
<style>
/* .class-container {
  width: 95%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: flex-start;
} */
</style>
