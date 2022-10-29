<template>
  <div class="row full-height">
    <div class="col login-bg flex flex-center">
      <h1 class="text-white">Basic</h1>
    </div>
    <div class="col full-height flex flex-center items-center">
      <q-page class="flex flex-center">
        <q-form
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

const name = ref(null);
const email = ref(null);
const password = ref(null);
const isPwd = ref(true);
const confirmationPassword = ref(null);
const isPwdConfirmation = ref(true);
const errorMsg = ref(null);
</script>
<style></style>
