<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const REGION = "es";

const headers = {};
const movieList = ref("");
const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

// onMounted(async () => {
//   try {
//     await userStore.fetchUser();
//     if (!user.value) {
//       // Not logged user. Redirect them to Log in page
//       // router.push({ path: "/login" });
//     } else {
//       // Logged user. Redirect their dashboard
//       // router.push({ path: "/favorites" });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });
</script>
