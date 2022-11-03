<template>
  <q-page class="flex flex-center column text-center">
    <text-h2 color="blue-grey" class="title q-mt-xl">
      A curated selection of your
      <q-icon color="green-13" name="fa-solid fa-heart" /> movies
    </text-h2>
    <text-h3 class="q-mb-xl">
      Estas son las películas más vistas en los últimos meses. Seleccionadas con
      cariño para ti.
    </text-h3>
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

// TO-DO: No entiendo para que sirve esto
// const { favoriteMovies } = storeToRefs(favMoviesStore);

//To-do: La unica manera de poder recger data de S
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
