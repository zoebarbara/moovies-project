import { defineStore } from "pinia";
import { supabase } from "src/supabase/supabase";

export const useFavoriteMoviesStore = defineStore("favoriteMovies", {
  state: () => ({
    favoriteMovies: [],
  }),
  // getters: {
  //   favs() {
  //     return this.favoriteMovies;
  //   },
  // },

  actions: {
    async fetchFavMovies() {
      const { data: favoriteMovies, error } = await supabase
        .from("FavoriteMovies")
        .select("*");
      this.favoriteMovies = favoriteMovies;
      if (error) throw error;
    },

    async addFavorite(favoriteMovie) {
      console.log(favoriteMovie);
      console.log(favoriteMovie.id);
      const { data, error } = await supabase.from("FavoriteMovies").insert([
        {
          id: favoriteMovie.id,
          title: favoriteMovie.title,
          overview: favoriteMovie.overview,
          img: favoriteMovie.img,
        },
      ]);
      if (data) console.log(data);
      if (error) throw error;
    },

    async deleteMovie(id) {
      try {
        const { error } = await supabase
          .from("favoriteMovies")
          .delete()
          .eq("id", id);
        this.errors = null;
        if (error) throw error;
      } catch (error) {
        this.errors = "We couldn't delete your movie, try again please. ";
      }
    },
  },
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
