<template>
  <q-icon
    class="icon"
    @click="favoriteStore.isFavourite"
    v-show="favoriteStore.favorite"
    name="fa-solid fa-heart"
  />
  <q-icon
    class="icon"
    @click="favoriteStore.isFavourite"
    v-show="!favoriteStore.favorite"
    name="fa-regular fa-heart"
  />
</template>

<script setup>
import { useFavoriteStore } from "../stores/favorite";

const favoriteStore = useFavoriteStore();
</script>

<style>
.icon {
  color: blue;
  font-size: 2rem;
}
</style>
