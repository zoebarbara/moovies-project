<template>
  <!-- <q-icon
    class="icon text-teal-14"
    @click="isFavorite(), comoLates(favMovie.title)"
    v-show="favorite"
    name="fa-solid fa-heart"
  />
  <q-icon
    class="icon text-teal-14"
    @click="isFavorite(), comoLates(favMovie.title)"
    v-show="!favorite"
    name="fa-regular fa-heart"
  /> -->
  <q-icon
    class="icon text-teal-14"
    @click="deleteFavorite(movie.id)"
    v-show="favorite"
    name="fa-solid fa-heart"
  />
  <q-icon
    class="icon text-teal-14"
    @click="addToFavorites()"
    v-show="!favorite"
    name="fa-regular fa-heart"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useFavoriteMoviesStore } from "../stores/favorite-movies.js";
import { storeToRefs } from "pinia";

const props = defineProps({ movie: Object });
const favMoviesStore = useFavoriteMoviesStore();
// const { favMovie } = storeToRefs(favMovieStore);
const favorite = ref();

// const isFavorite = () => {
//   favorite.value = !favorite.value;
// };

const comoLates = (movie) => {
  console.log("lato por" + movie);
};

//Delete favorite
const deleteFavorite = async (id) => {
  try {
    console.log(id);
    await favMoviesStore.deleteMovie(id);
    await favMoviesStore.fetchFavMovies();
    favorite.value = false;
  } catch (e) {
    console.log(e);
  }
};

//Add favorite
const addToFavorites = () => {
  const favoriteMovie = {
    id: props.movie.id,
    title: props.movie.title,
    overview: props.movie.overview,
    img: props.movie.poster_path,
  };
  favMoviesStore.addFavorite(favoriteMovie);
  favorite.value = true;
  console.log(favoriteMovie);
  console.log(favMoviesStore);
};

//initialize state
// const initialize = () => {

//   map(favMoviesStore.favoriteMovies => )
// }
console.log(favMoviesStore.favoriteMovies);

// onMounted(async () => {
//   try {
//     await userStore.fetchUser();
//     if (!user.value) {
//       isUserLogged.value = false;
//     }
//     console.log(user.value);
//   } catch (e) {
//     console.log(e);
//   }
// });
</script>

<style>
.icon {
  font-size: 1.5rem;
}
</style>
