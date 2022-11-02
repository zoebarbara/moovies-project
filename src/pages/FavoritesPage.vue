<template>
  <q-page class="flex flex-center">
    <h4>Favorite Movies</h4>
    <div
      class="full-width row wrap justify-center items-start content-start q-gutter-md"
    >
      <FavCardComponent
        q-gutter-md
        v-for="favMovie in FavoriteMovies"
        :key="favMovie.id"
        :movie="favMovie"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useUserStore } from "../stores/user.js";
import { useFavoriteMoviesStore } from "src/stores/favorite-movies";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const favMoviesStore = useFavoriteMoviesStore();
const { user } = storeToRefs(userStore);
const { favMovies } = storeToRefs(favMoviesStore);

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const REGION = "es";
const movieList = ref("");
const favoriteMovies = ref("");
console.log(favMovies);
const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const fetchFavMovies = () => {
  console.log("return fetch function" + favMoviesStore.fetchFavMovies());
  favMoviesStore.fetchFavMovies();
};

const props = defineProps(["favMovie"]);

onMounted(() => {
  fetchFavMovies();
});
// console.log(!userStore.user);
// console.log(userStore.user);
</script>
<style></style>
