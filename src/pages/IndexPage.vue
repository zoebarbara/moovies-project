<template>
  <q-page class="flex flex-center">
    <h4>Most treding films</h4>
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

  <div class="q-pa-lg flex flex-center">
    <q-pagination v-model="current" :max="5" input></q-pagination>
  </div>
</template>

<script setup>
import { useUserStore } from "../stores/user.js";
import { onMounted, ref } from "vue";
import axios from "axios";
import CardComponent from "src/components/CardComponent.vue";
import { supabase } from "src/supabase/supabase";

const userStore = useUserStore();
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const REGION = "es";
const movieList = ref("");
const favoriteMovies = ref("");

// const props = defineProps({
//   movie: Object,
// });

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

// const getFavoriteMovies = async () => {
//   try {
//     const { data, error } = await supabase
//       .from("FavoriteMoviesSmall")
//       .select("*");
//     if (error) throw error;
//     console.log(data);
//     favoriteMovies.value = data;
//     console.log(favoriteMovies.value);
//   } catch (error) {
//     console.warn(error.message);
//   }
// };

// getFavoriteMovies();

onMounted(() => {
  fetchMovies();
});
console.log(!userStore.user);
console.log(userStore.user);
</script>
<style></style>
