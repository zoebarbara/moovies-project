<template>
  <q-page class="flex flex-center">
    <q-form
      @submit.prevent="register"
      class="column q-gutter-sm"
      action="http://localhost:9000"
      method="GET"
      width="500px"
    >
      <q-input
        outlined
        v-model="name"
        name="name"
        id="name"
        label="Name"
      ></q-input>
      <q-input
        outlined
        v-model="email"
        type="email"
        id="email"
        label="Email"
      ></q-input>

      <q-input
        outlined
        id="password"
        label="Password"
        v-model="password"
        :type="isPwd ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          ></q-icon>
        </template>
      </q-input>

      <q-input
        outlined
        id="confrimationPassword"
        label="confirmation password"
        v-model="confirmationPassword"
        :type="isPwdConfirmation ? 'password' : 'text'"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwdConfirmation ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwdConfirmation = !isPwdConfirmation"
          ></q-icon>
        </template>
      </q-input>
      <q-toggle
        v-model="accept"
        label="I accept the license and terms"
      ></q-toggle>
      <small v-if="errorMsg">{{ errorMsg }}</small>

      <q-btn label="Register" type="submit" color="primary"></q-btn>
      <p>
        Already have an account?
        <span class="linkRegister">
          <RouterLink :to="{ name: 'login' }">Login here</RouterLink>
        </span>
      </p>
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import { supabase } from "../supabase/supabase";
import { RouterLink, useRouter } from "vue-router";

//Create data
const router = useRouter();
const name = ref(null);
const email = ref(null);
const password = ref(null);
const isPwd = ref(true);
const confirmationPassword = ref(null);
const isPwdConfirmation = ref(true);
const errorMsg = ref(null);

// Register function
const register = async () => {
  if (password.value === confirmationPassword.value) {
    try {
      const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      });
      if (error) throw error;
      alert("<p>You have registered succesfully!</p>");
      router.push({ name: "login" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }

  errorMsg.value = "Password do not match";
  setTimeout(() => {
    errorMsg.value = null;
  }, 5000);

  return { email, password, confirmationPassword, errorMsg, register };
};
</script>
<style></style>
