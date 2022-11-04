<template>
  <div class="row container">
    <!-- <div class="flex column film-description-container text-white" v-if="movie"> -->
    <div class="flex column film-description-container text-white">
      <p class="text-h3 text-lime-14 title">{{ movie.title }}</p>
      <h5 class="tagline" v-if="movie.tagline">{{ movie.tagline }}</h5>
      <div class="q-pa-md genres flex row">
        <q-chip
          v-for="genre in movie.genres"
          :key="genre.id"
          icon="bookmark"
          color="lime-14"
        >
          {{ genre.name }}
        </q-chip>
      </div>
      <p class="text-blue-grey-4">{{ movie.overview }}</p>
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
import { ref, onMounted } from "vue";
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  background: linear-gradient(to right, rgb(202, 242, 84), rgb(3, 129, 83));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.tagline {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
}

.genres {
  display: flex;
}
</style>
