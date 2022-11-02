import { defineStore } from "pinia";

export const useProfileStore = defineStore("profile", {
  state: () => ({
    id: null,
    updated_at: null,
    username: null,
    avatar_url: null,
    favoriteMovies: null,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    //
  },
});
