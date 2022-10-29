import { defineStore } from "pinia";

export const useFavoriteStore = defineStore("favoriteStore", {
  state: () => ({
    favorite: false,
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    isFavourite() {
      this.favorite = !this.favorite;
    },
  },
});
