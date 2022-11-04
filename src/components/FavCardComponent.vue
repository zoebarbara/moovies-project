<template>
  <q-card
    class="shadow-4 col-3 col-xs-10 col-sm-5 col-md-3 col-lg-2 col-xl-1 my-card"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500/${movie.image}`"
      style="height: 25rem; width: 100%"
    />
    <q-card-section class="card-text justify-between">
      <div class="flex justify-between">
        <div class="text-h">{{ movie.title }}</div>
        <HeartIconComponent :movie="movie" />
      </div>
      <div class="text-description">{{ movie.overview }}</div>
      <q-btn
        outline
        rounded
        color="primary"
        label="More details"
        :to="{ name: 'moviedetail', params: { index: movie.iden } }"
      ></q-btn>
    </q-card-section>
  </q-card>
</template>

<script setup>
import HeartIconComponent from "./HeartIconComponent.vue";
// import { useFavoriteMoviesStore } from "../stores/favorite-movies";

const props = defineProps({ movie: Object });
</script>

<style>
.my-card {
  width: 100%;
  height: 290px;
  border-radius: 20px;
}

.card-text {
  height: 290px;
  display: flex;
  flex-direction: column;
}

.text-description {
  height: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: grey;
}
</style>
