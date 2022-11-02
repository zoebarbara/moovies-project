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

// TO-DO : TypeError: supabase.auth.user is not a function lin49.
// onMounted(async () => {
//   console.log("Mounted");
//   try {
//     await userStore.fetchUser(); // here we call fetch user
//     console.log(user.value);
//     if (!user.value) {
//       // redirect them to logout if the user is not there
//       router.push({ path: "/login" });
//     } else {
//       // continue to dashboard
//       router.push({ path: "/" });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });
</script>
