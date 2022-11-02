import { defineStore } from "pinia";
import { supabase } from "src/supabase/supabase";

export const useFavoriteMoviesStore = defineStore("favoriteMovies", {
  state: () => ({
    favoriteMovies: [],
  }),

  actions: {
    // async fetchFavMovies() {
    //   const { data: FavoriteMovies, error } = await supabase
    //     .from("FavoriteMovies")
    //     .select("*");
    //   if (FavoriteMovies) console.log(FavoriteMovies);
    //   this.FavoriteMovies = FavoriteMovies;
    //   if (error) console.warn(error);
    //   if (error) throw error;
    // },

    async addFavoritesToStore(favoriteMovie) {
      console.log(favoriteMovie);
      console.log(favoriteMovie.id);
      const { data, error } = await supabase.from("FavoriteMovies").insert([
        {
          movie_id: favoriteMovie.id,
          movie_title: favoriteMovie.title,
          movie_overview: favoriteMovie.overview,
          movie_img: favoriteMovie.img,
        },
      ]);
      if (data) console.log(data);
      if (error) throw error;
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
