<template>hola</template>
<!-- <template>
  <q-icon
    class="icon text-teal-14"
    @click="isFavorite()"
    v-show="favorite"
    name="fa-solid fa-heart"
  />
  <q-icon
    class="icon text-teal-14"
    @click="isFavorite()"
    v-show="!favorite"
    name="fa-regular fa-heart"
  />
</template>


<script setup>
import { ref, onMounted } from "vue";
import { useFavoriteMoviesStore } from "../stores/favorite-movies.js";
import { storeToRefs } from "pinia";

const favMovieStore = useFavoriteMoviesStore();
const { favMovie } = storeToRefs(favMovieStore);
const favorite = ref(false);

const isFavorite = () => {
  favorite.value = !favorite.value;
};

onMounted(async () => {
  try {
    await userStore.fetchUser();
    if (!user.value) {
      isUserLogged.value = false;
    }
    console.log(user.value);
  } catch (e) {
    console.log(e);
  }
});
</script>

<style>
.icon {
  font-size: 1.5rem;
}
</style> -->
