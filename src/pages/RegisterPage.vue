<template>
  <div class="row full-height">
    <div class="col login-bg flex flex-center gt-sm">
      <h1 class="text-white">Basic</h1>
    </div>
    <div class="col full-height flex flex-center items-center">
      <q-page class="flex flex-center" style="width: 80%">
        <q-form
          @submit.prevent="signUpForm()"
          class="column q-gutter-sm"
          action="http://localhost:9000"
          method="GET"
          style="width: 100%"
        >
          <h5>Sign up here</h5>
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
          <!-- <q-toggle
        v-model="accept"
        label="I accept the license and terms"
      ></q-toggle> -->
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
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/user.js";
import { RouterLink, useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

//Create reactive data
const name = ref(null);
const email = ref(null);
const password = ref(null);
const isPwd = ref(true);
const confirmationPassword = ref(null);
const isPwdConfirmation = ref(true);
const errorMsg = ref(null);

// Sign Up Form function
const signUpForm = async () => {
  if (password.value === confirmationPassword.value) {
    try {
      userStore.signUp(email.value, password.value);
      alert("<p>You have registered succesfully!</p>");
      router.push({ name: "emailConfirmation" });
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
};
</script>

<style>
.login-bg {
  height: 90vh;
  background-image: url("https://cdn.quasar.dev/img/parallax2.jpg");
}
</style>
