<template>
  <q-page class="flex flex-center column text-center">
    <p color="blue-grey" class="title q-mt-xl text-h3">
      A curated selection of your
      <q-icon color="green-13" name="fa-solid fa-heart" /> movies
    </p>
    <p class="q-mb-xl text-h6 text-blue-grey-5">
      Estas son las películas que te han cambiado la vida.
    </p>
    <div
      class="full-width row wrap justify-center items-start content-start q-gutter-md"
    >
      <FavCardComponent
        q-gutter-md
        v-for="movie in favoriteMovies"
        :key="movie.id"
        :favMovie="movie"
      />
    </div>
  </q-page>
</template>

<script setup>
import { useFavoriteMoviesStore } from "src/stores/favorite-movies";
import { onMounted, ref, toRaw, watch, reactive } from "vue";
import { storeToRefs } from "pinia";
import FavCardComponent from "src/components/FavCardComponent.vue";

const favMoviesStore = useFavoriteMoviesStore();
const { favoriteMovies } = storeToRefs(favMoviesStore);

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
