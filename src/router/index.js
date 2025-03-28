import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import DetailUser from "../views/DetailUser.vue";
import UserForm from "../views/UserForm.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "DefaultLayout",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "Home",
          component: Home,
        },
        {
          path: "user",
          name: "User",
          component: User,
        },
        {
          path: "user/new",
          name: "NewUser",
          component: UserForm,
        },
        {
          path: "detail-user/:id",
          name: "DetailUser",
          component: DetailUser,
        }
      ]
    },
  ],
});

export default router;
