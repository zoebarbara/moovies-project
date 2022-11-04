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
import { ref, onMounted, watch } from "vue";
import { useFavoriteMoviesStore } from "../stores/favorite-movies.js";
import { storeToRefs } from "pinia";

const props = defineProps({ movie: Object });
const favMoviesStore = useFavoriteMoviesStore();
const { favMovie } = storeToRefs(favMoviesStore);
const favorite = ref();

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

const checkFavorites = (movie) => {
  favMoviesStore.favoriteMovies.some(function (element) {
    if (element.title === movie.title) {
      return (favorite.value = true);
      console.log(favorite.value);
      console.log(movie.title);
    } else {
      return (favorite.value = false);
      console.log(favorite.value);
    }
  });
};

watch(
  () => favMoviesStore.favoriteMovies,
  () => checkFavorites(props.movie)
);
// watch(favMovie, async () => {
//     try {
//       const res = await fetch('https://yesno.wtf/api')
//       answer.value = (await res.json()).answer
//     } catch (error) {
//       answer.value = 'Error! Could not reach the API. ' + error
//     }
//   }
// })

onMounted(() => {
  checkFavorites(props.movie);
});
</script>

<style>
.icon {
  font-size: 1.5rem;
}
</style>
