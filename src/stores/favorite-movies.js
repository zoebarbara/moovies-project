import { defineStore } from "pinia";

export const useFavoriteMoviesStore = defineStore("favoriteMovies", {
  state: () => ({
    favoriteMovies: [],
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2,
  },
  actions: {
    // async fetchFavoriteMovies() {
    //   const favoriteMovies = await supabase
    //   .from('FavoriteMoviesSmall')
    //   .select('id')
    // },
  },

  // let { data: FavoriteMoviesSmall, error } = await supabase
  //   .from('FavoriteMoviesSmall')
  //   .select('id')

  //   async signUp(email, password) {
  //     const { user, error } = await supabase.auth.signUp({
  //       email: email,
  //       password: password,
  //     });
  //     if (error) throw error;
  //     if (user) this.user = user;
  //   },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "favoriteMovies",
        storage: localStorage,
      },
    ],
  },
});
