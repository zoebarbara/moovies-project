<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
      <!-- <img src="´${{image}}´" /> -->
      <q-card-section>
        <HeartIconComponent />
        <!-- <div class="text-h6">{{ title.value }}</div>
        <div class="text-subtitle2">{{ description.value }}</div> -->
        <div class="text-h6">title</div>
        <div class="text-subtitle2">description</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import HeartIconComponent from "./HeartIconComponent.vue";
import axios from "axios";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const REGION = "es";
const headers = {};
const movieList = ref("");
const route = useRoute();

const fetchMovies = async () => {
  await axios
    .get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=${REGION}&page=1&region=${REGION}`
    )
    .then((response) => {
      // movieList.value = response.data.results;
      // const title = movieList.value[0].title;
      // console.log(movieList.value);
      // console.log(movieList.value[0].title);
      // console.log(movieList.value[0].title);
    })
    .catch((error) => console.log(error));
};

onMounted(() => {
  fetchMovies();
});

// console.log("movies list", movieList.value);
// console.log("movies title", movieList.value[0].title);
// console.log("movies desc", movieList.value[0].overview);

// const title = ref(movieList.value[0].title);
// const description = ref(movieList.value[0].overview);
// defineProps({
//   image: String,
//   title: String,
//   description: String,
// });
</script>

<style></style>
