<template>
  <q-layout view="hHh lpR fFf">
    <q-header
      elevated
      class="bg-primary text-white flex justify-between"
      height-hint="200"
      style="height: 80px; padding: 0 20px"
    >
      <q-btn flat round dense icon="menu" class="q-mr-sm"></q-btn>
      <!-- <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar> -->

      <q-tabs self-end>
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/login" label="Login" />
        <q-route-tab to="/register" label="Register" />
        <q-route-tab to="/favorites" label="Favorites" />
        <q-route-tab to="/profile" label="My Profile" />
      </q-tabs>

      <q-avatar size="70px">
        <q-item to="/profile">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
        </q-item>
      </q-avatar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
  </q-layout>
</template>
