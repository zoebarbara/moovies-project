<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-blue-grey-10 text-white" height-hint="200">
      <q-toolbar justify-between>
        <q-toolbar-title>
          <q-img src="../assets/logo_moovies2-03.png" style="width: 13rem" />
        </q-toolbar-title>
        <!-- <q-btn flat round dense icon="menu" class="q-mr-sm"></q-btn> -->

        <!-- <q-tabs self-end>
          <q-route-tab to="/" label="Home" />
          <q-route-tab to="/login" label="Login" />
          <q-route-tab to="/register" label="Register" />
          <q-route-tab to="/favorites" label="Favorites" />
          <q-route-tab to="/profile" label="My Profile" />
        </q-tabs> -->

        <div class="gt-sm q-mr-sm">
          <q-btn
            outline
            rounded
            color="blue-grey-4"
            label="Movies"
            to="/"
            class="q-mr-sm"
          ></q-btn>
          <q-btn
            v-if="isUserLogged"
            outline
            rounded
            color="blue-grey-4"
            label="Favoritas"
            to="/favorites"
            class="q-mr-sm"
          ></q-btn>
          <q-btn
            v-if="!isUserLogged"
            outline
            rounded
            color="blue-grey-4"
            label="Login"
            to="/login"
            class="q-mr-sm"
          ></q-btn>
          <q-btn
            v-else
            outline
            rounded
            color="blue-grey-4"
            label="Sign out"
            class="q-mr-sm"
            @click="signUserOut()"
          ></q-btn>
        </div>

        <q-avatar class="gt-sm q-mr-xl">
          <img src="https://cdn.quasar.dev/img/avatar.png" to="/profile" />
        </q-avatar>

        <div class="lt-md q-mr-ms">
          <q-btn
            flat
            dense
            round
            @click="leftDrawerOpen = !leftDrawerOpen"
            icon="menu"
            aria-label="Menu"
          ></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered class="bg-grey-2">
      <q-list>
        <q-item-label header>Menu</q-item-label>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="https://quasar.dev"
        >
          <q-item-section avatar>
            <q-avatar
              ><img src="https://cdn.quasar.dev/img/avatar.png" to="/profile"
            /></q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>Mi perfil</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="https://github.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon color="blue-grey" name="fa-solid fa-film" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Películas</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="http://chat.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon color="blue-grey" name="fa-solid fa-heart" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Favoritas</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          target="_blank"
          rel="noopener"
          href="https://forum.quasar.dev"
        >
          <q-item-section avatar>
            <q-icon
              color="blue-grey"
              name="fa-solid fa-arrow-right-from-bracket"
            />
          </q-item-section>
          <q-item-section>
            <q-item-label>Cerrar sesión</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "../stores/user.js";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);

const leftDrawerOpen = ref(false);
const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const isUserLogged = ref(true);

onMounted(async () => {
  try {
    await userStore.fetchUser();
    if (!user.value) {
      isUserLogged.value = false;
    }
    console.log(user.value);
  } catch (e) {
    console.log(e);
  }
});

const signUserOut = async () => {
  try {
    await userStore.logout();
    await router.push("/login");
  } catch (e) {
    console.log(e);
  }
};
</script>
