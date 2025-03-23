import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "DefaultLayout",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        }
      ]
    },
  ],
});

export default router;
