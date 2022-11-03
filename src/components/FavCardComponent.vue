<template>
  <q-card
    class="shadow4 col-3 col-xs-10 col-sm-9 col-md-4 col-lg-3 col-xl-2 my-card"
  >
    <img
      :src="`https://image.tmdb.org/t/p/w500/${favMovie.image}`"
      style="height: 30rem; width: 100%"
    />
    <q-card-section class="card-text justify-between">
      <div class="flex justify-between">
        <div class="text-h5">{{ favMovie.title }}</div>
        <HeartIconComponent
          @click="comolates(favMovie.title)"
          :favMovie="movie"
        />
      </div>
      <!-- <div class="text-description">{{ favMovie.overview }}</div> -->
      <q-btn
        outline
        rounded
        color="primary"
        label="More details"
        :to="{ name: 'moviedetail', params: { index: favMovie.iden } }"
      ></q-btn>
      <q-btn
        outline
        rounded
        color="primary"
        label="Delete Favorite"
        @click="deleteFavorite(favMovie.id)"
      ></q-btn>
      <!-- <q-btn outline rounded color="primary" label="Delete Favorite"></q-btn> -->
    </q-card-section>
  </q-card>
</template>

<script setup>
import HeartIconComponent from "./HeartIconComponent.vue";
import { useFavoriteMoviesStore } from "../stores/favorite-movies";

const favMoviesStore = useFavoriteMoviesStore();

const props = defineProps({ favMovie: Object });
// const comolates = (movie) => {
//   console.log("lato pot" + favMovie.Id);
// };

//Delete favorite
const deleteFavorite = async (id) => {
  try {
    console.log(id);
    await favMoviesStore.deleteMovie(id);
    await favMoviesStore.fetchFavMovies();
  } catch (e) {
    console.log(e);
  }
};
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
  /*justify-content: center; */
}

.text-description {
  height: 40%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: grey;
}
</style>
