const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "indexPage",
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
    ],
  },

  {
    path: "/login",
    // name: "login",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("pages/LoginPage.vue"),
      },
    ],
  },

  {
    path: "/register",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "register",
        component: () => import("pages/RegisterPage.vue"),
      },
    ],
  },
  {
    path: "/moviedetail/:index",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "moviedetail",
        component: () => import("pages/MovieDetail.vue"),
        params: true,
      },
    ],
  },
  {
    path: "/profile",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "profile",
        component: () => import("pages/ProfilePage.vue"),
      },
    ],
  },
  {
    path: "/favorites",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "favorites",
        component: () => import("pages/FavoritesPage.vue"),
        params: true,
      },
    ],
  },
  {
    path: "/emailconfirmation",
    name: "emailconfirmation",
    component: () => import("pages/EmailConfirmation.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
