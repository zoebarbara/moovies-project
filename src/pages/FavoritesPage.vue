<template>
  <q-page class="flex flex-center column text-center">
    <p color="blue-grey" class="title q-mt-xl text-h3">
      A curated selection of your
      <q-icon color="green-13" name="fa-solid fa-heart" /> movies
    </p>
    <p class="q-mb-xl text-h5">
      Estas son las películas más vistas en los últimos meses. Seleccionadas con
      cariño para ti.
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

// const props = defineProps(["movie"]);
// const props = defineProps({ favMovie: Object });
const favMoviesStore = useFavoriteMoviesStore();

// TO-DO: No entiendo para que sirve esto
const { favoriteMovies } = storeToRefs(favMoviesStore);
console.log(toRaw(favoriteMovies.value));

// const arrayFavMovies = reactive({ movies: toRaw(favoriteMovies.value) });

// To-do: La unica manera de poder recger data de S
let arrayFilms = JSON.parse(JSON.stringify(favMoviesStore.favoriteMovies));
const array = ref(arrayFilms);

const getfavMovies = async () => {
  await favMoviesStore.fetchFavMovies();
};

// watch(
//   () => array,
//   () => {
//     console.log("se ejecuta");
//     getfavMovies();
//   }
// );
getfavMovies();
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
