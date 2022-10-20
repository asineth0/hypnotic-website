import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/docs",
      component: () => import("../views/DocsView.vue"),
    },
    {
      path: "/guides",
      component: () => import("../views/GuidesView.vue"),
    },
    {
      path: "/mods",
      component: () => import("../views/ModsView.vue"),
    },
  ],
});
