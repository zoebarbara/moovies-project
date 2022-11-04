<template>
  <q-card
    class="shadow-4 col-3 col-xs-10 col-sm-5 col-md-3 col-lg-2 col-xl-1 my-card"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`"
      style="height: 30rem; width: 100%"
    />
    <!-- <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" /> -->
    <q-card-section class="card-text justify-between">
      <div class="flex justify-between">
        <div class="text-h6 text-weight-medium text-blue-grey-8">
          {{ movie.title }}
        </div>
        <HeartIconComponent :movie="movie" />
      </div>
      <div class="text-description">{{ movie.overview }}</div>
      <q-btn
        outline
        rounded
        color="primary"
        label="More details"
        :to="{ name: 'moviedetail', params: { index: movie.id } }"
      >
      </q-btn>
      <!-- <q-btn
        outline
        rounded
        color="primary"
        label="Add to favorites"
        @click="addToFavorites()"
      ></q-btn> -->
    </q-card-section>
  </q-card>
</template>

<script setup>
import HeartIconComponent from "./HeartIconComponent.vue";
import { useFavoriteMoviesStore } from "../stores/favorite-movies";

const favMoviesStore = useFavoriteMoviesStore();

const IMG_URL = "https://image.tmdb.org/t/p/w500/";

const props = defineProps({ movie: Object });

//Add favorite
const addToFavorites = () => {
  const favoriteMovie = {
    id: props.movie.id,
    title: props.movie.title,
    overview: props.movie.overview,
    img: props.movie.poster_path,
  };
  favMoviesStore.addFavorite(favoriteMovie);
};
</script>

<style>
.my-card {
  width: 100%;
  height: 300px;
  border-radius: 20px;
}

/* @media screen and (max-width: 640px) {
  .my-card {
    background-color: blue;
  }
}

@media screen and (min-width: 640px) and (max-width: 1280px) {
  .img {
    background: red;
  }
}

@media screen and (min-width: 1280px) {
  .img {
    background: green;
  }
} */

.card-text {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  height: 250px;
}

.text-description {
  height: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: grey;
}
</style>
