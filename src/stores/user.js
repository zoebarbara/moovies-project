// /store/user.js
import { defineStore } from "pinia";
import { supabase } from "../supabase/supabase";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),
  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    async login(email, password) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (data) console.log(data);
      if (error) throw error;
      if (data) this.user = data.user;
    },
    async logout() {
      let { error } = await supabase.auth.signOut();
      if (error) throw error;
    },
  },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
