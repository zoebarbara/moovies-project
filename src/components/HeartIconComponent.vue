<template>
  <q-icon
    class="icon text-green-13"
    @click="deleteFavorite(movie.id)"
    v-show="favorite"
    name="fa-solid fa-heart"
  />
  <q-icon
    class="icon text-green-13"
    @click="addToFavorites()"
    v-show="!favorite"
    name="fa-regular fa-heart"
  />
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useFavoriteMoviesStore } from "../stores/favorite-movies.js";

const props = defineProps({ movie: Object });
const favMoviesStore = useFavoriteMoviesStore();
const favorite = ref();

//Delete favorite
const deleteFavorite = async (id) => {
  try {
    alert(`Film has been deleted`);
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
  alert(`Film ${props.movie.title} has been saved in your favorites`);
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

onMounted(() => {
  checkFavorites(props.movie);
});
</script>

<style>
.icon {
  font-size: 1.5rem;
  background: linear-gradient(to right, rgb(161, 210, 16), rgb(3, 129, 83));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
