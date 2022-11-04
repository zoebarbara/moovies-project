<template>
  <div class="container">
    <!-- <div class="flex column film-description-container text-white" v-if="movie"> -->
    <div class="film-description-container text-white">
      <p class="text-h3 text-lime-14 title">{{ movie.title }}</p>
      <h5 class="tagline text-blue-grey-3" v-if="movie.tagline">
        {{ movie.tagline }}
      </h5>
      <p class="text-blue-grey-7">{{ movie.overview }}</p>
      <div class="q-pa-md genres flex">
        <q-chip
          v-for="genre in movie.genres"
          :key="genre.id"
          giticon="bookmark"
          color="lime-14"
          class="movieDetails-chip"
        >
          {{ genre.name }}
        </q-chip>
      </div>
      <p class="text-blue-grey-7">Main Characters</p>
      <div class="cast-container">
        <div
          class="text-lime-13 flex column text-center cast-details"
          v-if="artists.cast"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500/${artists.cast[0].profile_path}`"
          />
          {{ artists.cast[0].name }}
        </div>
        <div
          class="text-lime-13 flex column text-center cast-details"
          v-if="artists.cast"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500/${artists.cast[1].profile_path}`"
          />
          {{ artists.cast[1].name }}
        </div>
        <div
          class="text-lime-13 flex column text-center cast-details"
          v-if="artists.cast"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500/${artists.cast[2].profile_path}`"
          />
          {{ artists.cast[2].name }}
        </div>
        <div
          class="text-lime-13 flex column text-center cast-details"
          v-if="artists.cast"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500/${artists.cast[3].profile_path}`"
          />
          {{ artists.cast[3].name }}
        </div>
      </div>
    </div>
    <div
      class="image-container"
      :style="{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
        backgroundPosition: `top center`,
      }"
    ></div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
const movie = ref("");
const artists = ref("");
const route = useRoute();
const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const urlAddress = `${API_URL}/movie/${route.params.index}?api_key=${API_KEY}`;
const urlCastAddress = `${API_URL}/movie/${route.params.index}/credits?api_key=${API_KEY}&language=en-US`;
const fetchMovieDetails = async () => {
  await axios
    .get(urlAddress)
    .then((response) => {
      movie.value = response.data;
      console.log(movie.value);
      console.log(movie.value.title);
    })
    .catch((error) => console.log(error));
};
const fetchCast = async () => {
  await axios
    .get(urlCastAddress)
    .then((response) => {
      artists.value = response.data;
      console.log(response.data);
      console.log(artists.value);
    })
    .catch((error) => console.log(error));
};
const fetchData = () => {
  fetchMovieDetails();
  fetchCast();
};
onMounted(() => fetchData());
</script>
<style>
.container {
  background-color: black;
  display: flex;
}
.image-container {
  width: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  mask-image: linear-gradient(
    to left,
    rgba(0, 0, 0) 60%,
    rgba(39, 47, 48, 0) 100%
  );
}
.film-description-container {
  background-color: black;
  height: 100vh;
  width: 50%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.title {
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  background: linear-gradient(to right, rgb(202, 242, 84), rgb(3, 129, 83));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tagline {
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  margin: 0.2rem 0 0.7rem 0;
}
.genres {
  display: flex;
}
.cast-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.cast-container img {
  width: 7rem;
  height: auto;
  border-radius: 20px;
  margin: 0.5rem;
}
@media screen and (max-width: 640px) {
  .container {
    display: flex;
    flex-direction: column-reverse;
  }
  .image-container {
    width: 100%;
    height: 50vh;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0.8) 70%,
      rgba(0, 0, 0, 0)
    );
  }
  .film-description-container {
    padding-top: 35%;
    padding-bottom: 60%;
    width: 100%;
  }
  .cast-container {
    display: flex;
    width: 100%;
  }
}
</style>
