<template>
  <q-page class="flex flex-center">
    <h1>I'm an index page</h1>
    <!-- <CardComponent
      v-for="movie in movieArr"
      :key="movie.id"
      title="movie.title"
      console.log(movie);
      console.log(movie.title)
      description="movie.overview"
    /> -->
    <CardComponent></CardComponent>
  </q-page>
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

// const fetchMovies = async () => {
//   await axios
//     .get(
//       `${API_URL}/movie/popular?api_key=${API_KEY}&language=${REGION}&page=1&region=${REGION}`
//     )
//     .then((response) => {
//       movieList.value = response.data.results;
//       console.log(movieList.value);
//       console.log(movieList.value[0].title);
//       console.log(movieList.value[0].title);
//     })
//     .catch((error) => console.log(error));
// };

// const movieArr = movieList.value;

// onMounted(() => {
//   fetchMovies();
// });
</script>
