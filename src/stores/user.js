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

// async register() {
//   if (password.value === confirmationPassword.value) {
//     try {
//       const { error } = await supabase.auth.signUp({
//         email: email.value,
//         password: password.value,
//       });
//       if (error) throw error;
//       alert("<p>You have registered succesfully!</p>")
//       router.push({ name: "login" });
//     } catch (error) {
//       errorMsg.value = error.message;
//       setTimeout(() => {
//         errorMsg.value = null;
//       }, 5000);
//     }
//     return;
//   }

//   errorMsg.value = "Password do not match";
//   setTimeout(() => {
//     errorMsg.value = null;
//   }, 5000);

// async signInWithPassword(email, password) {
//   const { data, error } = await supabase.auth.signInWithPassword({
//     email: email,
//     password: password,
//   });

// }
