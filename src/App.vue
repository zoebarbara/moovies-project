<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const API_URL = "https://api.themoviedb.org/3";
// const API_KEY = "5d35e60800e226e95b3d8bc3a754c0cb";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const REGION = "es";

const headers = {};
const movieList = ref("");

const fetchMovies = async () => {
  const data = await axios.get(
    `${API_URL}/movie/popular?api_key=${API_KEY}&language=${REGION}&page=1&region=${REGION}`
  );
  console.log("data", data);
};

onMounted(() => {
  fetchMovies();
});
</script>
