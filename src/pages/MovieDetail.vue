<template>
  <div class="row container">
    <!-- <div class="flex column film-description-container text-white" v-if="movie"> -->
    <div class="flex column film-description-container text-white">
      <h3>{{ movie.title }}</h3>
      <h5>{{ movie.tagline }}</h5>
      <h4>2022</h4>
      <ul v-for="genre in movie.genres" :key="genre.id">
        <li>{{ genre.name }}</li>
      </ul>
      <p>{{ movie.overview }}</p>
    </div>
    <div
      class="full-height image-container"
      :style="{
        backgroundImage: `linear-gradient(
        to right,
        rgba(0, 0, 0) 0%,
        rgba(9, 9, 13, 0.85) 15%,
        rgba(9, 9, 13, 0.6012998949579832) 26%,
        rgba(39, 47, 48, 0) 100%
      ),url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
      }"
    >
      <!-- <q-page class="flex flex-center" style="width: 80%"> </q-page> -->
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { computed, watch, ref, onMounted } from "vue";
import axios from "axios";

const movie = ref("");
const route = useRoute();
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const urlAddress = `${API_URL}/movie/${route.params.index}?api_key=${API_KEY}`;

const fetchMovieDetails = async () => {
  await axios
    .get(urlAddress)
    .then((response) => {
      movie.value = response.data;
      console.log(movie.value);
      console.log(movie.value.title);
    })
    .catch((error) => console.log(error));
};
// watch(
//   () => movie.value,
//   () => fetchMovieDetails()
// );
onMounted(() => fetchMovieDetails());
</script>
<style>
.container {
  height: 100vh;
  background-color: black;
}
.image-container {
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

.film-description-container {
  background-color: black;
  height: 100vh;
  width: 50%;
  padding: 5%;
}
</style>

<!-- background-image: linear-gradient(
  to right,
  rgba(0, 0, 0) 0%,
  rgba(9, 9, 13, 0.85) 15%,
  rgba(9, 9, 13, 0.6012998949579832) 26%,
  rgba(39, 47, 48, 0) 100%
)
url("../assets/the-good-nurse-poster.webp"); -->
