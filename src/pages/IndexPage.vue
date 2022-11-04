<template>
  <q-page class="flex flex-center column text-center">
    <p color="blue-grey" class="title q-mt-xl text-h4">
      <q-icon color="green-13" name="fa-solid fa-bolt" />
      Hot moovies for today
    </p>
    <p class="q-mb-xl text-h6 text-blue-grey-5">
      Estas son las películas más vistas en los últimos meses.<br />
      Seleccionadas con cariño para ti.
    </p>
    <div
      class="full-width row wrap justify-center items-start content-start q-gutter-md"
    >
      <CardComponent
        q-gutter-md
        v-for="movie in movieList"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </q-page>

  <!-- pagination -->
  <!-- <div class="q-pa-lg flex flex-center">
    <q-pagination v-model="current" :max="5" input></q-pagination>
  </div> -->
</template>

<script setup>
import { useUserStore } from "../stores/user.js";
import { useFavoriteMoviesStore } from "../stores/favorite-movies";
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import axios from "axios";
import CardComponent from "src/components/CardComponent.vue";

//FavoriteMovies Store
const favMoviesStore = useFavoriteMoviesStore();
const movieList = ref("");
defineProps(["movie"]);

//Call to TMDB API
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const REGION = "es";

const fetchMovies = async () => {
  await axios
    .get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=${REGION}&page=1&region=${REGION}`
    )
    .then((response) => {
      movieList.value = response.data.results;
    })
    .catch((error) => console.log(error));
};

onMounted(() => {
  fetchMovies();
});
</script>
<style>
.title-index {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: rgb(33, 39, 43);
}
</style>
