<template>
  <q-card
    class="shadow-3 col-3 col-xs-10 col-sm-9 col-md-4 col-lg-3 col-xl-2 my-card"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
      style="height: 500px; width: 100%"
    />
    <q-card-section class="card-text">
      <HeartIconComponent />
      <div class="text-h6">{{ movie.title }}</div>
      <div class="text-subtitle2">{{ movie.overview }}</div>
      <q-btn
        outline
        rounded
        color="primary"
        label="More details"
        :to="{ name: 'moviedetail', params: { index: movie.id } }"
      ></q-btn>
      <q-btn
        outline
        rounded
        color="primary"
        label="Add to favorites"
        @click="addToFavorites()"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<script setup>
import HeartIconComponent from "./HeartIconComponent.vue";
import { useFavoriteMoviesStore } from "../stores/favorite-movies";

const favMoviesStore = useFavoriteMoviesStore();

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const props = defineProps(["movie"]);

// This works with hardoceded data
// console.log(favMoviesStore.favoriteMovies);

//Add favorite
const addToFavorites = () => {
  const favoriteMovie = {
    id: props.movie.id,
    title: props.movie.title,
    overview: props.movie.overview,
    img: props.movie.poster_path,
  };
  favMoviesStore.addFavorite(favoriteMovie);
  console.log(favoriteMovie);
  console.log(favMoviesStore);
};

// Delete Favorite
// const deleteFavorite = (id) => {
//   if (favoriteMovies.value.length != 0) {
//     favoriteMovies.value = favoriteMovies.value.filter(
//       (movie) => movie.id !== id
//     );
//     return;
//   }
// };

//TO_DO: SETUP STORE FAV
// const favMoviesStore = useFavoriteMoviesStore();
// const { favoriteMovies } = storeToRefs(favMoviesStore);

// export const useUserStore = defineStore("user", {
// const userStore = useUserStore();
// const { user } = storeToRefs(userStore);
// export const useFavoriteMoviesStore = defineStore("favoriteMovies", {
</script>

<style>
.my-card {
  width: 30%;
  height: 500px;
}

.card-text {
  height: 300px;
}
</style>
