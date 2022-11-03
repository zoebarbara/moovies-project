<template>
  <div class="row full-height">
    <div class="col login-bg flex flex-center gt-sm"></div>
    <div class="col full-height flex flex-center items-center">
      <q-page class="flex flex-center" style="width: 80%">
        <q-form
          @submit.prevent="signUpForm()"
          class="column q-gutter-sm"
          action="http://localhost:9000"
          method="GET"
          style="width: 500px"
        >
          <h5>Log in here</h5>
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

          <small v-if="errorMsg">{{ errorMsg }}</small>

          <q-btn
            label="Login"
            type="submit"
            color="primary"
            :ripple="{ center: true }"
          ></q-btn>
          <p>
            Don't have an account yet?
            <span class="linkRegister">
              <RouterLink :to="{ name: 'register' }">Register here</RouterLink>
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

const email = ref(null);
const password = ref(null);
const isPwd = ref(true);
const errorMsg = ref(null);

const signUpForm = async () => {
  if (email.value && password.value) {
    try {
      userStore.login(email.value, password.value);
      alert("You have log in succesfully!");
      router.push({ name: "home" });
    } catch (error) {
      errorMsg.value = error.message;
      setTimeout(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
};
</script>
<style>
.login-bg {
  height: 100vh;
  background-image: url("../assets/40-the-lord-of-the-rings-the-return-of-the-king.webp");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
