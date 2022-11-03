<template>
  <q-page class="flex flex-center column text-center">
    <text-h2 color="blue-grey" class="title q-mt-xl">
      <q-icon color="green-13" name="fa-solid fa-bolt" />
      Hot moovies for today</text-h2
    >
    <text-h3 class="q-mb-xl"
      >Estas son las películas más vistas en los últimos meses. Seleccionadas
      con cariño para ti.</text-h3
    >
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
import { onMounted, ref } from "vue";
import axios from "axios";
import CardComponent from "src/components/CardComponent.vue";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const REGION = "es";
const movieList = ref("");

defineProps(["movie"]);

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
const IMG_URL = "https://image.tmdb.org/t/p/w500/";

onMounted(() => {
  fetchMovies();
});
// console.log(!userStore.user);
// console.log(userStore.user);
</script>
<style>
.title {
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  font-weight: 600;
  color: rgb(33, 39, 43);
}
</style>
