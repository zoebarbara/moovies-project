<template>
  <q-page class="flex flex-center">
    <h4>Favorites Movies</h4>
    <div
      class="full-width row wrap justify-center items-start content-start q-gutter-md"
    >
      <FavCardComponent
        q-gutter-md
        v-for="movie in array"
        :key="movie.id"
        :favMovie="movie"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useFavoriteMoviesStore } from "src/stores/favorite-movies";
import { onMounted, ref } from "vue";
import FavCardComponent from "src/components/FavCardComponent.vue";

// const props = defineProps(["movie"]);
const props = defineProps({ favMovie: Object });
const favMoviesStore = useFavoriteMoviesStore();

let arrayFilms = JSON.parse(JSON.stringify(favMoviesStore.favoriteMovies));
const array = ref(arrayFilms);

onMounted(async () => {
  try {
    await favMoviesStore.fetchFavMovies();
  } catch (error) {
    console.log(error);
  }
});
</script>
<style>
img {
  width: 200px;
  height: auto;
}
</style>
