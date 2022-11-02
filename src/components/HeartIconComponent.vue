<template>
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
import { ref } from "vue";
const favorite = ref(false);

const isFavorite = () => {
  favorite.value = !favorite.value;
};
</script>

<style>
.icon {
  font-size: 1.5rem;
}
</style>
